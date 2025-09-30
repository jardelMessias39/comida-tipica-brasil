// ====================================================================
// ESTRUTURA DE DADOS (TODAS AS 8 RECEITAS)
// ====================================================================

const dadosReceitas = {
    // ... (Seu objeto dadosReceitas permanece aqui, inalterado) ...
    feijoada: {
        titulo: "Receita Completa de Feijoada Clássica",
        imagem: "feijoada.jpg",
        ingredientes: "Feijão preto (500g), carne seca, paio, costelinha, bacon, alho, cebola, louro. Servir com couve, laranja e farofa.",
        preparo: "Dessalge as carnes. Cozinhe o feijão e as carnes separadamente. Misture e cozinhe em fogo baixo por 1 hora. Acerte o tempero."
    },
    moqueca: {
        titulo: "Receita de Moqueca Baiana (Peixe ou Camarão)",
        imagem: "moqueca.jpg",
        ingredientes: "Postas de peixe (ou camarão), leite de coco (200ml), azeite de dendê (50ml), pimentões coloridos, coentro e cebola.",
        preparo: "Marine o peixe com sal e limão. Em uma panela de barro, faça camadas de temperos e peixe. Adicione o leite de coco e o dendê. Cozinhe por 20 minutos."
    },
    churrasco: {
        titulo: "Dicas para o Churrasco Gaúcho Perfeito",
        imagem: "churrasco.jpg",
        ingredientes: "Picanha, costela, maminha. Sal grosso e brasa forte.",
        preparo: "Tempere a carne apenas com sal grosso. Leve à brasa, deixando a gordura para cima no início. Não vire mais de duas vezes."
    },
    paodequeijo: {
        titulo: "Pão de Queijo Mineiro Tradicional",
        imagem: "paodequeijo.jpg",
        ingredientes: "Polvilho doce, polvilho azedo, queijo minas curado, leite, óleo, ovos e sal.",
        preparo: "Ferva o leite, óleo e sal. Escalpe o polvilho. Adicione os ovos e o queijo ralado. Misture bem e asse até dourar."
    },
    acaraje: {
        titulo: "Acarajé (Bolinho de Feijão-Fradinho)",
        imagem: "acaraje.jpg",
        ingredientes: "Feijão-fradinho, cebola, sal. Fritar no azeite de dendê. Rechear com vatapá, camarão seco e salada.",
        preparo: "Deixe o feijão de molho. Triture com a cebola até virar uma massa. Frite colheradas da massa no azeite de dendê bem quente."
    },
    carnedepanela: {
        titulo: "Carne de Panela (Cozido Lento)",
        imagem: "serginhojuca-carnedepanela.webp",
        ingredientes: "Patinho ou músculo (1kg), batatas, cenouras, cebola, alho, vinho tinto (opcional), caldo de carne.",
        preparo: "Sele a carne. Refogue os temperos. Adicione a carne e o caldo. Cozinhe na panela de pressão por 40 minutos ou lentamente por 2 horas."
    },
    caisdavitoria: {
        titulo: "Caís da Vitória (Variação de Peixe Baiano)",
        imagem: "caís-da-vitoria.jpg",
        ingredientes: "Filé de peixe branco, pimentões, tomate, cebola, azeite de oliva, limão e temperos frescos.",
        preparo: "Prato levemente cozido. Marine o peixe. Cozinhe em fogo brando com os vegetais. Servir com arroz e pirão."
    },
    bobodecamarao: {
        titulo: "Bobó de Camarão Cremoso",
        imagem: "bobó-de-camarão.jpeg",
        ingredientes: "Camarão, mandioca (aipim), leite de coco, azeite de dendê, coentro, cebola e pimentão.",
        preparo: "Cozinhe a mandioca e bata com o leite de coco para formar um creme. Refogue os temperos e o camarão. Misture o creme de mandioca e finalize com dendê."
    }
};

/// ... (seu código JavaScript anterior) ...

// Dados Simulados INICIAIS para o Mural de Usuários
// ATENÇÃO: Se carregar do Local Storage, esses dados serão substituídos.
// Mantenha-os aqui como fallback ou para a primeira vez que a página é carregada.
let receitasUsuarios = [
    { nome: "Maria S.", titulo: "Torta de Palmito Deliciosa", descricao: "Uma torta simples, mas que lembra o sabor da infância.", imagem: null }, // Adicionei 'imagem: null'
    { nome: "João V.", titulo: "Cuscuz Recheado Nordestino", descricao: "A receita tradicional com um toque de carne de sol desfiada.", imagem: null },
    { nome: "Ana K.", titulo: "Bolinho de Chuva da Vovó", descricao: "O melhor para o café da tarde, frito na hora e coberto com açúcar e canela.", imagem: null },
    { nome: "Pedro A.", titulo: "Vatapá Rápido de Liquidificador", descricao: "Prático e cremoso, sem perder o sabor original da Bahia.", imagem: null },
    { nome: "Clara B.", titulo: "Doce de Leite Caseiro", descricao: "Doce cremoso e irresistível, feito na panela de pressão.", imagem: null }
];

