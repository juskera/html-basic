// DOM Elements
const themeBtn = document.getElementById('theme');
const body = document.body;
var hour = new Date().getHours()

// Apply the cached theme on reload

const theme = localStorage.getItem('theme');
const theme_img = localStorage.getItem('theme_img');

if (theme) {
    body.classList.add(theme);
}

//apply the cached theme img on reload

if (theme_img == 'sun') {
    document.getElementById("imgs").src = 'imgs/sun.png';

}

else if (theme_img == 'moon') {
    document.getElementById("imgs").src = 'imgs/moon.png';

}



// Button Event Handlers

themeBtn.onclick = () => {

    if (body.classList.contains('ligth')) {
        //change the theme of the page
        body.classList.replace('ligth', 'dark')
        //change the image of the button
        document.getElementById("imgs").src = 'imgs/moon.png';
        //estores the selected theme on the browser
        localStorage.setItem('theme', 'dark')
        //estores the selected img theme on the browser
        localStorage.setItem('theme_img', 'moon')


    }

    else {

        //change the theme of the page
        body.classList.replace('dark', 'ligth')
        //change the image of the button
        document.getElementById("imgs").src = 'imgs/sun.png';
        //estores the selected theme on the browser
        localStorage.setItem('theme', 'ligth')
        //estores the selected img theme on the browser
        localStorage.setItem('theme_img', 'sun')

    }
}
