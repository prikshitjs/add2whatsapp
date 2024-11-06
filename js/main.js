let input = document.getElementById("phoneno");
let add = document.getElementById("addbtn");
let form = document.querySelector("form");

form.addEventListener("submit", (event)=> {
    event.preventDefault();
    let phoneno = event.target.mobno.value;
    window.location.href = "https://wa.me/"+phoneno;
})
let tracker = document.querySelector(".tracker");
let body = document.querySelector("body");
window.addEventListener("mousemove", (e)=> {
    tracker.style.top = e.clientY+"px"
    tracker.style.left = e.clientX+"px"
})