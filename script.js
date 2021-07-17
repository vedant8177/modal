var body = document.getElementById("body");
var modalBtn = document.getElementById('contact-btn');
var modal = document.getElementById('modal');
var closeBtn = document.getElementById('cross');
var overlay = document.getElementById('overlayLayer');
var btnToggle = document.getElementById('btnToggle');


modalBtn.addEventListener("click", () => {
    modal.classList.add("show");
    overlay.classList.add("overlayLayer");
    modal.classList.remove("hide");
});

closeBtn.addEventListener("click", () => {
    // modal.classList.remove("show");
    overlay.classList.remove("overlayLayer");
    modal.classList.add("hide");
});


btnToggle.addEventListener("click", () => {
    var bgColor = getComputedStyle(body).getPropertyValue('--bg');
    if (bgColor == '#121212') {
        body.style.setProperty('--bg', '#fff');
        body.style.setProperty('--text', '#121212');
        body.style.setProperty('--input', '#dddddd');
        body.style.setProperty('--input-hl', '#cacaca');
}
    else {
        body.style.setProperty('--bg', '#121212');
        body.style.setProperty('--text', '#fff');
        body.style.setProperty('--input', '#353535');
        body.style.setProperty('--input-hl', '#454545');
    }
});


function sent() {
    let form = document.getElementById("form");
    let formHeader = document.getElementsByClassName("modal-heading-container");
    form.style.display = "none";
    formHeader[0].style.display = "none";
};


// first method of dark mode using css class

// btnToggle.addEventListener("click", () => {
//     let inputEle = document.getElementsByClassName("input-tags");
//     let label = document.getElementsByTagName("label");
//     let body = document.getElementById("body");
//     body.classList.toggle("dark");
//     modal.classList.toggle("dark");
//     for(var i = 0; i < inputEle.length; i++){
//         inputEle[i].classList.toggle("faint-dark");
//     }
//     for(var i = 0; i < label.length; i++){
//         label[i].classList.toggle("text-w");
//     }
// });


// var clockUpdate = document.getElementById("datentime");
// setInterval("updateDate()", 1000);
// function updateDate() {
//     var clock = new Date();
//     clockUpdate.innerText = clock;
// }