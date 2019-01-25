let photos = document.querySelector('.photos');
let photoContainers = [];
for(let i=0; i<works.length; i++){
    let p = document.createElement('div');
    p.classList.add('photo');
    p.style.backgroundImage = 'url('+ works[i].photo +')';
    p.addEventListener('click', e => {
        localStorage.setItem('selected work', i);
        toSelectedWork(e);
    })
    photos.append(p);
    photoContainers.push(p);
}
let main = document.querySelector('.main');
let gjysmerreth = document.querySelector('.gjysmerreth');
let heros = document.querySelectorAll('.photo');
let cool = document.querySelector('.coolness');
let menus = document.querySelector('nav');
let contact = document.querySelector('.contact');
let descName = document.querySelector('.desc .name');
let descDesc = document.querySelector('.desc .description');
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

function changeWork(previous, current){
    if(previous < current){
        TweenMax.to(photoContainers[previous], 0.5, {top: 40, bottom: 'unset', height: 0});
        TweenMax.to(photoContainers[current], 0.5, {bottom: '12.5%', height: '75%'});
        setTimeout(() => {
            descName.textContent = works[current].name;
        }, 300);
        tl.to(descName, 0.3, {y: -nh}).to(descName, 0, {y: nh}).to(descName, 0.3, {y: 0});
        TweenMax.to(descDesc, 1, {scrambleText: {text: works[current].description, chars: 'edlir'}}, '+=0.6')
    }else if(previous > current){
        TweenMax.to(photoContainers[previous], 0.5, {bottom: 40, top: 'unset',height: 0});
        TweenMax.to(photoContainers[current], 0.5, {top: '12.5%', height: '75%'});
        setTimeout(() => {
            descName.textContent = works[current].name;
        }, 300);
        tl.to(descName, 0.3, {y: nh}).to(descName, 0, {y: -nh}).to(descName, 0.3, {y: 0})
        TweenMax.to(descDesc, 1, {scrambleText: {text: works[current].description, chars: 'edlir'}}, '+=0.6')
    }else if(previous == current){
        TweenMax.to(photoContainers[current], 0.5, {top: '12.5%', height: '75%'});
        setTimeout(() => {
            descName.textContent = works[current].name;
        }, 300);
        tl.to(descName, 0.3, {y: -nh}).to(descName, 0, {y: nh}).to(descName, 0.3, {y: 0})
        TweenMax.to(descDesc, 1, {scrambleText: {text: works[current].description, chars: 'edlir'}}, '+=0.6')
    }
    nh = descName.offsetHeight;
    dh = descDesc.offsetHeight;
}
setTimeout(() => {
    TweenMax.to('.photoInitial', 0.5, {top: 40, bottom: 'unset', height: 0});
    TweenMax.to('.main span h1', 0.6, {y: 0});
    changeWork(0, 0);
}, 300);

document.body.addEventListener('keyup', e=>{
    
    if(e.keyCode == '40'){
        if(currentWork < (works.length - 1)){
            currentWork++;
            changeWork(previousWork, currentWork);
        }
    }
    
    if(e.keyCode == '38'){
        if(currentWork > 0){
            currentWork--;
            changeWork(previousWork, currentWork);
        }
    }

    previousWork = currentWork;
})


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

function toSelectedWork(e){
    e.preventDefault();
    closeMenu();
    menu.style.zIndex = 7;
    close.style.zIndex = 7;
    gjysmerreth.style.zIndex = 7;
    TweenMax.to('.container', 0.5, {gridTemplateColumns: '38.2% 61.8%'}).delay(0.2);
    TweenMax.to('.main h1', 0.5, {y: 200});
    TweenMax.to(photoContainers[currentWork], 0.5, {top: 0, width: '61.8%', marginLeft: '19.1%', zIndex: 5});
    TweenMax.to('.desc span:first-child h1', 0.5, {fontSize: '0.6em'})
    setTimeout(() => {
        window.location = 'work.html';
    }, 1700);
}