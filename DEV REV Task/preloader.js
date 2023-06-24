$(document).ready(function(){
    window.setTimeout('fadeout():',3000);
});
function fadeout(){
    $('#loader').delay(2000).fadeout('slow',function(){
        $('.notLoaded').removeClass('notLoaded');
    });
}
let loginForm = document.querySelector('.hero');

document.querySelector('#btnLogin-popup').onclick = () =>{
    loginForm.classList.toggle('active');
}
document.querySelector('#icon-close').onclick = () =>{
    loginForm.classList.remove('active');
}
