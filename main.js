// tady je místo pro náš program

let jmenoUzivatele = prompt("Zadejte své jméno a příjmení:");
let rokNarozeni = Number(prompt("Zadejte svůj rok narození:"));

function vek() {
    let tentoRok = new Date().getFullYear();
    let vekUzivatele = tentoRok - rokNarozeni;
    return vekUzivatele;
}

let vystup = document.querySelector(".vystupProgramu");
vystup.innerHTML = jmenoUzivatele + "; " + vek() + " let";

let oblibenaBarva = prompt("Zadejte ANIGLICKÝ název své oblíbené barvy:")
vystup.style.color = oblibenaBarva;