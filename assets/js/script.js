// 시작시 모달 보여줌
const modal = new bootstrap.Modal(document.querySelector('#modal'), {});

document.onreadystatechange = () => modal.show();

// offcanvas 관련
const offcanvas = document.querySelector('#offcanvasInfo');

offcanvas.addEventListener('show.bs.offcanvas', (e) => {
    console.log(e, e.relatedTarget, e.relatedTarget.dataset.infoId);
    const infoId = e.relatedTarget.dataset.infoId;

    //제목
    document.querySelector('#offcanvasLabel').textContent = `${infoId}. ${items[infoId]}`;

    //본문
    document.querySelector('#offcanvasContent').innerHTML = contents[infoId];

    // 유투부
    const _youtube = youtube[infoId];
    if (_youtube) {
        const _ydiv = document.createElement('div');
        _ydiv.id = 'youtube';
        _ydiv.classList.add('embed-responsive');
        const _yif = document.createElement('iframe');
        _yif.classList.add('embed-responsive-item');
        _yif.setAttribute('crossorigin', 'anonymous');
        _yif.src = _youtube;
        _ydiv.appendChild(_yif);

        document.querySelector('#offcanvasContent').appendChild(_ydiv);
    }
    //document.querySelector('#btnYoutube').addEventListener('click', (e) => window.open(youtube[infoId], 'youtubePop'));
});

let current = 0;

// 사용자가 선택한 값들
const selected = [];

// 질문 객체
class Question {
    message;
    options;
    short_title;
    constructor(short_title, message, options) {
        this.short_title = short_title;
        this.message = message;
        this.options = options;
    }
}

//질문들
const questions = [
    new Question('가) 퇴직사유', '가) 고객님의 퇴직사유를 알려주세요', [{ text: '명예퇴직' }, { text: '정년퇴직' }]),
    new Question('나) 재직기간', '나) 고객님의 재직기간은 몇년 이신가요?(합산, 사병 기간등 가산기간 포함)', [{ text: '10년이상' }]),
    new Question('다) 급여청구 여부', '다) 급여를 청구 하실 건가요?', [{ text: '네' }, { text: '아니오' }]),
    new Question('라) 퇴직급여 종류', '라) 퇴직 급여 종류를 선택해 주세요?', [{ text: '미정' }, { text: '퇴직연금' }, { text: '퇴직연금일시금' }, { text: '퇴직연금 공제일시금' }]),
    new Question('마) 퇴직수당 청구여부', '마) 퇴직수당을 청구 하실 건가요?', [{ text: '청구' }, { text: '미청구' }]),
];

// 채팅 시작
const chatStart = () => {
    document.getElementById('messages').innerHTML = '';

    current = 0;

    const _div = document.createElement('div');
    //_div.classList.add(classname);
    _div.classList.add('pb-4', 'text-center');
    document.getElementById('messages').appendChild(_div);
    const _span = document.createElement('span');

    _span.textContent = moment().locale('ko').format('YYYY MMMM Do a h:mm');
    _div.appendChild(_span);
    _div.appendChild(document.createElement('hr'));

    chat({ message: '공적연금 종합안내를 위해<br>고객님의 현재 상황을 알려주세요' });

    chat(questions[current]);
};

// 메세지 창 생성
const messagediv = (question) => {
    const { message, options } = question;

    const third = document.createElement('div');
    const thirdClasses = ['flex-shrink-1', 'bg-light', 'rounded', 'py-2', 'px-3'];
    third.classList.add(...thirdClasses);

    const msgDiv = document.createElement('div');
    msgDiv.classList.add('mb-1', 'lead');
    msgDiv.innerHTML = message.replaceAll('\n', '<br>');

    third.appendChild(msgDiv);

    if (options) {
        options.forEach((o, index) => {
            const option = document.createElement('div');
            option.classList.add('rounded', 'bg-secondary', 'bg-opacity-10', 'p-3', 'mt-1', 'pointer');
            option.name = 'option' + current;

            const optionTxt = `${index + 1}. ${o.text}`;
            option.onclick = (e) => {
                selected[current] = o.text;
                answer(optionTxt);
                e.target.classList.add('bg-opacity-25');

                // 대답한 질문에 또 대답할수 없도록 click 이벤트 회수
                const sibling = e.target.parentElement.children;

                for (let el of sibling) {
                    el.onclick = undefined;
                    el.classList.remove('pointer');
                }
                nextQuestion();
            };
            option.textContent = optionTxt;
            third.appendChild(option);
        });
    }

    return third;
};

