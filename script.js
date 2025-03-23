// Меняющийся текст с посланием "Они рядом!"
const glitchText = document.getElementById("glitch-text");
const glitchChars = ["вьвлвл", "зщебад", "щцлвал", "ОНИ", "РЯДОМ", "вльвщз"];

setInterval(() => {
    let newText = "";
    for (let i = 0; i < glitchChars.length; i++) {
        newText += glitchChars[Math.floor(Math.random() * glitchChars.length)] + " ";
    }
    glitchText.innerText = newText;
    
    setTimeout(() => {
        glitchText.innerText = "⚠ 13 февраля – Замечены странные тени в коридоре после уроков.";
    }, 500);
}, 2000);

// Кнопка переключения темы
const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

const secretCode = "24.04.2025";
const secretInput = document.getElementById("secret-code");
const secretButton = document.getElementById("check-code");
const secretMessage = document.getElementById("secret-message");

secretButton.addEventListener("click", () => {
    if (secretInput.value === secretCode) {
        window.location.href = "secret.html";
    } else {
        secretMessage.innerText = "Неверный код.";
        secretMessage.style.display = "block";
    }
});