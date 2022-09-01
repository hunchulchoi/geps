const info1 = [
    {
        selected: ['정년퇴직', '10년이상', '네', '퇴직연금', '청구'],
        item1: ['1-1', '1-2', '1-3', '1-4', '1-5', '1-6', '1-11'],
        item21: ['2-1-1', '2-1-2'],
        item22: ['2-2-1', '2-2-2', '2-2-3', '2-2-4'],
        item23: ['2-3-1'],
    },
    {
        selected: ['정년퇴직', '10년이상', '네', '퇴직연금', '미청구'],
        item1: ['1-1', '1-2', '1-3', '1-4', '1-5', '1-6', '1-11', '1-7'],
        item21: ['2-1-1', '2-1-2'],
        item22: ['2-2-1', '2-2-2', '2-2-3', '2-2-4'],
        item23: ['2-3-1'],
    },
    {
        selected: ['정년퇴직', '10년이상', '아니오', '퇴직연금', '청구'],
        item1: ['1-8', '1-1', '1-2', '1-3', '1-4', '1-5', '1-6', '1-11'],
        item21: ['2-1-1', '2-1-2'],
        item22: ['2-2-1', '2-2-2', '2-2-3', '2-2-4'],
        item23: ['2-3-1'],
    },
    {
        selected: ['정년퇴직', '10년이상', '아니오', '퇴직연금', '미청구'],
        item1: ['1-8', '1-1', '1-2', '1-3', '1-4', '1-5', '1-6', '1-7'],
        item21: ['2-1-1', '2-1-2'],
        item22: ['2-2-1', '2-2-2', '2-2-3', '2-2-4'],
        item23: ['2-3-1'],
    },
    {
        selected: ['정년퇴직', '10년이상', '네', '퇴직연금일시금', '청구'],
        item1: ['1-9', '1-5'],
        item21: ['2-1-3'],
        item22: ['2-2-5', '2-2-3', '2-2-4'],
    },
    {
        selected: ['정년퇴직', '10년이상', '네', '퇴직연금일시금', '미청구'],
        item1: ['1-9', '1-5', '1-7'],
        item21: ['2-1-3'],
        item22: ['2-2-5', '2-2-3', '2-2-4'],
    },
    {
        selected: ['정년퇴직', '10년이상', '아니오', '퇴직연금일시금', '청구'],
        item1: ['1-9', '1-5'],
        item21: ['2-1-3'],
        item22: ['2-2-5', '2-2-3', '2-2-4'],
    },
    {
        selected: ['정년퇴직', '10년이상', '네', '퇴직연금 공제일시금', '청구'],
        item1: ['1-10', '1-5', '1-6'],
        item21: ['2-1-4'],
        item22: ['2-2-1', '2-2-5', '2-2-4'],
        item23: ['2-3-1'],
    },
    {
        selected: ['정년퇴직', '10년이상', '아니오', '퇴직연금 공제일시금', '청구'],
        item1: ['1-8', '1-10', '1-5', '1-6'],
        item21: ['2-1-5'],
        item22: ['2-2-1', '2-2-5', '2-2-4'],
        item23: ['2-3-1'],
    },
    {
        selected: ['정년퇴직', '10년이상', '네', '퇴직연금 공제일시금', '미청구'],
        item1: ['1-10', '1-5', '1-6', '1-7'],
        item21: ['2-1-4'],
        item22: ['2-2-1', '2-2-5', '2-2-4'],
        item23: ['2-3-1'],
    },
    {
        selected: ['정년퇴직', '10년이상', '아니오', '퇴직연금 공제일시금', '미청구'],
        item1: ['1-8', '1-10', '1-5', '1-6', '1-7'],
        item21: ['2-1-4'],
        item22: ['2-2-1', '2-2-5', '2-2-4'],
        item23: ['2-3-1'],
    },
    {
        selected: ['정년퇴직', '10년이상', '아니오', '미정', '미청구'],
        item1: ['1-12', '1-8'],
    },
    {
        selected: ['정년퇴직', '10년이상', '아니오', '미정', '청구'],
        item1: ['1-12', '1-8'],
    },
    {
        selected: ['명예퇴직', '10년이상', '네', '퇴직연금', '청구'],
        item1: ['1-1', '1-2', '1-3', '1-4', '1-5', '1-6'],
        item21: ['2-1-1', '2-1-2', '2-1-6'],
        item22: ['2-2-1', '2-2-2', '2-2-3', '2-2-4'],
        item23: ['2-3-1'],
    },
    {
        selected: ['명예퇴직', '10년이상', '네', '퇴직연금', '미청구'],
        item1: ['1-1', '1-2', '1-3', '1-4', '1-5', '1-6', '1-7'],
        item21: ['2-1-1', '2-1-6'],
        item22: ['2-2-1', '2-2-2', '2-2-3', '2-2-4'],
        item23: ['2-3-1'],
    },
    {
        selected: ['명예퇴직', '10년이상', '아니오', '퇴직연금', '청구'],
        item1: ['1-8', '1-1', '1-2', '1-3', '1-4', '1-5', '1-6', '1-7'],
        item21: ['2-1-5', '2-1-2', '2-1-6'],
        item22: ['2-2-1', '2-2-2', '2-2-3', '2-2-4'],
        item23: ['2-3-1'],
    },
    {
        selected: ['명예퇴직', '10년이상', '아니오', '퇴직연금', '미청구'],
        item1: ['1-8', '1-1', '1-2', '1-3', '1-4', '1-5', '1-6', '1-7'],
        item21: ['2-1-5', '2-1-2', '2-1-6'],
        item22: ['2-2-1', '2-2-2', '2-2-3', '2-2-4'],
        item23: ['2-3-1'],
    },
    {
        selected: ['명예퇴직', '10년이상', '네', '퇴직연금일시금', '청구'],
        item1: ['1-9', '1-5'],
        item21: ['2-1-3', '2-1-6'],
        item22: ['2-2-4'],
    },
    {
        selected: ['명예퇴직', '10년이상', '네', '퇴직연금일시금', '미청구'],
        item1: ['1-9', '1-5', '1-7'],
        item21: ['2-1-5', '2-1-6'],
        item22: ['2-2-4'],
    },
    {
        selected: ['명예퇴직', '10년이상', '아니오', '퇴직연금일시금', '청구'],
        item1: ['1-8', '1-9', '1-5'],
        item21: ['2-1-5', '2-1-6'],
        item22: ['2-2-4'],
    },
    {
        selected: ['명예퇴직', '10년이상', '아니오', '퇴직연금일시금', '미청구'],
        item1: ['1-9', '1-5', '1-7'],
        item21: ['2-1-5', '2-1-6'],
        item22: ['2-2-4'],
    },
    {
        selected: ['명예퇴직', '10년이상', '네', '퇴직연금 공제일시금', '청구'],
        item1: ['1-8', '1-10', '1-5', '1-6'],
        item21: ['2-1-4', '2-1-5'],
        item22: ['2-2-1', '2-2-5', '2-2-4'],
    },
    {
        selected: ['명예퇴직', '10년이상', '네', '퇴직연금 공제일시금', '미청구'],
        item1: ['1-10', '1-5', '1-6', '1-7'],
        item21: ['2-1-4', '2-1-6'],
        item22: ['2-2-1', '2-2-5', '2-2-4'],
    },
    {
        selected: ['명예퇴직', '10년이상', '아니오', '퇴직연금 공제일시금', '청구'],
        item1: ['1-8', '1-10', '1-5', '1-6', '1-7'],
        item21: ['2-1-4', '2-1-6'],
        item22: ['2-2-1', '2-2-5', '2-2-4'],
    },
    {
        selected: ['명예퇴직', '10년이상', '아니오', '퇴직연금 공제일시금', '미청구'],
        item1: ['1-8', '1-10', '1-5', '1-6', '1-7'],
        item21: ['2-1-4', '2-1-6'],
        item22: ['2-2-1', '2-2-5', '2-2-4'],
    },
    {
        selected: ['명예퇴직', '10년이상', '아니오', '미정', '미청구'],
        item1: ['1-11'],
    },
    {
        selected: ['명예퇴직', '10년이상', '아니오', '미정', '청구'],
        item1: ['1-11'],
    },
];

