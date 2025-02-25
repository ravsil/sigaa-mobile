async function loadMainPage(css, menu) {
    'use strict';

    async function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));

    }
    await sleep(300);

    try {
        let msg = document.querySelector("#painel-erros").innerText
        document.querySelector("#painel-erros").remove()
        // ensures alert will be shown after loading
        setTimeout(() => {
            alert(msg.replace("(x) fechar mensagens", ""));
        }, 1);
    } catch (e) { }

    document.querySelectorAll('link[rel="stylesheet"], style').forEach(el => el.remove());
    document.querySelectorAll('br').forEach(br => br.remove());
    try {
        document.getElementById('painel-mensagem-envio_mask').remove();
    } catch (e) {
        document.querySelector("body").addEventListener("touchmove", () => {
            document.getElementById('painel-mensagem-envio_mask').remove();
            document.querySelector("body").removeEventListener("touchmove", () => { })
        })
    }
    document.querySelector('head').innerHTML += `<meta name="viewport" content="width=device-width, initial-scale=1.0">`;
    document.querySelector("#info-sistema > h1").setAttribute('onclick', "window.location.href = '/sigaa/verPortalDiscente.do'")

    document.querySelector('#info-sistema > h1').innerText = 'UFRRJ - SIGAA'
    document.querySelector('head').innerHTML += css;

    document.querySelector("#info-sistema > div").remove()
    document.querySelector("#menu-usuario").remove()
    document.querySelector("#perfil-docente > div.pessoal-docente > ul > li:nth-child(1)").remove()
    document.querySelector("#perfil-docente > p.info-docente").remove()
    document.querySelector("#form_links").remove()
    document.querySelector("#perfil-docente > p:nth-child(2)").remove()
    document.querySelector("#perfil-docente > p").remove()
    try {
        document.querySelector("#painel-mensagem-envio_c").remove()
    } catch (e) {
        document.querySelector("body").addEventListener("touchmove", () => {
            document.querySelector("#painel-mensagem-envio_c").remove()
            document.querySelector("body").removeEventListener("touchmove", () => { })
        });
    }
    document.querySelector("#container > div:nth-child(3)").remove()
    document.querySelector("#noticias-portal").remove()
    // document.querySelector("#turmas-portal").remove()
    document.querySelector("#participantes").remove()
    document.querySelector("#formAtividades").remove()
    document.querySelector("#forum-portal").remove()

    document.getElementById('agenda-docente').addEventListener('click', function () {
        this.classList.toggle('collapsed');
    });


    const agendaTable = document.querySelector("#agenda-docente");
    const headerRow = agendaTable.querySelector("tr:has(td[colspan='2'])");

    const newAgendaContainer = document.createElement("div");
    newAgendaContainer.id = "agenda-docente2";
    const detailsRow = headerRow.nextElementSibling;

    if (detailsRow) {
        const extractedText = detailsRow.querySelector("td").textContent.trim();

        const sectionTitle = document.createElement("h4");
        sectionTitle.textContent = extractedText;
        newAgendaContainer.appendChild(sectionTitle);

        let currentSibling = detailsRow.nextElementSibling;
        while (currentSibling) {
            const nextSibling = currentSibling.nextElementSibling;
            newAgendaContainer.appendChild(currentSibling);
            currentSibling = nextSibling;
        }

        headerRow.remove();
        detailsRow.remove();

        agendaTable.parentNode.insertBefore(newAgendaContainer, agendaTable.nextSibling);
    }

    document.getElementById('agenda-docente2').addEventListener('click', function () {
        this.classList.toggle('collapsed');
    });

    document.querySelector("#agenda-docente2 > tr:nth-child(2) > td > table > tbody").innerHTML = `<tr><td>${document.querySelector("#agenda-docente2 > tr:nth-child(2) > td > table > tbody > tr:nth-child(2) > td:nth-child(1) > acronym").innerText}</td><td>${document.querySelector("#agenda-docente2 > tr:nth-child(2) > td > table > tbody > tr:nth-child(2) > td:nth-child(2) > div").innerText}</td></tr>
<tr><td>${document.querySelector("#agenda-docente2 > tr:nth-child(2) > td > table > tbody > tr:nth-child(2) > td:nth-child(3) > acronym").innerText}</td><td>${document.querySelector("#agenda-docente2 > tr:nth-child(2) > td > table > tbody > tr:nth-child(2) > td:nth-child(4) > div").innerText}</td></tr>
<tr><td>${document.querySelector("#agenda-docente2 > tr:nth-child(2) > td > table > tbody > tr:nth-child(3) > td:nth-child(1) > acronym").innerText}</td><td>${document.querySelector("#agenda-docente2 > tr:nth-child(2) > td > table > tbody > tr:nth-child(3) > td:nth-child(2) > div").innerText}</td></tr><tr>${document.querySelector("#agenda-docente2 > tr:nth-child(2) > td > table > tbody > tr:nth-child(7)").innerHTML}</tr>`

    const updatedAgenda = document.querySelector("#agenda-docente2");
    const integralizationsContainer = document.createElement("div");
    const integralizationsTitle = document.createElement("h4");
    integralizationsTitle.textContent = "Integralizações";
    integralizationsContainer.appendChild(integralizationsTitle);
    integralizationsContainer.id = "agenda-docente3";

    integralizationsContainer.appendChild(document.querySelector("#agenda-docente2 > tr:nth-child(3) > td > table"))
    document.querySelector("#agenda-docente2 > tr:nth-child(3)").remove()

    updatedAgenda.parentNode.insertBefore(integralizationsContainer, updatedAgenda.nextSibling);

    document.getElementById('agenda-docente3').addEventListener('click', function () {
        this.classList.toggle('collapsed');
    });
    document.getElementById('agenda-docente3').insertAdjacentHTML('afterend', '<hr>')

    // TURMAS
    document.querySelector("#turmas-portal > table.subFormulario").remove()
    document.querySelector("#turmas-portal > table:nth-child(2) > thead").remove()
    document.querySelector("#turmas-portal > table:nth-child(2)").removeAttribute("style")

    const turmas = (document.querySelector("#turmas-portal > table:nth-child(2) > tbody").childElementCount - 1) / 2
    for (let i = 0; i < turmas; i++) {
        let txt = document.querySelector(`#turmas-portal > table:nth-child(2) > tbody > tr:nth-child(${2 * (i + 1)}) > td:nth-child(2)`).innerText
        if (!txt.includes("Bloco") || !txt.includes("Sala")) {
            continue;
        }
        txt = txt.split(" ")
        document.querySelector(`#turmas-portal > table:nth-child(2) > tbody > tr:nth-child(${2 * (i + 1)}) > td:nth-child(2)`).innerText = `${txt[1]} - ${txt[4]}`
    }
    // remove (...)
    document.querySelectorAll("center").forEach(el => {
        el.innerHTML = el.innerHTML.replace(/\s*\([^)]*\)/g, '');
    });

    document.querySelectorAll(".descricao > form > a").forEach(el => {
        el.innerText = el.innerText.split(' ').map(word => {
            if (word.length >= 3) {
                return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
            }
            return word.toLowerCase();
        }).join(' ');
    }
    )

    document.querySelector("#info-sistema").innerHTML += menu
}

