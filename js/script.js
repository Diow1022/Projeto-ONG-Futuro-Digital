// Futuro Digital - JavaScript (arquivo externo, sem bibliotecas)

/* ===== FUNCIONALIDADE 2: interação da mascote TiLontra =====
   A TiLontra abre e fecha um balão de conversa e responde com dicas por assunto. */
const botaoTilontra = document.getElementById("btn-tilontra");
const balao = document.getElementById("balao");
const textoBotao = document.getElementById("btn-texto");
const dicaTexto = document.getElementById("dica-texto");
const balaoPose = document.getElementById("balao-pose");
const heroTilontra = document.getElementById("hero-tilontra");

// Função que alterna o estado do balão (mostrado/oculto)
function alternarTilontra() {
  if (balao.hidden) {
    balao.hidden = false; // mostra o balão
    textoBotao.textContent = "Fechar dica";
    botaoTilontra.setAttribute("aria-expanded", "true");
  } else {
    balao.hidden = true; // oculta o balão
    textoBotao.textContent = "Falar com a TiLontra";
    botaoTilontra.setAttribute("aria-expanded", "false");
  }
}

// Abre o balão apenas se ele estiver fechado (usada pelo mascote da página inicial)
function abrirTilontra() {
  if (balao.hidden) {
    alternarTilontra();
  }
}

// Mostra a dica do assunto escolhido e troca a pose da TiLontra
function mostrarDica(tema) {
  let texto = "";
  let pose = "";
  if (tema === "golpes") {
    texto = "Recebeu uma mensagem dizendo que você ganhou um prêmio e pedindo para clicar em um link? Desconfie. Apague e não responda.";
    pose = "img/pose-conectado.png";
  } else if (tema === "senhas") {
    texto = "Prefira uma frase longa como senha, em vez de uma palavra curta. E use uma senha diferente em cada conta.";
    pose = "img/pose-estudando.png";
  } else {
    texto = "No currículo digital, coloque seu nome, um e-mail profissional, seus cursos e o que você sabe fazer. Uma página basta para começar.";
    pose = "img/pose-oportunidades.png";
  }
  dicaTexto.textContent = texto;
  balaoPose.src = pose;
}

// Registra os eventos de clique
botaoTilontra.addEventListener("click", alternarTilontra);
document.getElementById("tema-golpes").addEventListener("click", function () { mostrarDica("golpes"); });
document.getElementById("tema-senhas").addEventListener("click", function () { mostrarDica("senhas"); });
document.getElementById("tema-curriculo").addEventListener("click", function () { mostrarDica("curriculo"); });
if (heroTilontra) {
  heroTilontra.addEventListener("click", abrirTilontra);
}

/* ===== FUNCIONALIDADE 1: formulário validado (só existe em contato.html) ===== */
const formulario = document.getElementById("formulario");

if (formulario) {
  const campoNome = document.getElementById("nome");
  const campoEmail = document.getElementById("email");
  const campoAssunto = document.getElementById("assunto");
  const campoMensagem = document.getElementById("mensagem");
  const resultado = document.getElementById("resultado");

  // Escreve (ou limpa) a mensagem de erro de um campo
  function mostrarErro(id, texto) {
    document.getElementById(id).textContent = texto;
  }

  // Valida os campos e mostra o resultado na própria página
  function validarFormulario(evento) {
    evento.preventDefault(); // impede o envio e o recarregamento padrão

    // Lê os valores e remove espaços desnecessários com trim()
    const nome = campoNome.value.trim();
    const email = campoEmail.value.trim();
    const assunto = campoAssunto.value.trim();
    const mensagem = campoMensagem.value.trim();

    let valido = true; // muda para false se algum campo estiver errado

    // Nome: mínimo de 3 caracteres
    if (nome.length < 3) {
      mostrarErro("erro-nome", "Digite um nome com pelo menos 3 caracteres.");
      valido = false;
    } else {
      mostrarErro("erro-nome", "");
    }

    // E-mail: preenchido e em formato básico válido
    if (email === "") {
      mostrarErro("erro-email", "Digite o seu e-mail.");
      valido = false;
    } else if (!campoEmail.checkValidity()) {
      mostrarErro("erro-email", "Use um e-mail válido, como nome@exemplo.com.");
      valido = false;
    } else {
      mostrarErro("erro-email", "");
    }

    // Assunto: não pode ficar vazio
    if (assunto === "") {
      mostrarErro("erro-assunto", "Informe o assunto da mensagem.");
      valido = false;
    } else {
      mostrarErro("erro-assunto", "");
    }

    // Mensagem: mínimo de 10 caracteres
    if (mensagem.length < 10) {
      mostrarErro("erro-mensagem", "Escreva uma mensagem com pelo menos 10 caracteres.");
      valido = false;
    } else {
      mostrarErro("erro-mensagem", "");
    }

    // Mostra o resultado geral
    if (valido) {
      resultado.className = "resultado sucesso";
      resultado.textContent = "Tudo certo, " + nome + "! Esta confirmação é simulada: nenhum e-mail foi enviado e nenhum dado foi coletado.";
    } else {
      resultado.className = "resultado erro-geral";
      resultado.textContent = "Corrija os campos indicados e tente novamente.";
    }
  }
  // Registra o evento de envio
  formulario.addEventListener("submit", validarFormulario);
}