const items = {
    '1-1': '퇴직급여 산정방식',
    '1-2': '연금개시연령',
    '1-3': '계좌변경',
    '1-4': '안심통장',
    '1-5': '퇴직소득과세',
    '1-6': '연금소득과세',
    '1-7': '퇴직수당 청구방법',
    '1-8': '급여청구방법',
    '1-9': '퇴직연금일시금 산정방식',
    '1-10': '연금공제일시금 산정방식',
    '1-11': '연금액 조정',
    '1-12': '급여종류 등 퇴직급여 제도개요',
    '2-1-1': '연금합산제도',
    '2-1-2': '전액정지',
    '2-1-3': '일시금 합산제도',
    '2-1-4': '연금합산제도\n(일시금 기간 반납금 납부)',
    '2-1-5': '미수령 합산제도',
    '2-1-6': '명예퇴직수당 환수',
    '2-2-1': '근로/사업소득 일부정지',
    '2-2-2': '정산차액',
    '2-2-3': '공적연금연계제도',
    '2-2-4': '기초 연금 수령 불가',
    '2-2-5': '퇴직연금 일시금지의 퇴직 후 소득활동',
    '2-2-6': '공적연금연계제도\n(→급여종류변경)',
    '2-3-1': '건강보험료 연금소득 과세',
};

