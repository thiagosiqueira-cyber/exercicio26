# Exercicio HTML, CSS e JS

Atividade prática desenvolvida em aula e replicada em casa, com o objetivo de praticar HTML, CSS e JavaScript. O projeto consiste em exercícios de lógica de programação transformados em páginas interativas, onde o usuário digita um número e vê o resultado na tela. Os arquivos estão separados em `ex.html` e `ex.js`.

---

## Exercício 1: Visualização com HTML e CSS

Os exercícios de lógica foram transformados em uma página interativa com HTML e CSS. Cada seção pede um número ao usuário e exibe o resultado na tela.

- **Tabuada Personalizada:** exibe a tabuada de 1 a 10 do número digitado
- **Números Pares:** exibe todos os números pares de 1 até o limite digitado
- **Soma de Intervalo:** calcula e exibe a soma de todos os inteiros de 1 até n
- **Fatorial:** calcula o fatorial do número digitado usando laço de repetição
- **Verificador de Primos:** verifica se o número digitado é primo ou não

---

## Exercício 2: EventListener
*Criar um EventListener a sua escolha.*

Foi adicionado um `addEventListener` de `click` no botão da tabuada, em um arquivo JavaScript separado do HTML.

**Por que escolhi o `click`?**

O `click` foi escolhido por ser o evento mais direto para o contexto dos exercícios. Como a seção da tabuada já possuía um botão, fez sentido aplicar o `addEventListener` nele para acionar a função sempre que o usuário clicar.

---

## Exercício 3: Funcionalidade escolhida — Dark/Light Mode
*Eventos/funcionalidades com JS que você gostaria de aprender.*

**Por que escolhi o Dark/Light Mode?**

A mudança de tema é uma das funcionalidades mais presentes em sites e aplicações modernas. Além de ser muito visual, ela usa o `classList.toggle`, que adiciona ou remove uma classe CSS dependendo se ela já existe ou não no elemento. É uma funcionalidade que aparece em todo tipo de projeto e impressiona bem em um portfólio.

**Como funciona:**

```html
<button id="btn-tema">Alternar Tema</button>
```

```css
body.dark {
    background-color: #1a1a1a;
    color: #ffffff;
}
```

```javascript
document.getElementById("btn-tema").addEventListener("click", function() {
    document.body.classList.toggle("dark");
});
```

O `classList.toggle("dark")` verifica se a classe `dark` está no `body`:
- Se **não estiver** → adiciona, ativando o tema escuro
- Se **já estiver** → remove, voltando para o tema claro

---

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript
