let main = document.querySelector('.main');
let gjysmerreth = document.querySelector('.gjysmerreth');
let heros = document.querySelectorAll('.photo');
let cool = document.querySelector('.coolness');
let menus = document.querySelector('nav');
let contact = document.querySelector('.contact');
let mw = main.offsetWidth;
let mh = main.offsetHeight, nh = 128, dh= 64;
let tl = new TimelineMax();
let currentWork = 0;
let previousWork = 0;

for(let i=10; i<mh; i+=40){
    for(let j=10; j<mw; j+=40){
        let dot = document.createElement('div');
        dot.className = 'dot';
        dot.style = `position: absolute; width: 3px; height: 3px; border-radius: 50%; top: ${i}px; left: ${j}px; background-color: #1638a0; z-index: 0`;
        main.append(dot);
    }
}

let svgs = Array.from(document.querySelectorAll('svg.off'));
let menu = svgs[0];
let close = svgs[1];

menu.addEventListener('click', openMenu)
close.addEventListener('click', closeMenu)

function openMenu(){
    menu.style.display = 'none';
    close.style.display = 'block';
    menus.style.visibility = 'visible';
    gjysmerreth.style.transform = 'scale(11)';
    heros.forEach(hero => {
        hero.style.width = '40%';
        hero.style.marginLeft = '-2%';
    })
    contact.style.opacity = '1';
    TweenMax.staggerTo('a', 0.3, {opacity: 1, x: -50}, 0.1);
}
function closeMenu(){
    close.style.display = 'none';
    menu.style.display = 'block';
    menus.style.visibility = 'hidden';
    gjysmerreth.style.transform = 'scale(1)';
    heros.forEach(hero => {
        hero.style.width = '60%';
        hero.style.marginLeft = '11.8%';
    })
    contact.style.opacity = '0';
    TweenMax.to('a', 0, {opacity: 0, x: 0});
}

let toAbout = document.querySelector('[href*="about"]');
let toHome = document.querySelector('[href*="index"]');

toAbout.addEventListener('click', e=>{
    e.preventDefault();
    let loc = e.target.getAttribute('href');
    closeMenu();
    heros.forEach(hero => {
        hero.style.boxShadow = 'none';
    })
    menu.style.zIndex = 7;
    close.style.zIndex = 7;
    gjysmerreth.style.zIndex = 7;
    tl
    .to(photoContainers[currentWork], 0.5, {bottom: 40, top: 'unset', height: 0})
    .to('.photoInitial', 0.5, {width: '38.2%', height: '61.8%', right: 0, top: 0})
    .to(['.desc h1, .desc h4, .main h1'], 0.5, {y: 200})
    .to('.contact', 0.3, {margin: 0, opacity: 1}, '-=0.3');
    setTimeout(() => {
        window.location = loc;
    }, 1800);
});

toHome.addEventListener('click', e=>{
    e.preventDefault();
    let loc = e.target.getAttribute('href');
    closeMenu();
    menu.style.zIndex = 5;
    close.style.zIndex = 5;
    gjysmerreth.style.zIndex = 4;
    contact.style.display = 'none';
    menus.style.visibility = 'hidden';
    tl.to(photoContainers[currentWork], 0.5, {bottom: 40, top: 'unset', height: 0})
    .to('.photoInitial', 0.5, {top: '12.5%', height: '75%', width: '30%'})
    .to(['.desc h1, .desc h4, .main h1'], 0.5, {y: 200})
    .to('.coolness', 0.3, {right: '22%', bottom: '8%'})
    setTimeout(() => {
        window.location = loc;
    }, 1700);
})
