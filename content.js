async function main() {
    try {
        // if (window.location.href == "https://sigaa.ufrrj.br/sigaa/mobile/touch/login.jsf") { }
        async function sleep(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }

        await sleep(200);
        document.querySelector("#form-login\\:entrar").addEventListener("click", async () => {
            await sleep(600);
            document.querySelector("#j_id_jsp_846791597_19 > p > small > a").click();
        });
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