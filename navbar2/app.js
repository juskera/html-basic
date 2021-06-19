// DOM Elements
const tema = document.getElementById('tema');
const body = document.body;

// Apply the cached theme on reload

const theme = localStorage.getItem('theme');

if(theme){
    body.classList.add(theme);
}


// Button Event Handlers

tema.onclick = () => {

    if (body.classList.contains('claro') && img.src) {
        //change the theme of the page
        body.classList.replace('claro', 'escuro')
        //change the image of the button
        document.getElementById("img").src = 'imags/moon.png';
        //estores the selected theme on the browser
        localStorage.setItem('theme', 'escuro')
    }

    else {

        body.classList.replace('escuro', 'claro')
        document.getElementById("img").src = 'imags/sun.png';
        localStorage.setItem('theme', 'claro')

    }
}
