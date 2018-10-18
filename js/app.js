const nav = document.querySelector('nav');
const topOfNav = nav.offsetTop;

function fixMe() {
    console.log(topOfNav, window.scrollY);
    window.scrollY >= topOfNav ? 
        document.body.classList.add('fixed-nav') :
        document.body.classList.remove('fixed-nav');
}

window.addEventListener('scroll', fixMe);