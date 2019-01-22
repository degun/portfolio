let photos = document.querySelector('.photos');
let photoContainers = [];
for(let i=0; i<works.length; i++){
    let p = document.createElement('div');
    p.classList.add('photo');
    p.style.backgroundImage = 'url('+ works[i].photo +')';
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
let mh = main.offsetHeight;
let tl = new TimelineMax();
let currentWork = 0;
let previousWork = 0;

for(let i=10; i<mh; i+=40){
    for(let j=10; j<mw; j+=40){
        let dot = document.createElement('div');
        dot.className = 'dot';
        dot.style = `position: absolute; width: 3px; height: 3px; border-radius: 50%; top: ${i}px; left: ${j}px; background-color: #1638a0;`;
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
        tl.to(descName, 0.3, {y: -200}).to(descName, 0, {y: 200}).to(descName, 0.3, {y: 0});
        TweenMax.to(descDesc, 1, {scrambleText: {text: works[current].description, chars: 'edlir'}})
    }else if(previous > current){
        TweenMax.to(photoContainers[previous], 0.5, {bottom: 40, top: 'unset',height: 0});
        TweenMax.to(photoContainers[current], 0.5, {top: '12.5%', height: '75%'});
        setTimeout(() => {
            descName.textContent = works[current].name;
        }, 300);
        tl.to(descName, 0.3, {y: 200}).to(descName, 0, {y: -200}).to(descName, 0.3, {y: 0})
        TweenMax.to(descDesc, 1, {scrambleText: {text: works[current].description, chars: 'edlir'}})
    }else if(previous == current){
        TweenMax.to(photoContainers[current], 0.5, {top: '12.5%', height: '75%'});
        setTimeout(() => {
            descName.textContent = works[current].name;
        }, 300);
        tl.to(descName, 0.3, {y: -200}).to(descName, 0, {y: 200}).to(descName, 0.3, {y: 0})
        TweenMax.to(descDesc, 1, {scrambleText: {text: works[current].description, chars: 'edlir'}})
    }
    
}

changeWork(previousWork, currentWork);

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
    console.log(previousWork, currentWork);
    previousWork = currentWork;
})

setTimeout(() => {
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
        heros[currentWork].style.width = '40%';
        heros[currentWork].style.marginLeft = '-2%';
        contact.style.opacity = '1';
        TweenMax.staggerTo('a', 0.3, {opacity: 1, x: -50}, 0.1);
    }
    function closeMenu(){
        close.style.display = 'none';
        menu.style.display = 'block';
        menus.style.visibility = 'hidden';
        gjysmerreth.style.transform = 'scale(1)';
        heros[currentWork].style.width = '60%';
        heros[currentWork].style.marginLeft = '11.8%';
        contact.style.opacity = '0';
        TweenMax.to('a', 0, {opacity: 0, x: 0});
    }
    let toAbout = document.querySelector('[href*="about"]');
    let toHome = document.querySelector('[href*="index"]');
    toAbout.addEventListener('click', e=>{
        e.preventDefault();
        let loc = e.target.getAttribute('href');
        closeMenu();
        heros[currentWork].style.boxShadow = 'none';
        menu.style.zIndex = 7;
        close.style.zIndex = 7;
        gjysmerreth.style.zIndex = 7;
        tl.to('.prezantim', 0.3, {opacity: 0})
        .to('.photo', 0.3, {width: '38.2%', height: '61.8%', right: 0, top: 0}, '-=0.3')
        .to('.coolness', 0.3, {right: 0, bottom: '38.2%'}, '-=0.3')
        .to('.contact', 0.3, {margin: 0, opacity: 1}, '+=0.3');
        setTimeout(() => {
            window.location = loc;
        }, 900);
    })
    toHome.addEventListener('click', e=>{
        e.preventDefault();
        let loc = e.target.getAttribute('href');
        closeMenu();
        setTimeout(() => {
            window.location = loc;
        }, 300);
    })
}, 500);

