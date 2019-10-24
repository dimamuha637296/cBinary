var ready = function(){
    setTimeout(function(){
        var el = document.querySelector("body")
        el.classList.add("active");
    },10);
}
document.addEventListener("DOMContentLoaded", ready);