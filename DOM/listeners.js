var button = document.querySelector("button");
var color = false


// Long version
// button.addEventListener("click", changeButtonColor);

// function changeButtonColor() {
//     if(color){
//         document.body.style.background = 'white';
//         color = false;
//     } else {
//         document.body.style.background = 'purple';
//         color = true;
//     }


// Short version
button.addEventListener("click", changeButtonColor);

function changeButtonColor() {
        document.body.classList.toggle("purple");
}