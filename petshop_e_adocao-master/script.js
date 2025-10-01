const containerAdocao = document.getElementById("lista-adocao")

const adocaoPet = [
    'Floquinho', 'Harry', 'Leon',
    'Mel', 'Nuvem', 'Tom'
];

const idade = [
    2, 3, 5, 4 , 1, 4
];

const descricao = ['Um gatinho muito brincalhão e cheio de energia. Adora correr e buscar bolas de pelo.',
'Uma gatinho dócil e carinhoso, perfeito para quem busca um companheiro tranquilo. ', 'Um gato de grande e coração maior ainda. Leal e protetor.', 
'Uma filhote de gata muito curiosa e divertida. Adora explorar novos lugares.', 'Branquinho e carinhoso, filhote cheio de energia, pronto para um lar cheio de amor.',
'Preto e branco, adulto e calminho, um verdadeiro abraço peludo esperando para encher sua casa de amor.'
]

const imagens = [
    'img/foto-floquinho.jpg',
    'img/foto-harry.jpg',
    'img/foto-Mel.jpg',
    'img/foto-Leon.jpg',
    'img/foto-nuvem.jpg',
    'img/foto-tom.jpg'
];

function criarHtmlParaAdocao(lista) {
    let htmlParaInserir = "";
    for (let i = 0; i < lista.length; i++) {
        htmlParaInserir += `
            <li class="pet-card">
                <img src= ${imagens[i]}>   
                <div class="pet-info">
                <h3>${lista[i]}</h3>
                <p><b>Idade:</b> ${idade[i]} ano(s)</p>
                <p>${descricao[i]}</p>
                </div>
            </li>
        `;
    }
    return htmlParaInserir;
}

// Inserindo o HTML gerado na página
containerAdocao.innerHTML = criarHtmlParaAdocao(adocaoPet);


// --- 4. SELECIONANDO MÚLTIPLOS ELEMENTOS E MODIFICANDO EM LOTE ---
const todosOsCards = document.querySelectorAll('.pet-card');
for (let i = 0; i < todosOsCards.length; i++) {
  todosOsCards[i].style.borderLeft = "5px solid #a8edea";
  todosOsCards[i].style.transition = "border-color 0.3s ease";
  todosOsCards[i].addEventListener("mouseenter", () => {
    todosOsCards[i].style.borderLeft = "5px solid #27ae60";
  });
  todosOsCards[i].addEventListener("mouseleave", () => {
    todosOsCards[i].style.borderLeft = "5px solid #a8edea";
  });
}


// --- SELEÇÃO DOS ELEMENTOS DO FORMULÁRIO ---
const form = document.querySelector('.form-section');
const inputInteressado = document.getElementById('nome-interessado')
const inputNomePet = document.getElementById('pet-interesse');
const inputEmailTutor = document.getElementById('email-interessado');
//DIALOG - MODAL 
const dialog = document.getElementById("feedback-dialog");
const btnFechar = document.getElementById("btn-fechar");
const btnAbrir = document.querySelector(".botao");

const msgErroNome = inputNomePet.nextElementSibling; // Pega o <small> logo após o input
const msgErroEmail = inputEmailTutor.nextElementSibling; // Pega o <small> logo após o input
const msgErroInteressado = inputInteressado.nextElementSibling;

