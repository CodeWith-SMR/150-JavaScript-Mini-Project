let notify = document.querySelectorAll('.notify');
let btn = document.querySelectorAll('.btn');

btn.forEach((button, index) => {
    button.addEventListener('click', () => active(index));
});

function active(index) {
    let currentNotify = notify[index];
    let add = Number(currentNotify.getAttribute('data-count') || 0);

    currentNotify.setAttribute('data-count', add + 1);

    if (add === 0) {
        currentNotify.classList.add('add-numb');
    }
}
