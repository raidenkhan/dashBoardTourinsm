const toggler=document.querySelector('input');
const site=document.querySelector('.site')
toggler.addEventListener('click',()=>{
    site.classList.toggle('light-mode')
})