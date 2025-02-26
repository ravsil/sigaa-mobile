function checkRightPage() {
    try {
        if (document.querySelector("#j_id_jsp_1594578293_297 > table:nth-child(3)").className == "participantes") {
            return true;
        }
    } catch (e) { }
    try {
        if (document.querySelector("#j_id_jsp_599290234_297 > fieldset > legend").innerText == "Mapa de Frequências") {
            return true;
        }
    } catch (e) { }
    try {
        if (document.querySelector("#j_id_jsp_1873362160_297 > fieldset > legend").innerText == "Tarefas") {
            return true;
        }
    } catch (e) { }
    try {
        if (document.querySelector("#formAva > fieldset > legend").innerText == "Questionários") {
            return true;
        }
    } catch (e) { }
    return false;
}

async function loadClassPage(css, html) {
    if (checkRightPage()) {
        return;
    }

    async function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    const className = document.querySelector("#nomeTurma").innerText.replaceAll("\n", "");

    document.querySelector('head').innerHTML += `<meta name="viewport" content="width=device-width, initial-scale=1.0">`;
    setTimeout(() => {
        document.getElementById("barraDireita").setAttribute("style", "display: none !important")
        document.getElementById("barraEsquerda").setAttribute("style", "display: none !important")
        document.getElementById("cabecalho").setAttribute("style", "display: none !important")
        document.querySelector("#formMenu").setAttribute("style", "display: none !important")
        document.querySelector("#baseLayout > div.ui-layout-resizer.ui-layout-resizer-north.ui-layout-resizer-open.ui-layout-resizer-north-open").setAttribute("style", "display: none !important")
        document.querySelector("#baseLayout > div.ui-layout-resizer.ui-layout-resizer-east.ui-layout-resizer-open.ui-layout-resizer-east-open").setAttribute("style", "display: none !important")
        document.querySelector("#baseLayout > div.ui-layout-resizer.ui-layout-resizer-west.ui-layout-resizer-open.ui-layout-resizer-west-open").setAttribute("style", "display: none !important")
        document.querySelector("#baseLayout > div.ui-layout-resizer.ui-layout-resizer-south.ui-layout-resizer-open.ui-layout-resizer-south-open").setAttribute("style", "display: none !important")
        document.querySelector("#rodape").setAttribute("style", "display: none !important")
        document.querySelector("#conteudo").removeAttribute('style')
    }, 100)
    const header = document.createElement("div");
    header.setAttribute("id", "myinfo");
    header.innerHTML = `<div id="title">${className}</div>`;
    document.querySelector("#conteudo").prepend(header);
    header.innerHTML += html

    document.querySelector('head').innerHTML += css;
    for (let i = 0; i < 5; i++) {
        try {
            document.querySelector("#ultimaNoticia").insertAdjacentHTML('beforebegin', '<br>');
        } catch (e) { }
    }

    document.querySelector("body").addEventListener("touchmove", () => {
        document.querySelector("#conteudo").removeAttribute('style')
    });
}

const CLASS_CSS = `<style>
    p {
        margin-right: 0.5rem;
    }

    #conteudo {
        overflow: auto;
        max-height: 100vh;
        width: 100% !important;
        height: 100% !important;
        }
    
    #myinfo {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 100;
    }
    #title {
        font-size: 0.7rem;
        font-weight: 700;
        color: #f0f0f0;
        padding: 0 1.25rem;
    }

        #myinfo {
            height: 3.8rem;
            width: 100%;
            background-color: #414e83;
            display: flex;
            justify-content: flex-end;
            align-items: center;
        }

        .links-container {
            height: 100%;
            width: 100%;
            display: flex;
            flex-direction: row;
            align-items: center;
        }

        #myinfo a {
            height: 100%;
            padding: 0 1.25rem;
            display: flex;
            align-items: center;
            text-decoration: none;
            color: #f0f0f0;
        }

        #myinfo a:hover {
            background-color: #384573;
        }

        #myinfo .home-link {
            margin-right: auto;
        }

        #myinfo svg {
            fill: #f0f0f0;
        }

        #sidebar-active {
            display: none;
        }

        .open-sidebar-button,
        .close-sidebar-button {
            display: none;
        }

        @media(max-width: 28.125rem) {
            .links-container {
                flex-direction: column;
                align-items: flex-start;

                position: fixed;
                top: 0;
                right: -100%;
                z-index: 100;
                width: 18.75rem;

                background-color: #414e83;
                box-shadow: -0.313rem 0 0.313rem rgba(0, 0, 0, 0.25);
                box-shadow: 0 1rem 0 0 #414e83;
                transition: 0.25s ease-out;
            }
            .links-container a {
                background-color: #414e83;
            }
            #myinfo a {
                box-sizing: border-box;
                height: auto;
                width: 100%;
                padding: 0.8rem 1.875rem;
                justify-content: flex-start;
            }

            .open-sidebar-button,
            .close-sidebar-button {
                padding: 1.25rem;
                display: block;
            }

            #sidebar-active:checked~.links-container {
                right: 0;
            }

            #sidebar-active:checked~#overlay {
                height: 100%;
                width: 100%;
                position: fixed;
                top: 0;
                left: 0;
                z-index: 99;
            }
        }
        </style>`;

const CLASS_MENU = `<input type="checkbox" id="sidebar-active">
    <label for="sidebar-active" class="open-sidebar-button" style="margin-right: -1rem;">
        <svg xmlns="http://www.w3.org/2000/svg" height="32" viewBox="0 -960 960 960" width="32">
            <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
        </svg>
    </label>
    <label id="overlay" for="sidebar-active"></label>
    <div class="links-container">
        <label for="sidebar-active" class="close-sidebar-button">
            <svg xmlns="http://www.w3.org/2000/svg" height="32" viewBox="0 -960 960 960" width="32">
                <path
                    d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
            </svg>
        </label>

        <a onclick="document.querySelector('#formAcoesTurma\\\\:botaoPortalDiscente').click()">Início</a>
        <a onclick="document.querySelector('#formMenu\\\\:j_id_jsp_257185786_72 > div.rich-panelbar-content-exterior > table > tbody > tr > td > a:nth-child(2)').click()">
            Principal
        </a>
        <a onclick="document.querySelector('#formMenu\\\\:j_id_jsp_257185786_72 > div.rich-panelbar-content-exterior > table > tbody > tr > td > a:nth-child(5)').click()">
            Participantes
        </a>
        <a onclick="document.querySelector('#formMenu\\\\:j_id_jsp_257185786_94 > div.rich-panelbar-content-exterior > table > tbody > tr > td > a:nth-child(1)').click()">
            Frequência
        </a>
        <a onclick="document.querySelector('#formMenu\\\\:j_id_jsp_257185786_94 > div.rich-panelbar-content-exterior > table > tbody > tr > td > a:nth-child(3)').click()">
            Ver Notas
        </a>
        <a onclick="document.querySelector('#formMenu\\\\:j_id_jsp_257185786_125 > div.rich-panelbar-content-exterior > table > tbody > tr > td > a:nth-child(4)').click()">
            Tarefas
        </a>
        <a onclick="document.querySelector('#formMenu\\\\:j_id_jsp_257185786_125 > div.rich-panelbar-content-exterior > table > tbody > tr > td > a:nth-child(4)').click()">
            Questionários
        </a>
    </div>`;