// --- OUVINTE DE EVENTO DE SUBMISSÃO ---
form.addEventListener('submit', function (event) {
    // 1. Previne o comportamento padrão de recarregar a página.
    event.preventDefault();
    console.log("Tentativa de envio interceptada.");

    // Variáveis de controle de validação
    let nomeValido = false;
    let emailValido = false;
    let interessadoValido = false;

    // 1. Validação do campo Nome do Tutor
    const tutorInteressadoValue = inputInteressado.value.trim();
    if (tutorInteressadoValue === '') {
        msgErroInteressado.textContent = 'O nome do tutor é obrigatório.';
        inputInteressado.classList.add('input-error');
        interessadoValido = false;
    } else {
        msgErroInteressado.textContent = '';
        inputInteressado.classList.remove('input-error');
        interessadoValido = true;
    }

    // 2. Validação do campo Email do Tutor
    const emailTutorValue = inputEmailTutor.value.trim();
    if (emailTutorValue === '') {
        msgErroEmail.textContent = 'O email do tutor é obrigatório.';
        inputEmailTutor.classList.add('input-error');
        emailValido = false;
    } else {
        msgErroEmail.textContent = '';
        inputEmailTutor.classList.remove('input-error');
        emailValido = true;
    }

    // 3. Validação do campo Nome do Pet
    const nomePetValue = inputNomePet.value.trim();
    if (nomePetValue === '') {
        msgErroNome.textContent = 'O nome do pet é obrigatório.';
        inputNomePet.classList.add('input-error');
        nomeValido = false;
    } else {
        msgErroNome.textContent = '';
        inputNomePet.classList.remove('input-error');
        nomeValido = true;
    }

    // 4. Verificação final
    if (interessadoValido && nomeValido && emailValido) {
        console.log("Dados do formulário válidos! Enviando para o 'servidor'...");
        console.log(`Nome do Tutor: ${tutorInteressadoValue}`);
        console.log(`Nome do Pet: ${nomePetValue}`);
        console.log(`Email do Tutor: ${emailTutorValue}`);

    
        // 5. Verificação modal
        //Fechar ao clicar no 'X'
        if (btnFechar) {
            btnFechar.addEventListener('click', () => {
                dialog.close();
            });
        }
        //Fechar a dialog clicando no fundo de tela (backdrop)
        if (dialog) {
            dialog.addEventListener('click', (event) => {
                //Verifica se o clique foi no própio elemento (dialog) ou fora em outros elementos e fundos
                if (event.target === dialog) {
                    dialog.close();
                }
            });
        }
    // Atualiza a mensagem do modal com os dados do usuário
        document.getElementById("dialog-mensagem").textContent =
            `Olá, ${tutorInteressadoValue}! Recebemos seu interesse pelo pet "${nomePetValue}". Em breve você receberá mais detalhes do seu processo de adoção através do e-mail ${emailTutorValue}. Boa sorte!`;

        // Abre o modal
        dialog.showModal();
    }
});
 


// const imagensCarrossel = [
//     'img/foto-floquinho.jpg',
//     'img/foto-harry.jpg',
//     'img/foto-Mel.jpg',
//     'img/foto-Leon.jpg',
//     'img/foto-nuvem.jpg',
//     'img/foto-tom.jpg'
// ];

// const track = document.querySelector('.carousel-track');
// const nextBtn = document.getElementById('btn-next');
// const prevBtn = document.getElementById('btn-prev');

// let slideAtual = 0;

// if (track && nextBtn && prevBtn) {
//     track.innerHTML = '';

//     const img = document.createElement('img');
//     img.classList.add('carousel-slide');
//     track.appendChild(img);

//     function mostrarSlide(indice) {
//         img.style.opacity = 0;
//         setTimeout(() => {
//             img.src = imagensCarrossel[indice];
//             img.style.opacity = 1;
//         }, 200);
//     }

//     nextBtn.addEventListener('click', () => {
//         slideAtual = (slideAtual + 1) % imagensCarrossel.length;
//         mostrarSlide(slideAtual);
//     });

//     prevBtn.addEventListener('click', () => {
//         slideAtual = (slideAtual - 1 + imagensCarrossel.length) % imagensCarrossel.length;
//         mostrarSlide(slideAtual);
//     });

//     mostrarSlide(slideAtual);

//     setInterval(() => {
//         slideAtual = (slideAtual + 1) % imagensCarrossel.length;
//         mostrarSlide(slideAtual);
//     }, 3000);
// }