/* ANIMACION LOGO */
const logoText = document.getElementById("logo");
const logoLetters = logoText.innerText.split("");

console.log(logoLetters);

logoText.innerText = "";

logoLetters.forEach((letter) => {
    let character = letter === ' ' ? '&nbsp;' : letter;
    logoText.innerHTML = logoText.innerHTML + `
    <div>
        <span>${character}</span>
        <span class="segundo-logo">${character}</span>
    </div>
    `;
});

logoText.addEventListener('mouseenter', () => {
    let count = 0;
    const animationInterval = setInterval(() => {
        if (count < logoText.children.length) {
            logoText.children[count].classList.add('animacion');
            count += 1;
        } 
        else {
            clearInterval(animationInterval);
        }
    }, 30);
});

logoText.addEventListener('mouseleave', () => {
    let count = 0;
    const animationInterval = setInterval(() => {
        if (count < logoText.children.length) {
            logoText.children[count].classList.remove('animacion');
            count += 1;
        } 
        else {
            clearInterval(animationInterval);
        }
    }, 30);
});
/* FIN ANIMACION LOGO */