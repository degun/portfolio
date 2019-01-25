let main = document.querySelector('.main');
let imazhet = document.querySelector('.imazhet');
let gjysmerreth = document.querySelector('.gjysmerreth');
let menus = document.querySelector('nav');
let contact = document.querySelector('.contact');
let descName = document.querySelector('.desc .name');
let descDesc = document.querySelector('.desc .description');
let mw = main.offsetWidth;
let mh = main.offsetHeight, nh = 128, dh= 64;
var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    x = w.innerWidth || e.clientWidth || g.clientWidth,
    y = w.innerHeight|| e.clientHeight|| g.clientHeight;

let tl = new TimelineMax();

for(let i=10; i<mh; i+=40){
    for(let j=10; j<mw; j+=40){
        let dot = document.createElement('div');
        dot.className = 'dot';
        dot.style = `position: absolute; width: 3px; height: 3px; border-radius: 50%; top: ${i}px; left: ${j}px; background-color: #1638a0;`;
        main.append(dot);
    }
}

let index = localStorage.getItem('selected work');
let selectedWorkImages = works[index].photos;
descName.textContent = works[index].name;
descDesc.textContent = works[index].description;
selectedWorkImages.forEach(imazh => {
    let im = new Image(x*0.618, y*0.75);
    im.src = imazh;
    imazhet.append(im);
});

let svgs = Array.from(document.querySelectorAll('svg.off'));
let menu = svgs[0];
let close = svgs[1];

menu.addEventListener('click', openMenu)
close.addEventListener('click', closeMenu)

function openMenu(){
    menu.style.display = 'none';
    close.style.display = 'block';
    menus.style.visibility = 'visible';
    gjysmerreth.style.transform = 'scale(15)';
    contact.style.opacity = '1';
    TweenMax.staggerTo('a', 0.3, {opacity: 1, x: -50}, 0.1);
}
function closeMenu(){
    close.style.display = 'none';
    menu.style.display = 'block';
    menus.style.visibility = 'hidden';
    gjysmerreth.style.transform = 'scale(1)';
    contact.style.opacity = '0';
    TweenMax.to('a', 0, {opacity: 0, x: 0});
}

let toAbout = document.querySelector('[href*="about"]');
let toHome = document.querySelector('[href*="index"]');
