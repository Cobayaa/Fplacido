
const switchbutton = document.getElementById('switch');

switchbutton.addEventListener('click',()=>{
    document.body.classList.toggle('dark');
    switchbutton.classList.toggle('active');
});

document.addEventListener("mousemove", parallax);

function parallax (e){
    this.querySelectorAll('.layer').forEach(layer => {
        const speed = layer.getAttribute('data-speed');
        // const x = (window.innerWidth - e.pageX*speed)/100;
        const y = (window.innerWidth - e.pageY*speed)/100;
        layer.style.transform = `translateY(${y}px)`;
    });
}   

let text = document.getElementById('brand');
let moon = document.getElementById('moon');


window.addEventListener('scroll', function(){
    let value = window.scrollY;
    text.style.bottom = value * -1 + 'px';
    moon.style.bottom = value * -1 + 'px';
});

window.addEventListener('scroll', function(){
    var header = document.querySelector(".container");
    header.classList.toggle("sticky", window.scrollY > 0);
});


const menu_hamburger = document.querySelector(".toggle");
const links = document.querySelector(".nav");

menu_hamburger.addEventListener('click', ()=>{
    links.classList.toggle('responsive')
});