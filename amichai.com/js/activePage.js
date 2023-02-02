const script = window.location.pathname;
const navLink = document.querySelectorAll('home a').
forEach(Link => {
    if(Link.href.includes('${activePage}')){
        Link.classList.add('home');
    } 
})