// 아바타 보여줌
const avatar = () => {
    const second = document.createElement('div');
    second.classList.add('mx-2');

    const avatar = document.createElement('img');
    avatar.src = 'assets/img/users/geps.gif';
    avatar.classList.add('rounded-circle', 'me-1');
    avatar.width = 40;
    avatar.height = 40;
    avatar.alt = '믿음이';

    second.appendChild(avatar);
    return second;
};

// 채팅시간 보여줌
const timediv = (classname) => {
    const fourth = document.createElement('div');
    fourth.classList.add('ms-2');

    const timeDiv = document.createElement('div');
    timeDiv.classList.add('text-muted', 'small', 'text-nowrap', 'mt-2');
    timeDiv.textContent = moment().locale('ko').format('a h:mm');
    timeDiv.classList.add(classname);

    fourth.appendChild(timeDiv);
    return fourth;
};

// 채팅창 생성
const chat = (question) => {
    const first = document.createElement('div');
    first.classList.add('other', 'pb-4');
    document.getElementById('messages').appendChild(first);

    // 아바타
    first.appendChild(avatar());

    // 메세지
    const messageDiv = messagediv(question);
    messageDiv.classList.add('message-friend');
    first.appendChild(messageDiv);

    //시간
    first.appendChild(timediv('ms-2'));

    first.focus();
};

// 질문 했을때 대답
const answer = (message) => {
    const first = document.createElement('div');
    first.classList.add('own', 'pb-4');
    document.getElementById('messages').appendChild(first);

    // 메세지
    const messageDiv = messagediv({ message });
    messageDiv.classList.add('message');
    first.appendChild(messageDiv);

    //시간
    first.appendChild(timediv('me-2'));
};

// 결과 보여주는 채팅
const infoMessage = (info) => {
    const first = document.createElement('div');
    first.classList.add('other', 'pb-4');
    document.getElementById('messages').appendChild(first);

    // 1차 안내

    const messageDiv = document.createElement('div');
    const thirdClasses = ['flex-shrink-1', 'bg-light', 'rounded', 'py-2', 'px-3'];
    messageDiv.classList.add(...thirdClasses);

    const card = document.createElement('div');
    card.classList.add('card', 'bg-light', 'border-0', 'mb-2');
    card.style.minHeight = '10vh';

    const cardHeader = document.createElement('div');
    cardHeader.classList.add('card-header', 'bg-info', 'fs-5', 'mt-3');
    cardHeader.textContent = '🎁 고객님의 예상되는 미래 상황은 다음과 같습니다.';

    card.appendChild(cardHeader);

    const divRow = document.createElement('div');
    divRow.classList.add('row');

    const divCol4 = document.createElement('div');
    divCol4.classList.add('col-4', 'align-bottom');

    //마스코트
    const mascot = document.createElement('img');
    mascot.src = 'assets/img/geps_mascot.png';
    mascot.alt = '믿음이와 동행이';
    mascot.classList.add('card-img');

    divCol4.appendChild(mascot);
    divRow.appendChild(divCol4);

    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');

    const cardText = document.createElement('p');
    cardText.classList.add('card-text', 'font-weight-bold', 'mb-1', 'align-middle', 'lead');

    const html = info.item1.map((i) => `<a data-bs-toggle="offcanvas" data-bs-target="#offcanvasInfo" aria-controls="offcanvasInfo" data-info-id="${i}" class='link'>${i}. ${items[i]}</a>`).join('<br>');

    cardText.innerHTML = html;

    cardBody.appendChild(cardText);

    const divCol8 = document.createElement('div');
    divCol8.classList.add('col-8');
    divCol8.appendChild(cardBody);

    divRow.appendChild(divCol8);
    card.appendChild(divRow);
    messageDiv.appendChild(card);

    const p2 = document.createElement('h5');
    p2.textContent = '💰 소득활동여부';
    messageDiv.appendChild(p2);

    const card2 = infoMessage2(info);

    messageDiv.appendChild(card2);

    messageDiv.classList.add('message-friend');
    first.appendChild(messageDiv);

    infoMessage2(info);
};

