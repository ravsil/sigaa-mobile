async function loadWarningPage(css) {
    'use strict';

    async function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    await sleep(200);

    document.querySelectorAll('link[rel="stylesheet"], style').forEach(el => el.remove());
    document.querySelectorAll('br').forEach(br => br.remove());
    document.getElementById('painel-mensagem-envio_mask').remove();
    document.querySelector('head').innerHTML += `<meta name="viewport" content="width=device-width, initial-scale=1.0">`;


    document.querySelector('#info-sistema > h1').innerText = 'UFRRJ - SIGAA'


    document.querySelector('head').innerHTML += css;


    // delete
    document.querySelector("#info-sistema > div").remove()
    document.querySelector("#menu-usuario").remove()
    document.querySelector("#painel-mensagem-envio_c").remove()
    document.querySelector("#container > div:nth-child(3)").remove()

}


const WARN_CSS = `
<style>
* {
    margin: 0px;
    overflow-x: hidden;
}
a {
    font-size: 1rem !important;
}

h2 {
    margin: 0.5rem;
    font-size: 1.2rem;
    text-align: center
}
p {
    margin-left: 0.25rem;
    font-size: 0.9rem;
}

#info-sistema > h1 {
    background-color: #414e83;
    box-shadow: 0 0.5rem 0 #414e83;
    color: white;
    padding-top: 0.5rem;
    padding-left: 0.25rem;
    font-size: 2rem;
}

#info-sistema > h3 {
    background-color: #414e83;
    color: white;
    margin-top: -0.2rem;
    padding-left: 0.1rem;
    font-size: 0.65rem;
}

#rodape, body > p {
    background-color: #f1f2fa;
}
#rodape p {
    margin: 1rem;
}
</style>`