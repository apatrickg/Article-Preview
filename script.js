const buttonElement = document.getElementById('btn');

function show(){
    let popup = document.getElementById("popped");
    popup.classList.toggle("show");
    buttonElement.classList.toggle('clicked');
}

buttonElement.addEventListener('click', show);