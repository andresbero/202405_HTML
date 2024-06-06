document.addEventListener("DOMContentLoaded", function () {
    const definitionBtn = document.getElementById('definitionBtn');
    definitionBtn.addEventListener('click',  () => {
        definitionBtn.style.display = 'none';
    }); 
});

const searchBtn = document.getElementById('searchBtn');
searchBtn.addEventListener('click',  () => {
    searchBtn.textContent = 'Cerrar sesión';
});

const likeBtn1 = document.getElementById('likeBtn1');
likeBtn1.addEventListener('click',  () => {
     alert('Gato Atigrado was liked');
});

const likeBtn2 = document.getElementById('likeBtn2');
likeBtn2.addEventListener('click',  () => {
     alert('Golden Retriever was liked');
});

const counter = document.getElementById('likeBtn1');
counter.addEventListener('click',  () => {
    const count = document.getElementById('counter1');
    count.textContent = parseInt(count.textContent) + 1;
});

const counter2 = document.getElementById('likeBtn2');
counter2.addEventListener('click',  () => {
    const count = document.getElementById('counter2');
    count.textContent = parseInt(count.textContent) + 1;
});