const contents = {
    '1-1': `<ul class="py-1 lead">
  <li class="pb-2">퇴직연금은 공무원으로 10년 이상 재직하고 퇴직하여 연금지급개시연령에 도달한 때부터 사망시까지 매월 지급됩니다.</li>
  <li class="pb-2">퇴직연금은 적용보수(평균보수월액 또는 평균기준소득월액) * 재직기간* 연도별 지급률을 기초로 연금액이 산정됩니다.</li>
  <li class="pb-2">연금 산정방식은 연금법 개정에 따라 09년도 이전기간, 10년 ~15년도, 16년도 이후 기간으로 기간별 산출 금액의 합이 고객님의 총 연금액입니다.</li>
</ul>
<table class="table tabls-sm table-hover table-striped">
  <thead>
      <tr class="table-info">
          <th>재직기간</th>
          <th>적용보수</th>
          <th>지급율</th>
      </tr>
  </thead>
  <tbody>
      <tr>
          <td>09년 이전</td>
          <td>07~09년도 평균 보수 월액</td>
          <td>
              20년도 까지 2.5%<br />
              20년 초과 기간 2%
          </td>
      </tr>
      <tr>
          <td>10~15년도</td>
          <td>평균기준 소득월액(2010년~퇴직시까지)</td>
          <td>1년당 1.9%</td>
      </tr>
      <tr>
          <td>16년 이후</td>
          <td>
              1)평균소득기준월액(0.***%)<br />
              2)소득재분배반영평균기준소득월액(1%)
          </td>
          <td>1년당 16년 1.878%~35년 1.7%</td>
      </tr>
  </tbody>
</table>
<p><strong><i class="bi bi-megaphone-fill text-success"></i> 보수월액, 기준소득월액은 퇴직시까지 현재가치화 적용</strong></p>
<p><strong><i class="bi bi-megaphone-fill text-success"></i> (소득재분배 비율) 개인의평균기준소득월액을 공무원 전체(3년간)평균기준소득월액과 비교값으로 적용구간에 따른 비율입니다. 2016.1.이후 재직기간에 지급률 중 1%에 적용합니다. 단, 30년 초과 기간은 적용제외됩니다.</strong></p>
`,
    '1-2': `<ul class='lead py-1'>
  <li class="pb-2">
      연금개시연령은 95년도 이전임용자, 96년도 이후 임용자 개시연령으로 나눌 수 있습니다.
      <p>
          <small><strong><i class="bi bi-megaphone-fill text-success"></i> 96년 이후 임용자라 하더라도 공무원, 사학, 군인연금법에 적용받았던 95년도 이전 기간을 합산하였을 경우 95년 이전 임용자 기준을 적용합니다.</strong></small>
      </p>
  </li>
  <li class="pb-2">
      95년도 이전 임용자는
      <ul>
          <li class="pb-2">2000.12.31. 현재 재직기간이 20년 이상이면 퇴직 즉시 개시</li>
          <li class="pb-2">2000.12.31. 현재 재직기간이 20년 미만이면, 미달된 기간을 그때 당시부터 2배 이상 재직하고 퇴직한 때 즉시 개시</li>
          <li class="pb-2">2021년도 이후 퇴직하시는 경우 👉 60세 개시됩니다.</li>
      </ul>
  </li>
  <li class="pb-2">96년도 이전 임용자는 퇴직연도별 개시연령을 참고해주시기 바랍니다.</li>
</ul>
<table class="table tabls-sm table-hover table-striped">
  <thead>
      <tr class="table-info">
          <th>연도</th>
          <th>개시연령</th>
      </tr>
  </thead>
  <tbody>
      <tr>
          <td>\`22~\`23년</td>
          <td>61세</td>
      </tr>
      <tr>
          <td>\`24~\`26년</td>
          <td>62세</td>
      </tr>
      <tr>
          <td>\`27~\`29년</td>
          <td>63세</td>
      </tr>
      <tr>
          <td>\`30~\`32년</td>
          <td>64세</td>
      </tr>
      <tr>
          <td>\`33년~</td>
          <td>65세</td>
      </tr>
  </tbody>
</table>`,
    '1-3': ` 연금수급 중 계좌변경을 매월 20일 까지 공단으로 전화, 인터넷 우편을 이용하여 계좌변경을 신청하시면 신청 월부터 변경된 계좌로 입금이 됩니다.
  <ul class="py-2 lead">
      <li class="pb-2">
          <i class="bi bi-inboxes-fill text-success"></i> <strong>서류제출:</strong> 연금수급자 성명, 주민번호, 수급계좌 변경신고서, 신분증사본 제출(공단지부 : 우편, 팩스)
          <p>
              <small
                  ><strong><i class="bi bi-megaphone-fill text-warning"></i> 관련서식: <a href='https://www.geps.or.kr' target='_blank'><i class="bi bi-box-arrow-up-right"></i> 공단 홈페이지</a>-민원상담-각종서식-연금수급자용</strong></small
              >
          </p>
      </li>
      <li class="pb-2">
        <i class="bi bi-telephone-outbound-fill text-success"></i> <strong>전화녹취:</strong> 공단으로 전화하여 신분확인 후 변경신청<br><a href='tel:1588-4321'>전화걸기 (1588-4321)</a>
      </li>
      <li class="pb-2"><i class="bi bi-globe2 text-success"></i> <strong>인터넷 신청:</strong> <a href='https://www.geps.or.kr' target='_blank'><i class="bi bi-box-arrow-up-right"></i> 공단 홈페이지</a>-연금수급자화면-연락처, 계좌번호변경(공인인증서 로그인 필수)</li>
  </ul>`,
    '1-4': ` <ul class="py-2 lead">
    <li class="pb-2">‘공무원연금평생안심통장’을 이용하시면 연금월액 중 185만원까지 입금되어 연금압류를 방지할 수 있습니다. 다만, 공무원연금 외의 자금은 입금불가하며, 185만원 초과하는 금액은 일반계좌로 입금됩니다.</li>
    <li class="pb-2">
        ‘공무원연금평생안심통장’ 신청방법
        <ul>
            <li>국민은행, NH은행, 우리, 하나, 기업, 신한 대구, 부산, 광주 등 15개 은행에서 계좌개설 가능합니다.</li>
        </ul>
    </li>
    <li class="pb-2">단, 최초 퇴직연금 신청 시에는 일반계좌로 신청하시고 수급 20일 전까지 ‘안심통장’으로 계좌변경을 신청하셔야합니다.</li>
</ul>`,
    '1-5': `<ul class="py-2 lead">
    <li class="pb-2 lead">소득세법 개정(2000.12.29.)에 따라 2002년부터 근로소득 연말정산 시 납부한 일반(소급)기여금에 대하여 소득공제를 하고, 퇴직일시금과 퇴직연금의 일정비율(02년도 기여금납입 월수 / 총 기여금 납입 월수)대해 과세하고 있습니다.</li>
    <li class="pb-2 lead">
        연금취급기관에서 명예퇴직자에게 지급하는 명예퇴직수당과 공무원연금법에 의하여 지급받는 퇴직(연금)일시금 또는 공제일시금, 퇴직수당이 포함됩니다.(소득세법 제22조)
        <p>
            <small
                ><strong><i class="bi bi-megaphone-fill text-success"></i> 명예퇴직수당은 명예퇴직수당 총액이 과세 대상 소득입니다.</strong></small
            >
        </p>
    </li>
</ul>`,
    '1-6': ` <ul class="py-2 lead">
    <li class="pb-2">공단에서 지급되는 연금인 급여는 퇴직소득에 대한 과세소득액 산정과 마찬가지로 공적연금과세가 시행된 2002.1.1. 이후의 재직기간에 대한 연금소득앨을 과세합니다.
        <ul>
            <li>과세대상 연금소득액 : 총연금수령액 × 2002년 이후 기여금납부월수 / 총기여금 납부월수</li>
        </ul>
    </li>
    <li class="pb-2">
        최초로 연금소득이 발생한 퇴직연금수급자는 연금소득에 대한 기본공제와 추가공제를 적용 받는다면 연금소득자소득•세액공제신고서에 주민등록등본을 첨부하여 공단 지부에 당해연도 12월 말까지 제출해야 함. 
    </li>
</ul>`,
    '1-7': `<ul class="py-2 lead">
    <li class="pb-2">1년 이상 재직자는 퇴직 후 퇴직급여와 별도로 퇴직수당을 받을 수 있습니다.</li>
    <li class="pb-2">단, 퇴직급여(연금, 일시금)의 경우 합산, 연계신청 등의 사유로 미수령할 수 있기 때문에 아래의 경로를 통해 퇴직수당만 청구하실 수있습니다.
        <ol>
            <li><a href='https://www.geps.or.kr' target='_blank'><i class="bi bi-box-arrow-up-right"></i> 공단 홈페이지(www.geps.or.kr)</a> 접속</li>
            <li>공인인증서 로그인(사전 인증서 등록 필수!) </li>
            <li>연금이오 고객지원시스템-퇴직급여안내-퇴직급여본인직접청구</li>
            <li>청구화면에서 퇴직수당만 청구 체크!</li>
        </ol>
    </li>
</ul>`,
    '1-8': `<ul class="py-2 lead">
    <li class="pb-2">급여(수당) 청구방법은 아래의 경로를 통해 청구하실 수 잇습니다.
        <ol>
            <li><a href='https://www.geps.or.kr' target='_blank'><i class="bi bi-box-arrow-up-right"></i> 공단 홈페이지(www.geps.or.kr)</a> 접속</li>
            <li>공인인증서 로그인(사전 인증서 등록 필수!) </li>
            <li>연금이오 고객지원시스템-퇴직급여안내-퇴직급여본인직접청구</li>
        </ol>
    </li>
</ul>`,
    '1-9': `<ul class="py-2 lead">
    <li class="pb-2">
        퇴직연금일시금은 10년 이상 재직하실 경우 퇴직연금을 갈음하여 일시금으로 선택하실 수 있는 급여 종류입니다.
        <ul>
            <li>기준소득월액은 최종기준소득월액으로 산정</li>
            <li>퇴직년도에 승진·전직·보직변경 등으로 봉급월액이 증가한 경우에는 봉급월액 증가분을 승진월수에 비례하여 기준소득 월액에 가산</li>
        </ul>
        <p>
    <small><strong><i class="bi bi-megaphone-fill text-success"></i> 자세한 산정방식은 아래의 링크를 참고해주시기 바랍니다.</strong></small>
</p>
    </li>
</ul>
`,
    '1-10': `<ul class="py-2 lead">
<li class="pb-2">
    퇴직연금일시금은 10년 이상 재직하실 경우 퇴직연금을 갈음하여 일시금으로 선택하실 수 있는 급여 종류입니다.
    <ul>
        <li>기준소득월액은 최종기준소득월액으로 산정</li>
        <li>퇴직년도에 승진·전직·보직변경 등으로 봉급월액이 증가한 경우에는 봉급월액 증가분을 승진월수에 비례하여 기준소득 월액에 가산</li>
    </ul>
    <p>
<small><strong><i class="bi bi-megaphone-fill text-success"></i> 자세한 산정방식은 아래의 링크를 참고해주시기 바랍니다.</strong></small>
</p>
</li>
</ul>
`,
    '1-11': `<ul class="py-2 lead">
    <li class="pb-2">
        연금액은 매년 1월 소비자물가변동률을 반영하여 조정됩니다. <a href='https://www.law.go.kr/법령/공무원연금법/(20210623,17752,20201222)/제53조' target='_blank'><i class="bi bi-box-arrow-up-right"></i> (공무원연금법 제35조)</a>
        <br>연금액 조정방법 = 전년도 연금액 × (1+전년도 전국 소비자 물가변동률)
    </li>
</ul>
<p>
    <small><strong><i class="bi bi-megaphone-fill text-success"></i> 전년도 전국 소비자물가변동률 : 전전년도 대비 전년도 물가변동률임</strong></small>
</p>`,
    '1-12': `<ul class="py-2 lead">
    <li class="pb-2">
        공무원연금제도는 공무원과 그 유족이 퇴직 후 적절한 급여를 지급함으로써 생활안정과 복리향상에 이바지하는 데 목적을 두고 있습니다.
        <ul>
            <li>퇴직급여는 공무원 재직기간 10년 이상과 10년 미만으로 나뉩니다. 10년 이상일 경우 퇴직연금(조기퇴직연금), 퇴직연금일시금, 퇴직연금공제일시금을 선택할 수 있으며</li>
            <li>10년 미만일 경우 퇴직일시금을 수령할 수 있습니다.</li>
            <li>1년 이상 재직한 공무원의 경우 퇴직급여와 별개로 퇴직수당을 수령할 수 있습니다.</li>
        </ul>
    </li>
</ul>
<p>
    <small><strong><i class="bi bi-megaphone-fill text-success"></i> 기타 공무원연금급여에 관한 제도안내는 링크를 통해 자세하게 확인하시기 바랍니다.</strong></small>
</p>`,
    '2-1-1': `<ul class="py-2 lead">
    <li class="pb-2">
        공무원으로 퇴직하신 후 연금을 선택 또는 수급하시는 중에 공무원•사학•군인연금법에 적용받는 경력으로 재임용되실 경우 종전 공무원 경력을 퇴직급여 재직기간에 합산하실 수 있습니다.
    </li>
    <li class="pb-2">단, 이 경우 합산하실 때에 별도의 합산반납금은 없습니다.(연금선택자)</li>
    <li class="pb-2">종전의 보수월액, 기준소득월액의 적용보수는 재임용 중 공백기간에 대하여 물가인상률로 현재가치화(‘21. 3.16. 법개정)하고 재퇴직 시 합산기간을 포함하여 재개산됩니다.</li>
    <li class="pb-2">단, 퇴직수당은 합산대상은 아닙니다.</li>
</ul>`,
    '2-1-2': ` <ul class="py-2 lead">
    <li class="pb-2">
        퇴직연금(조기퇴직연금 포함), 장해연금수급자가 다음의 경력으로 취업되는 경우 재임용된 날이 속하는 다음달부터 그 해당하는 재직기간에 전액 정지됩니다.
        <ol>
            <li>공무원연금법, 군인연금법 또는 사립학교교직원연금법 적용을 받는 공무원•군인 또는 사립학교교직원으로 임용, 선출직공무원으로 취임하는 경우 </li>
            <li>국가 또는 지방자치단체가 전액출자 출연기관 등에 재취업하여 일정소득(전년도 공무원 전체의 기준소득월액 평균액의 1.6배) 이상이 되는 경우</li>
        </ol>
    </li>
</ul>`,
    '2-1-3': `<ul class="py-2 lead">
    <li class="pb-2">
        공무원으로 퇴직하신 후 퇴직(연금)일시금을 받으셨던 분도 공무원사학군인연금법에 적용받는 경력으로 재임용되실 경우 종전 공무원 경력을 퇴직급여 재직기간에 합산하실 수 있습니다.
    </li>
    <li class="pb-2">단, 이 경우 합산하실 때에 퇴직 당시 수령한 퇴직급여액(퇴직연금일시금액)에 소정의 이자를 가산하여 반납합니다.(정기예금금리 중 가장 높은 금리)
        <ul>
            <li>합산반납금은 본인의 납부상황을 고려하여, 일시납부, 분할납부(60회) 선택 가능합니다.</li>
        </ul>
    </li>
    <li class="pb-2">종전의 보수월액, 기준소득월액의 적용보수는 재임용 중 공백기간에 대하여 물가인상률로 현재가치화(‘21. 3.16. 법개정)하고 재퇴직 시 합산기간을 포함하여 재개산됩니다.</li>
    <li class="pb-2">단, 퇴직수당은 합산대상은 아닙니다.</li>
</ul>`,
    '2-1-4': `<ul class="py-2 lead">
<li class="pb-2">
    공무원으로 퇴직하신 후 퇴직(연금)일시금을 받으셨던 분도 공무원사학군인연금법에 적용받는 경력으로 재임용되실 경우 종전 공무원 경력을 퇴직급여 재직기간에 합산하실 수 있습니다.
</li>
<li class="pb-2">단, 이 경우 합산하실 때에 퇴직 당시 수령한 퇴직급여액(퇴직연금일시금액)에 소정의 이자를 가산하여 반납합니다.(정기예금금리 중 가장 높은 금리)
    <ul>
        <li>합산반납금은 본인의 납부상황을 고려하여, 일시납부, 분할납부(60회) 선택 가능합니다.</li>
    </ul>
</li>
<li class="pb-2">종전의 보수월액, 기준소득월액의 적용보수는 재임용 중 공백기간에 대하여 물가인상률로 현재가치화(‘21. 3.16. 법개정)하고 재퇴직 시 합산기간을 포함하여 재개산됩니다.</li>
<li class="pb-2">단, 퇴직수당은 합산대상은 아닙니다.</li>
</ul>`,
    '2-1-5': `<ul class="py-2 lead">
<li class="pb-2">
    퇴직 한후 단시일 내에 다시 공무원으로 임용되는 경우 퇴직급여 청구, 합산반납금 반납 등을 생략하고 바로 합산 승인을 신청할 수 있습니다. 단, 이 경우는 공무원 경력을 합산할 경우 가능하고, 군인 또는 사립학교교직원 경력은 해당 기관에 퇴직급여를 수령하고 합산신청이 가능합니다.
</li>
<li class="pb-2">단, 이 경우 합산하실 때에 별도의 합산반납금은 없습니다.</li>
</ul>`,
    '2-1-6': `<ul class="py-2 lead">
<li class="pb-2">
    국가공무원법 제74조의 2, 국가공무원 명예퇴직수당 등 지급규정 제3조에 따르면, 명예퇴직수당은 재직기간이 20년 이상이고, 정년퇴직일로부터 최소 1년 전에 스스로 퇴직하는 사람에게 지급한다고 규정하고 있습니다.
</li>
<li class="pb-2">국가공무원법 제74조의2에 제3항에 따르면 경력직공무원, 특수경력직공무원(선거로 임용되는 정무직 공무원 제외)으로 재임용된 경우는 명예퇴직수당을 환수하거나 정산하여 지급하도록 규정하고 있어 국가공무원은 재임용된 기관, 지방공무원은 명예퇴직수당을 지급한 기관에 문의하여 절차를 안내받으시기 바랍니다.</li>
</ul>
<p>
<small><strong><i class="bi bi-megaphone-fill text-success"></i> 지방공무원 등 기타공무원은 각 명예퇴직수당 지급규정 규정을 참고하시기 바랍니다.</strong></small>
</p>`,
    '2-2-1': `<ul class="py-2 lead">
<li class="pb-2">
    퇴직연금(연계퇴직연금 포함), 조기퇴직연금 또는 장해연금수급자가 연금외에 근로, 사업소득(부종산 임대소득은 2016.1.1.부터 포함)이 있고, 각 소득금액을 합하고 월 평균금액이 전년도 평균연금월액(2022년 기준 239만원)을 초과한 경우 초과소득월액에 따라 정지금액을 산정합니다.
</li>
<li class="pb-2">
    정지기간 : 일부정지 사유가 발생한날이 속하는 다음달부터 그 사유가 소멸된 날이 속하는 달까지 급여분에 대하여 지급 일부 정지
</li>
</ul>
<p>
<small><strong><i class="bi bi-megaphone-fill text-success"></i> 초과소득월액에 따른 정지금액 산정</strong></small>
</p>
<table class="table tabls-sm table-hover table-striped">
<tbody>
    <tr>
        <th scope="row">50만원 미만</th>
        <td>50만원 미만 초과소득월액의 30%</td>
    </tr>
    <tr>
        <th scope="row">50만원 이상 100만원 미만</th>
        <td>15만원+50만원 초과소득월액의 40%</td>
    </tr>
    <tr>
        <th scope="row">100만원 이상 150만원 미만</th>
        <td>35만원+100만원 초과소득월액의 50%</td>
    </tr>
    <tr>
        <th scope="row">150만원 이상 200만원 미만</th>
        <td>60만원+150만원 초과소득월액의 60%</td>
    </tr>
    <tr>
        <th scope="row">200만원 이상</th>
        <td>90만원+200만원 초과소득월액의 70%</td>
    </tr>
</tbody>
</table>`,
    '2-2-2': `<ul class="py-2 lead">
<li class="pb-2">
    일부정지의 운영절차는 다음과 같습니다.
    <ol>
        <li>우선정지 : 연금수급자가 연금 외 소득이 있는 것으로 파악되면, 예상소득을 토대로 연금정지(우선정지)액을 산정하여 매월 연금에서 공제합니다.</li>
        <li>정지액 조정 : 과세표준 확정신고가 있기전에 연금지급액 조정신청서로 객관적인 증빙자료를 준비해주시면 예상 정지액에 대한 조정을 요청할 수 있습니다.</li>
        <li>정산 : 당해연도 실제소득액은 과세표준확정신고 이후 국세청을 통해 다음연도 10월경에 확인하여 정확한 정지액을 산출하고 우선정지액과 비교하여 정산차액을 산정합니다.</li>
        <li>정산차액 : 환금 또는 추가공제 → 환급할 경우 1월연금지급 시 일괄 지급하고, 추가공제가 필요할 경우 연금월액의 50%범위 내에서 정산차액 완납시까지 매월 공제 가능합니다. </li>
    </ol>
</li>
</ul>
<p>
<small><strong><i class="bi bi-megaphone-fill text-success"></i> 초연금액의 최고 50%까지 범위로 공제 가능(공제불능시 누적관리)</strong></small>
</p>`,
    '2-2-3': `<ul class="py-2 lead">
    <li class="pb-2">
        공무원연금 재직기간 10년 미만, 국민연금 10년 미만 가입하셨어도 공적연금연계제도를 통해 연금을 받을 수 있습니다. 국민연금+직역연금 기간이 10년 이상일 경우 가능합니다. 예) 연계노령연금(7년)+ 연계퇴직연금(3년) 수령
        <ol>
            <li>2016.1.1.이전 퇴직자 및 군인연금일 경우 20년 적용</li>
        </ol>
    </li>
    <li class="pb-2">(대상) 원칙적으로 공적연금연계제도 시행일인 ‘09.08.07. 이후에 연금 제도 간 이동한 자입니다. 연계를 희망하는 경우 퇴직일시금 또는 반환일시금을 수령하지 않고 연계를 신청할 수 있습니다.
        <ol>
            <li>퇴직일시금 등을 수령할 경우 당시 수령한 금액에 이자를 가산하여 퇴직 후 5년 이내에 연계반납금을 공무원연금공단에 납부하셔야 합니다. </li>
        </ol>
    </li>
    <li class="pb-2">연계신청은 강제가 아닌 선택사항입니다. 신청을 한 이후에 원칙적으로 취하할 수 없어 각 법에 따른 개시연령의 차이로 불이익이 발생할 수 있으니 잘 살펴보시고 신청하시기 바랍니다.</li>
</ul>`,
    '2-2-4': `<ul class="py-2 lead">
    <li class="pb-2">
        기초연금법 제3조제3항제1호에 따라 공무원연금수급자(연금공제일시금, 연계퇴직연금 포함), 퇴직연금일시금 수령한 자와 그 배우자가 수령할 경우 기초연금을 수령할 수 없습니다.
    </li>
    <li class="pb-2">
        <a href='http://basicpension.mohw.go.kr/Nfront_main/index.jsp' target='_blank'><i class="bi bi-box-arrow-up-right"></i> 보건복지부 기초연금 홈페이지 가기</a>
    </li>
</ul>`,
    '2-2-5': `<ul class="py-2 lead">
    <li class="pb-2">
        공무원연금 재직기간 10년 미만, 국민연금 10년 미만 가입하셨어도 공적연금연계제도를 통해 연금을 받을 수 있습니다. 국민연금+직역연금 기간이 10년 이상일 경우 가능합니다. 예) 연계노령연금(7년)+ 연계퇴직연금(3년) 수령
        <ol>
            <li>2016.1.1.이전 퇴직자 및 군인연금일 경우 20년 적용</li>
        </ol>
    </li>
    <li class="pb-2">
        (대상) 원칙적으로 공적연금연계제도 시행일인 ‘09.08.07. 이후에 연금 제도 간 이동한 자입니다. 연계를 희망하는 경우 퇴직일시금 또는 반환일시금을 수령하지 않고 연계를 신청할 수 있습니다.
        <ol>
            <li>공제일시금을 선택하여 연금이 개시되지 않았고, 공제일시금을 수령하셨을 경우 일시금을 받은 날로부터 30일이내에 공단에 급여변경신청을 하여 연금으로 전환하신 후 연계신청 가능합니다.(퇴직연금 수급자는 연계신청 불가함)</li>
        </ol>
    </li>
    <li class="pb-2">
        연계신청은 강제가 아닌 선택사항입니다. 신청을 한 이후에 원칙적으로 취하할 수 없어 각 법에 따른 개시연령의 차이로 불이익이 발생할 수 있으니 잘 살펴보시고 신청하시기 바랍니다.
    </li>
</ul>`,
    '2-2-6': `<ul class="py-2 lead">
    <li class="pb-2">
        공무원연금수급자는 2022.9월부터 개편되는 건강보험료 부과체계에 관심을 가질 필요가 있습니다. 종전에는 금융, 연금, 기타소득을 합산하여 3400만원 초과하면 지역가입자로 전환되고 연금소득의 30%에 대하여 건강보험료를 부과하였으나, 2000만원을 받는 자와 50%로 적용기준이 강화되오니 참고하시기 바랍니다.
    </li>
</ul>`,
    '2-2-7': `<ul class="py-2 lead">
    <li class="pb-2">
      공무원연금 외 본인이 가입하신 국민연금, 개인연금 등이 궁금하신가요? 금융감독원에서 운영하고 있는 연금정보포털을 소개해드립니다. 아래의 링크를 클릭하시고 서비스를 이용해 주시기 바랍니다. 감사합니다.
    </li>
    <li class="pb-2">
      <a href='https://advisor.fss.or.kr/login/loginSelect.do' target='_blank'><i class="bi bi-box-arrow-up-right"></i> 금융감독원 연금정보포털 가기</a>
  </li>
</ul>`,
};

