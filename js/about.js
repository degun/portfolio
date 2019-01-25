let main = document.querySelector('.main');
let mw = main.offsetWidth;
let mh = main.offsetHeight;
let svgs = document.querySelectorAll('svg.off');
let menu = svgs[0];
let close = svgs[1];
let gjysmerreth = document.querySelector('.gjysmerreth');
let overlay = document.querySelector('.overlay');
let hero = document.querySelector('.photo');
let cool = document.querySelector('.coolness');
let contact = document.querySelector('.contact');
let menus = document.querySelector('nav');
let tl = new TimelineMax();

for(let i=10; i<mh; i+=40){
    for(let j=10; j<mw; j+=40){
        let dot = document.createElement('div');
        dot.className = 'dot';
        dot.style = `position: absolute; width: 3px; height: 3px; border-radius: 50%; top: ${i}px; left: ${j}px; background-color: #1638a0;`;
        main.append(dot);
    }
}

setTimeout(() => {
    tl.to('.prezantim', 0,  {display: 'none'})
    .to('.overlay', 0.2,  {opacity: 1, height: 20})
    .to('.overlay', 0.3,  {width: '100%'})
    .to('.overlay', 0.6,  { height: '100%'})
    .to('.overlay h1', 0.3, {opacity: 1})
    .staggerTo('.overlay p', 0.9, {opacity:1, top: 0}, 0.3);
}, 300);

overlay.style.display = 'block';
menu.addEventListener('click', openMenu);
close.addEventListener('click', closeMenu);
let toHome = document.querySelector('[href*="index"]');
let toPortfolio = document.querySelector('[href*="portfolio"]');
toHome.addEventListener('click', home);
toPortfolio.addEventListener('click', port);
function openMenu(){
    menu.style.display = 'none';
    close.style.display = 'block';
    menus.style.visibility = 'visible';
    gjysmerreth.style.transform = 'scale(11)';
    TweenMax.staggerTo('a', 0.3, {opacity: 1, x: -50}, 0.1);
}
function closeMenu(){
    close.style.display = 'none';
    menu.style.display = 'block';
    menus.style.visibility = 'hidden';
    gjysmerreth.style.transform = 'scale(1)';
    TweenMax.to('a', 0, {opacity: 0, x: 0});
}
function home(e){
    e.preventDefault();
    let loc = e.target.getAttribute('href');
    closeMenu();
    menu.style.zIndex = 5;
    close.style.zIndex = 5;
    gjysmerreth.style.zIndex = 4;
    contact.style.display = 'none';
    menus.style.visibility = 'hidden';
    tl.to('.overlay', 0.3,  {opacity: 0, height: '0%'})
    .to('.overlay', 0.3,  {display: 'none'})
    .to('.prezantim', 0,  {display: 'block'})
    .to('.prezantim', 0.3, {top:0, opacity: 1})
    .to('.photo', 0.3, {width: '30%', height: '75%', right: '23.2%', top: '12.5%'})
    .to('.coolness', 0.3, {right: '22%', bottom: '8%'});
    setTimeout(() => {
        window.location = loc;
    }, 1500);
}

function port(e){
    e.preventDefault();
    let loc = e.target.getAttribute('href');
    closeMenu();
    menu.style.zIndex = 5;
    close.style.zIndex = 5;
    gjysmerreth.style.zIndex = 4;
    contact.style.display = 'none';
    menus.style.visibility = 'hidden';
    tl.to('.overlay', 0.3,  {opacity: 0, height: '0%'})
    .to('.overlay', 0.3,  {display: 'none'})
    .to('.photo', 0.3, {width: '60%', height: '75%', right: '8.2%', top: '12.5%'})
    .to('.coolness', 0.3, {height: '0', opacity: '0'});
    setTimeout(() => {
        window.location = loc;
    }, 1500);
}