const MAIN_CSS = `
    <style>
        body {
            display: block !important;
        }

        * {
            margin: 0px;
            overflow-x: hidden;
        }

        a {
            font-size: 1rem !important;
        }

        #info-sistema>h1 {
            color: white;
            padding-right: 4.5rem;
            font-size: 2rem;
        }

        #info-sistema>h3 {
            display: none;
        }




        #info-usuario {
            background-color: #c8d4ec;
            padding: 0.5rem 0.25rem;
            display: flex;
            flex-direction: column;
        }

        #info-usuario>p.usuario {
            order: 1;
        }

        #info-usuario>p.periodo-atual {
            order: 2;
            font-size: 0.8rem;
        }

        #info-usuario>p.unidade {
            order: 3;
            font-size: 0.8rem;
        }


        #perfil-docente>div.pessoal-docente {
            background-color: #f8f4fc;
            display: flex
        }

        #perfil-docente>div.pessoal-docente>div.foto {
            padding: 1rem;
        }

        #perfil-docente>div.pessoal-docente>ul {
            padding-top: 2rem;
        }

        #perfil-docente>div.pessoal-docente>ul>li {
            background-color: #414e83;
            color: white;
            margin-top: 0.3rem;
            padding: 0.5rem;
            transform: translate(-15%, 0%);
            text-align: center;
            border-radius: 5px;
        }

        #perfil-docente>div.pessoal-docente>ul>li a {
            color: white;
            text-decoration: none;
            display: block;
        }

        #perfil-docente>div.pessoal-docente>ul>li a:active {
            background-color: #2e3459;
        }

        #agenda-docente>h4,
        #agenda-docente2>h4,
        #agenda-docente3>h4,
        #turmas-portal>h4 {
            padding-top: 0.5rem;
            padding-bottom: 0.5rem;
            padding-left: 0.5rem;
            font-size: 1.5rem;
            box-shadow: inset 0 -0.1rem lightgray, inset 0 0.1rem lightgray;
        }

        #agenda-docente,
        #agenda-docente2,
        #agenda-docente3 {
            overflow: hidden;
            max-height: 2.8rem;
        }

        #agenda-docente.collapsed,
        #agenda-docente2.collapsed,
        #agenda-docente3.collapsed {
            max-height: 1000rem;
        }

        #agenda-docente h4::before,
        #agenda-docente2 h4::before,
        #agenda-docente3 h4::before {
            content: "▲";
            margin-right: 0.1rem;
            transition: transform 0.3s ease;
        }

        #agenda-docente h4,
        #agenda-docente2 h4,
        #agenda-docente3 h4 {
            position: relative;
            display: flex;
            align-items: center;
        }

        #agenda-docente.collapsed h4::before,
        #agenda-docente2.collapsed h4::before,
        #agenda-docente3.collapsed h4::before {
            transform: rotate(180deg);
        }

        td {
            padding-left: 1rem;
        }

        td table {
            margin-left: -1rem;
        }

        #agenda-docente3>table>tbody>tr:nth-child(5)>td {
            box-shadow: inset -15rem 0rem 0rem 0rem silver;

        }

        #agenda-docente3>table>tbody>tr:nth-child(5)>td>div {
            background-color: #414e83 !important;
        }

        #rodape,
        body>p {
            background-color: #f1f2fa;
        }

        #rodape p {
            margin: 1rem;
        }

        #turmas-portal {
          text-align: center;
        }

        #turmas-portal > table, .descricao>form>a {
            font-size: 0.9rem;
            text-align: left !important;
        }
        
        .descricao>form>a, .mais>a {
                text-decoration: none;
                color: #414e83;
        }

        /*----------- MENU --------------*/

        #menu-dropdown {
            display: none;
        }

        #info-sistema {
            height: 3.8rem;
            background-color: #414e83;
            display: flex;
            justify-content: flex-end;
            align-items: center;
            overflow: hidden;
        }

        .links-container {
            height: 100%;
            width: 100%;
            display: flex;
            flex-direction: row;
            align-items: center;
        }

        #info-sistema a {
            height: 100%;
            padding: 0 1.25rem;
            display: flex;
            align-items: center;
            text-decoration: none;
            color: #f0f0f0;
        }

        #info-sistema a:hover {
            background-color: #384573;
        }

        #info-sistema .home-link {
            margin-right: auto;
        }

        #info-sistema svg {
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
                z-index: 10;
                width: 18.75rem;

                background-color: #414e83;
                box-shadow: -0.313rem 0 0.313rem rgba(0, 0, 0, 0.25);
                transition: 0.25s ease-out;
            }

            #info-sistema a {
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
                z-index: 9;
            }
        }
    </style>`

