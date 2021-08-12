const wd = document.querySelector('.width');
const hg = document.querySelector('.height');
const tag = document.querySelector('.tag');
const traget = document.querySelector('.traget');
//const html = document.querySelector('html');

document.addEventListener('mousemove',e =>{
    let x = e.clientX;
    let y = e.clientY;

        wd.style.top = `${y}px`;
        hg.style.left = `${x}px`;
        tag.style.left = `${x}px`;
        tag.style.top = `${y}px`;
        traget.style.top = `${y}px`;
        traget.style.left = `${x}px`;

        tag.innerHTML = x + "," + y;
    // wd.style.transform= `${y}px`;
    // hg.style.transform=`${x}px`;
    // tag.style.transform=`${y}px`;
    // tag.style.transform=`${x}px`;
    // tag.innerHTML = x +"," + y;
    //innerText는 더는 표준에 맞지 않아서 쓰지 않는게 좋음

})