// ... (seus blocos de Local Storage e Carrossel de Chefes) ...

// --- 3. Mural de Receitas de Usuários (2 Visíveis + Seta) ---
// (Lógica de Navegação do Mural permanece, mas precisa ser ajustada para renderizar a imagem)
const muralReceitasUsuario = document.getElementById('mural-receitas-usuario');
const btnAnteriorUsuario = document.getElementById('btn-anterior-usuario');
const btnProximoUsuario = document.getElementById('btn-proximo-usuario');

const receitasPorPagina = 2;
let indexInicio = 0;

function atualizarMuralUsuario() {
    muralReceitasUsuario.innerHTML = '';

    for (let i = indexInicio; i < indexInicio + receitasPorPagina; i++) {
        if (i < receitasUsuarios.length) {
            const receita = receitasUsuarios[i];
            const item = document.createElement('article');
            item.className = 'receita-usuario-item';
            
            // Adiciona a imagem se ela existir
            let imagemHTML = '';
            if (receita.imagem) {
                imagemHTML = `<img src="${receita.imagem}" alt="Foto da ${receita.titulo}" class="receita-usuario-img">`;
            }

            item.innerHTML = `
                ${imagemHTML}
                <h4>${receita.titulo}</h4>
                <p>Por: <strong>${receita.nome}</strong></p>
                <p>${receita.descricao}</p>
            `;
            muralReceitasUsuario.appendChild(item);
        }
    }

    btnAnteriorUsuario.style.display = indexInicio > 0 ? 'block' : 'none';
    btnProximoUsuario.style.display = indexInicio + receitasPorPagina < receitasUsuarios.length ? 'block' : 'none';
}

// ... (seus event listeners para os botões do mural) ...


// --- 4. Funcionalidade de Postagem de Receitas de Usuários (Com Upload de Imagem) ---

const formPostagem = document.getElementById('form-postagem');
const inputNome = document.getElementById('nome-usuario');
const inputTitulo = document.getElementById('titulo-receita');
const textareaDescricao = document.getElementById('descricao-receita');
const inputImagemReceita = document.getElementById('imagem-receita'); // NOVO: Campo de imagem

formPostagem.addEventListener('submit', (e) => {
    e.preventDefault(); 

    const novoNome = inputNome.value.trim();
    const novoTitulo = inputTitulo.value.trim();
    const novaDescricao = textareaDescricao.value.trim();

    if (!novoNome || !novoTitulo || !novaDescricao) {
        alert('Por favor, preencha o nome, título e descrição da receita!');
        return;
    }

    const arquivoImagem = inputImagemReceita.files[0];
    let imagemBase64 = null;

    if (arquivoImagem) {
        const reader = new FileReader();
        reader.onload = function(e) {
            imagemBase64 = e.target.result; // Imagem em Base64

            const novaReceita = {
                nome: novoNome,
                titulo: novoTitulo,
                descricao: novaDescricao,
                imagem: imagemBase64 // Guarda a imagem em Base64
            };

            receitasUsuarios.unshift(novaReceita);
            salvarReceitas();
            indexInicio = 0;
            atualizarMuralUsuario();

            formPostagem.reset();
            alert('Sua receita foi postada com sucesso!');
        };
        reader.readAsDataURL(arquivoImagem); // Lê o arquivo como URL de dados (Base64)
    } else {
        // Se não houver imagem, posta a receita sem ela
        const novaReceita = {
            nome: novoNome,
            titulo: novoTitulo,
            descricao: novaDescricao,
            imagem: null
        };
        receitasUsuarios.unshift(novaReceita);
        salvarReceitas();
        indexInicio = 0;
        atualizarMuralUsuario();

        formPostagem.reset();
        alert('Sua receita foi postada com sucesso!');
    }
 


    // --- 5. Funcionalidade de Postagem de Comentários ---
    // (Lógica do Comentário permanece inalterada)
    const formComentario = document.getElementById('form-comentario');
    const muralComentarios = document.getElementById('mural-comentarios');
    const inputNomeComentario = document.getElementById('nome-comentario');
    const textareaTextoComentario = document.getElementById('texto-comentario');

    formComentario.addEventListener('submit', (e) => {
        e.preventDefault(); 

        const nome = inputNomeComentario.value.trim();
        const texto = textareaTextoComentario.value.trim();

        if (!nome || !texto) {
            alert('Por favor, preencha seu nome e o texto do comentário.');
            return;
        }

        const novoComentario = document.createElement('article');
        novoComentario.className = 'comentario';
        novoComentario.innerHTML = `<p><strong>${nome}:</strong> ${texto}</p>`;

        muralComentarios.prepend(novoComentario);

        formComentario.reset();
    });


    // Inicializa o mural de receitas de usuários na primeira carga
    atualizarMuralUsuario();
});