const MENU = `
    <input type="checkbox" id="sidebar-active">
    <label for="sidebar-active" class="open-sidebar-button">
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

        <a onclick="cmItemMouseUp(document.querySelector('#cmSubMenuID1 > table > tbody > tr:nth-child(1)'), 1)">Notas</a>
        <a onclick="cmItemMouseUp(document.querySelector('#cmSubMenuID1 > table > tbody > tr:nth-child(3)'), 3)">Atestado de
            Matrícula</a>
        <a
            onclick="cmItemMouseUp(document.querySelector('#cmSubMenuID1 > table > tbody > tr:nth-child(5)'), 5)">Histórico</a>
        <a onclick="cmItemMouseUp(document.querySelector('#cmSubMenuID2 > table > tbody > tr:nth-child(1)'), 15)">Avaliação
            Institucional</a>
        <a onclick="cmItemMouseUp(document.querySelector('#cmSubMenuID3 > table > tbody > tr:nth-child(1)'), 21)">Realizar
            Matrícula</a>
        <a onclick="cmItemMouseUp(document.querySelector('#cmSubMenuID1 > table > tbody > tr:nth-child(21)'), 49)">Registro
            de Atividades Autônomas</a>
        <a onclick="cmItemMouseUp(document.querySelector('#cmSubMenuID9 > table > tbody > tr:nth-child(4)'), 65)">Consultar
            Turma</a>
        <a href="/sigaa/logar.do?dispatch=logOff">Sair</a>
    </div>`