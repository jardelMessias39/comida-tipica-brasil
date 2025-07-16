let webhook = "https://jardelrodrigues.app.n8n.cloud/webhook-test/animacao-css";

async function cliqueiNoBotao() {
    let textoInput = document.querySelector(".input-animacao").value;
    let areaCodigo = document.querySelector(".area-codigo");
    let areaResultado = document.querySelector(".area-resultado");
    let botao = document.querySelector(".botao-magica");

    botao.disabled = true;
    botao.textContent = "creating...";
    botao.style.background = '#888888';

    try {
        let resposta = await fetch(webhook, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ pergunta: textoInput })
        });
        let resultado = await resposta.json();
        let jsonString = resultado.output;
        let info = JSON.parse(jsonString);

        if (info && info.preview) {
            areaCodigo.innerHTML = info.cod || info.code;
            areaResultado.innerHTML = info.preview;
            document.head.insertAdjacentHTML('beforeend', "<style>" + info.style + "</style>");
        } else {
            throw new Error("Webhook não retornou um campo 'preview' válido.");
        }
    } catch (e) {
        areaCodigo.innerHTML = "Erro ao criar animação";
        areaResultado.innerHTML = "";
    }

    // Habilita o botão novamente
    botao.disabled = false;
    botao.textContent = "criar magica";
    botao.style.background = '#37E359';
}