// 결과 2창
const infoMessage2 = (info) => {
    const card = document.createElement('div');
    card.classList.add('card', 'bg-light');
    card.style.minHeight = '10vh';

    const cardHeader = document.createElement('div');
    cardHeader.classList.add('card-header');

    const ul = document.createElement('ul');
    ul.classList.add('nav', 'nav-tabs', 'card-header-tabs');
    ul.role = 'tablist';

    const navTitles = ['공무원', '민간', '해당없음'];

    navTitles.forEach((navTitle, i) => {
        const _li = document.createElement('li');
        _li.classList.add('nav-item');
        _li.role = 'presentation';
        const a = document.createElement('a');
        a.classList.add('nav-link');
        if (i === 0) a.classList.add('active');
        a.href = '#';
        a.role = 'tab';
        a.type = 'button';
        a.dataset['bsToggle'] = 'tab';
        a.dataset['bsTarget'] = `#info2_${i + 1}`;

        a.textContent = navTitle;
        _li.appendChild(a);
        ul.appendChild(_li);
    });

    cardHeader.appendChild(ul);
    card.appendChild(cardHeader);

    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');

    const tabContent = document.createElement('div');
    tabContent.classList.add('tab-content');
    tabContent.id = 'nav-tabContent';

    const lis = [info.item21, info.item22, info.item23];

    lis.forEach((_li, i) => {
        const _div = document.createElement('div');
        _div.classList.add('tab-pane', 'fade', 'lead');
        if (i === 0) _div.classList.add('show', 'active');
        _div.id = 'info2_' + (i + 1);
        _div.role = 'tabpanel';

        _div.innerHTML = _li ? _li.map((i) => `<a data-bs-toggle="offcanvas" data-info-id="${i}" data-bs-target="#offcanvasInfo" class='link' aria-controls="offcanvasInfo">${i}. ${items[i]}</a>`).join('<br>') : '-';
        tabContent.appendChild(_div);
    });

    cardBody.appendChild(tabContent);

    // 버튼
    const buttonDiv = document.createElement('div');
    buttonDiv.classList.add('text-end');

    const button = document.createElement('a');
    button.href = '#';
    button.classList.add('btn', 'btn-md', 'btn-warning', 'mt-2', 'text-end');
    button.textContent = '처음부터';
    button.onclick = chatStart;

    buttonDiv.appendChild(button);

    cardBody.appendChild(buttonDiv);

    card.appendChild(cardBody);

    return card;
};

// 질문이 끝나고 다음 질문
const nextQuestion = () => {
    current++;
    if (current !== 5) {
        chat(questions[current]);
    }

    if (current === 5) {
        let mySelect = '';
        selected.forEach((e, i) => (mySelect += `<b>${questions[i].short_title}</b><br>&nbsp;&nbsp;👉 ${e}<br>`));

        const info1_selected = info1.find((e) => e.selected.join('') === selected.join(''));

        chat({ message: mySelect });
        infoMessage(info1_selected);
    }

    const container = document.querySelector('main .container');
    container.scrollTo({ top: container.scrollHeight, behavior: 'smooth' });
};
chatStart();
