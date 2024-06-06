document.addEventListener("DOMContentLoaded", function () {
    const counter = document.getElementById('likeBtn1');
    counter.addEventListener('click',  () => {
        const count = document.getElementById('counter1');
        count.textContent = parseInt(count.textContent) + 1;
    });
})

document.addEventListener("DOMContentLoaded", function () {
    const counter = document.getElementById('likeBtn2');
    counter.addEventListener('click',  () => {
        const count = document.getElementById('counter2');
        count.textContent = parseInt(count.textContent) + 1;
    });
})

document.addEventListener("DOMContentLoaded", function () {
    const counter = document.getElementById('likeBtn3');
    counter.addEventListener('click',  () => {
        const count = document.getElementById('counter3');
        count.textContent = parseInt(count.textContent) + 1;
    });
})