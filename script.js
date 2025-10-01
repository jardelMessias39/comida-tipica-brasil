// ====================================================================
// ESTRUTURA DE DADOS (TODAS AS 8 RECEITAS)
// ====================================================================
// DADOS DAS RECEITAS (DO SEU CÓDIGO)
const dadosReceitas = {
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

// DADOS SIMULADOS PARA MURAL (DO SEU CÓDIGO)
let receitasUsuarios = [
    { nome: "Maria S.", titulo: "Torta de Palmito Deliciosa", descricao: "Uma torta simples, mas que lembra o sabor da infância.", imagem: null },
    { nome: "João V.", titulo: "Cuscuz Recheado Nordestino", descricao: "A receita tradicional com um toque de carne de sol desfiada.", imagem: null },
    { nome: "Ana K.", titulo: "Bolinho de Chuva da Vovó", descricao: "O melhor para o café da tarde, frito na hora e coberto com açúcar e canela.", imagem: null },
    { nome: "Pedro A.", titulo: "Vatapá Rápido de Liquidificador", descricao: "Prático e cremoso, sem perder o sabor original da Bahia.", imagem: null },
    { nome: "Clara B.", titulo: "Doce de Leite Caseiro", descricao: "Doce cremoso e irresistível, feito na panela de pressão.", imagem: null }
];



// --- 1. FUNCIONALIDADE DO CARROSSEL DE CHEFS (SLIDER) ---

const listaChefs = document.getElementById('chefs-lista');
const btnAnteriorChef = document.getElementById('btn-chef-anterior');
const btnProximoChef = document.getElementById('btn-chef-proximo');
const chefItems = document.querySelectorAll('.chef-item');

const itemsVisiveis = 1; 
let indiceAtual = 0;

// *** MUDANÇA AQUI: CRIANDO UMA FUNÇÃO PARA CALCULAR O DESLOCAMENTO REAL ***
function calcularLarguraDeslocamento() {
    if (chefItems.length === 0) return 0;

    // Pega o primeiro item como referência
    const primeiroChef = chefItems[0];
    
    // getBoundingClientRect().width retorna a largura do item na tela (Ex: 200px no PC, ou 90% da tela no celular)
    const larguraItem = primeiroChef.getBoundingClientRect().width;
    
    // O gap é de 25px (precisamos somá-lo ao deslocamento)
    const GAP_FIXO = 25; 
    
    // Retorna a largura do chef + o espaço (gap)
    return larguraItem + GAP_FIXO; 
}


// Função que aplica o movimento à lista (agora usando o cálculo dinâmico)
function atualizarCarrossel() {
    if (listaChefs && chefItems.length > 0) {
        // CHAMA A FUNÇÃO PARA SABER QUANTO PRECISA MOVER
        const LARGURA_DESLOCAMENTO_REAL = calcularLarguraDeslocamento();
        
        // Cálculo: índice atual * largura de movimento
        const deslocamento = -indiceAtual * LARGURA_DESLOCAMENTO_REAL; 
        
        listaChefs.style.transform = `translateX(${deslocamento}px)`;
        listaChefs.style.transition = 'transform 0.4s ease-in-out';
    } else {
        console.error("Erro: Elementos do carrossel não encontrados ou lista de chefs vazia.");
    }
}



// Event Listeners (Os cliques nos botões)
if (btnProximoChef && btnAnteriorChef && chefItems.length > 0) {
    
    btnProximoChef.addEventListener('click', () => {
        // Se ainda houver chefs para a direita
        if (indiceAtual < chefItems.length - itemsVisiveis) {
            indiceAtual++;
        } else {
            // Volta para o primeiro chef
            indiceAtual = 0; 
        }
        atualizarCarrossel();
    });

    btnAnteriorChef.addEventListener('click', () => {
        // Se não for o primeiro chef
        if (indiceAtual > 0) {
            indiceAtual--;
        } else {
            // Vai para o último chef
            indiceAtual = chefItems.length - itemsVisiveis; 
        }
        atualizarCarrossel();
    });
} 
// Fim do Carrossel de Chefs


// 2. FUNCIONALIDADE DOS PRATOS (MOSTRAR RECEITA COMPLETA)
const pratosClicaveis = document.querySelectorAll('.comida-item');
const receitaDetalheContainer = document.querySelector('.receita-detalhe-container');

if (pratosClicaveis.length > 0 && receitaDetalheContainer) {
    pratosClicaveis.forEach(prato => {
        // O clique estava faltando aqui!
        prato.addEventListener('click', () => {
            const idReceita = prato.dataset.receitaId; 
            const receita = dadosReceitas[idReceita];

            if (receita) {
                // Renderiza o detalhe completo da receita no container lateral
                receitaDetalheContainer.innerHTML = `
                    <h2 id="receita-titulo-selecao">${receita.titulo}</h2>
                    <div class="receita-conteudo">
                        <p><strong>Ingredientes:</strong> ${receita.ingredientes}</p>
                        <p><strong>Modo de Preparo:</strong> ${receita.preparo}</p>
                        <img src="./tipicas/${receita.imagem}" alt="Imagem de ${receita.titulo}" style="max-width: 100%; height: auto; margin-top: 15px;">
                    </div>
                `;
            } else {
                 receitaDetalheContainer.innerHTML = `<h2 id="receita-titulo-selecao">Receita não encontrada para o ID: ${idReceita}</h2>`;
            }
        });
    });
}


// 3. NAVEGAÇÃO ENTRE GRUPOS DE PRATOS (MOSTRAR MAIS)
const btnMostrarMais = document.getElementById('btn-mostrar-mais-pratos');
const grupoPratos1 = document.getElementById('grupo-pratos-1');
const grupoPratos2 = document.getElementById('grupo-pratos-2');

if (btnMostrarMais && grupoPratos1 && grupoPratos2) {
    btnMostrarMais.addEventListener('click', () => {
        if (grupoPratos1.style.display !== 'none') {
            // Esconde o primeiro grupo e mostra o segundo
            grupoPratos1.style.display = 'none';
            // Usa 'flex' para garantir que o layout da lista seja mantido
            grupoPratos2.style.display = 'flex'; 
            btnMostrarMais.textContent = 'Pratos Anteriores ⬅️';
        } else {
            // Esconde o segundo grupo e mostra o primeiro
            grupoPratos1.style.display = 'flex';
            grupoPratos2.style.display = 'none';
            btnMostrarMais.textContent = 'Próximos Pratos ➡️';
        }
    });
}


// --- LÓGICA DO MURAL DE USUÁRIOS (DO SEU CÓDIGO) ---

// Mural de Receitas de Usuários (2 Visíveis + Seta)
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
            
            let imagemHTML = '';
            if (receita.imagem) {
                // A imagem está em Base64, então é usada diretamente como source
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

    // Navegação do mural de usuários
    btnAnteriorUsuario.style.display = indexInicio > 0 ? 'block' : 'none';
    btnProximoUsuario.style.display = indexInicio + receitasPorPagina < receitasUsuarios.length ? 'block' : 'none';
}

// Event listeners para navegação do mural de usuários
if (btnAnteriorUsuario && btnProximoUsuario) {
    btnProximoUsuario.addEventListener('click', () => {
        if (indexInicio + receitasPorPagina < receitasUsuarios.length) {
            indexInicio += receitasPorPagina;
            atualizarMuralUsuario();
        }
    });

    btnAnteriorUsuario.addEventListener('click', () => {
        if (indexInicio > 0) {
            indexInicio -= receitasPorPagina;
            atualizarMuralUsuario();
        }
    });
}

// 4. FUNCIONALIDADE DE POSTAGEM DE RECEITAS DE USUÁRIOS
const formPostagem = document.getElementById('form-postagem');
const inputNome = document.getElementById('nome-usuario');
const inputTitulo = document.getElementById('titulo-receita');
const textareaDescricao = document.getElementById('descricao-receita');
const inputImagemReceita = document.getElementById('imagem-receita'); 

// Função para salvar no Local Storage (se necessário)
function salvarReceitas() {
    // Você pode adicionar uma função aqui para salvar 'receitasUsuarios' no Local Storage
    // localStorage.setItem('receitasUsuarios', JSON.stringify(receitasUsuarios));
}

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
            imagemBase64 = e.target.result; 

            const novaReceita = {
                nome: novoNome,
                titulo: novoTitulo,
                descricao: novaDescricao,
                imagem: imagemBase64 
            };

            receitasUsuarios.unshift(novaReceita);
            salvarReceitas();
            indexInicio = 0;
            atualizarMuralUsuario();

            formPostagem.reset();
            alert('Sua receita foi postada com sucesso!');
        };
        reader.readAsDataURL(arquivoImagem); 
    } else {
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
});


// 5. FUNCIONALIDADE DE POSTAGEM DE COMENTÁRIOS
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