const youtube = {
    '1-2': 'https://www.youtube.com/embed/zmMJzfCiz3s',
    '1-3': 'https://www.youtube.com/embed/ce7-uDYPYqE',
    '1-4': 'https://www.youtube.com/embed/uctr3yFXMf8',
    '1-5': 'https://www.youtube.com/embed/mU_zgMld-eE',
    '1-6': 'https://www.youtube.com/embed/BCcfR6K8Jw8',
    '1-7': 'https://www.youtube.com/embed/pc-0a9sfmRU',
    '1-8': 'https://www.youtube.com/embed/aarhjF7E2yY',
    '1-9': 'https://www.youtube.com/embed/JESKEKQLHfI',
    '1-10': 'https://www.youtube.com/embed/JESKEKQLHfI',
    '1-11': 'https://www.youtube.com/embed/-mc_u3yvwKo',
    '1-12': 'https://www.youtube.com/embed/ra2zneVNRm0',
    '2-1-1': 'https://www.youtube.com/embed/J8mcM-7uDSQ',
    '2-1-2': 'https://www.youtube.com/embed/jDJpXZ_ayxk',
    '2-1-3': 'https://www.youtube.com/embed/J8mcM-7uDSQ',
    '2-1-4': 'https://www.youtube.com/embed/J8mcM-7uDSQ',
    '2-1-5': 'https://www.youtube.com/embed/J8mcM-7uDSQ',
    '2-2-1': 'https://www.youtube.com/embed/jDJpXZ_ayxk',
    '2-2-2': 'https://www.youtube.com/embed/zK2uY4Qllbg',
    '2-2-3': 'https://www.youtube.com/embed/o2MDtr1bKE0',
    '2-2-5': 'https://www.youtube.com/embed/o2MDtr1bKE0',
};
