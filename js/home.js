let main = document.querySelector('.main');
let mw = main.offsetWidth;
let mh = main.offsetHeight;

for(let i=10; i<mh; i+=40){
    for(let j=10; j<mw; j+=40){
        let dot = document.createElement('div');
        dot.className = 'dot';
        dot.style = `position: absolute; width: 3px; height: 3px; border-radius: 50%; top: ${i}px; left: ${j}px; background-color: #1638a0;`;
        main.append(dot);
    }
}

let gjysmerreth = document.querySelector('.gjysmerreth');
let hero = document.querySelector('.photo');
let cool = document.querySelector('.coolness');
let menus = document.querySelector('nav');
let contact = document.querySelector('.contact');
let tl = new TimelineMax();

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
        hero.style.width = '25%';
        hero.style.marginLeft = '6%';
        cool.style.right = '28%';
        cool.style.width = '100px';
        cool.textContent = 'Where to?';
        contact.style.opacity = '1';
        TweenMax.staggerTo('a', 0.3, {opacity: 1, x: -50}, 0.1);
    }
    function closeMenu(){
        close.style.display = 'none';
        menu.style.display = 'block';
        menus.style.visibility = 'hidden';
        gjysmerreth.style.transform = 'scale(1)';
        hero.style.width = '30%';
        hero.style.marginLeft = '11.8%';
        cool.style.right = '18%';
        cool.style.width = '170px';
        contact.style.opacity = '0';
        cool.textContent = 'Very cool person';
        TweenMax.to('a', 0, {opacity: 0, x: 0});
    }
    let toAbout = document.querySelector('[href*="about"]');
    let toPortfolio = document.querySelector('[href*="portfolio"]');
    toAbout.addEventListener('click', e=>{
        e.preventDefault();
        let loc = e.target.getAttribute('href');
        closeMenu();
        hero.style.boxShadow = 'none';
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
    toPortfolio.addEventListener('click', e=>{
        e.preventDefault();
        let loc = e.target.getAttribute('href');
        closeMenu();
        setTimeout(() => {
            window.location = loc;
        }, 300);
    })
}, 500);

