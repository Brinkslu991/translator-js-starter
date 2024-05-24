// Lucas Brinks
// 5/24/2024
// JS Translator Project

function checkLang () {
    let text;
    let language = document.querySelector("#lang").value;
    language = language.tolowerCase();
    switch(language) {
        case "french":
            text = "'Bonjour!' means hello in French";
            break;
        case "german":
            text = "'Guten Tag' means hello in German";
            break;
        case "dutch":
            text = "'Goededag' means hello in Dutch";
            break;
        default:
            text = "Sorry, but we don't teach that language"
    }
    document.querySelector("#translation").innerHTML = text;
}
function resetParagraph() {
    document.querySelector("#translation").innerHTML = "";
}
function resetInputField() {
    document.querySelector("#lang").value = "";
}
document.querySelector('#resetAll').addEventListener('click', () => {
    resetParagraph();
    resetInputField();
})
let instructions = "Which language do you want to learn?";
let student = "by Lucas Brinks";
let Project = "Switch Statement Translator Project";
document.querySelector("#directions").innerHTML = instructions;
document.querySelector("#student").innerHTML = student;
document.querySelector("#project").innerHTML = project;