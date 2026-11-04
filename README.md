# Futuro Digital — Tecnologia com propósito

Projeto integrador (HTML, CSS e JavaScript): site de uma ONG fictícia de inclusão e educação digital.

**Integrantes:**  
-Christian Badolato Santos (RGM: 47224011)

-Davi Barros Correia (RGM: 47204885)

-Guilherme Pereira Ferreira da Silva (RGM: 47228903)

-Jonatas do Nascimento Lima (RGM: 46929720)

-Kamilly Anselmoo (RGM: 47234237)

-Matheus Pedrosa dos Reis (RGM: 46784721)

-Pablo Orlando Bizari Di Sisto (RGM: 46695737)

-Vithor Hugo Moreno de Carvalho (RGM: 46761926)

falta colocar o de vcs

## Objetivo
Divulgar a atuação da Futuro Digital, que democratiza o acesso ao conhecimento tecnológico com educação digital, segurança on-line e inclusão profissional.

## Páginas
- `index.html`: apresentação, causa, como funciona, dicas de segurança e chamada para participar
- `sobre.html`: história, missão, público, valores e a mascote TiLontra
- `projetos.html`: Primeiros Cliques, Internet sem Medo e Conecta Carreira, com o que se aprende e tabela-resumo
- `contato.html`: voluntariado, formulário (envio simulado) e perguntas frequentes em HTML puro (`details`, sem JavaScript)

## Funcionalidades JavaScript (`js/script.js`)
1. **Formulário validado:** `submit` com `addEventListener()` e `preventDefault()`. Nome com 3+ caracteres, e-mail válido, assunto preenchido, mensagem com 10+ caracteres (com `trim()`). Mostra erros e uma confirmação **simulada** na página.
2. **Interação da TiLontra (mascote interativa):** o botão no canto da tela, ou o clique no mascote da página inicial, abre e fecha o balão de conversa (o texto do botão muda). Dentro do balão, o público escolhe um assunto (Golpes, Senhas ou Currículo) e a TiLontra mostra a dica e troca de pose. Usa `addEventListener("click", ...)`, funções, `if/else`, `textContent` e alteração do DOM.

## Fontes e créditos
A mascote TiLontra, a identidade visual e as imagens utilizadas no projeto foram desenvolvidas pela equipe com auxílio de ferramentas de inteligência artificial.

A Futuro Digital é uma ONG fictícia, criada exclusivamente para fins acadêmicos. O formulário possui envio simulado, sem envio de e-mails ou coleta de dados.
