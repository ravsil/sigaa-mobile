async function main() {
    try {
        if (document.querySelector("#j_id_jsp_1311826277_7 > p > small > a").innerText == "Modo Clássico") {
            document.querySelector("#j_id_jsp_1311826277_7 > p > small > a").click()
        }
    } catch (e) { }

    try {
        if (window.location.href == "https://sigaa.ufrrj.br/sigaa/telaAvisoLogon.jsf") {
            loadWarningPage(WARN_CSS);
        }
    } catch (e) { }

    try {
        if (document.querySelector("#agenda-docente") != null) {
            loadMainPage(MAIN_CSS, MENU);
        }
    } catch (e) { }

    try {
        if (document.querySelector("#barraEsquerda > table > tbody > tr > td") != null) {
            loadClassPage(CLASS_CSS, CLASS_MENU);
        }
    } catch (e) { }
}
main();