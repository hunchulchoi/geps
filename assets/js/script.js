const toggleVisibility = (el) => {
    el.style.display = el.style.display === 'none' ? 'flex' : 'none';
};

document.querySelector('.bi-person-circle').addEventListener(
    'click',
    function () {
        document.querySelectorAll('.opt').forEach(toggleVisibility);
    },
    false
);
