const refeicoes = ["Café da Manhã","Almoço","Jantar","Outra"];
const container = document.getElementById("calculadora");

function addref(btn){
    const ul = btn.parentElement.querySelector("ul");
    ul.type = "none"

    const li = document.createElement("li");

    li.innerHTML = `
        <input placeholder="nome do alimento" type="text">
        <input placeholder="quantidade de kcal" type="number" class="kcal">
        <input placeholder="quantidade de gramas" type="number" class="g">
        <button onclick="this.parentElement.remove()">X</button>
    `;

    ul.appendChild(li)
}

function calckcal(botao) {
    const refeicao = botao.parentElement;

    const inputKcal = refeicao.querySelectorAll(".kcal");

    let total = 0;

    inputKcal.forEach(input => {
        total += Number(input.value);
    })

    const p  = refeicao.querySelector("p");

    p.textContent = `Total: ${total}kcal`
}

refeicoes.forEach(refeicao => {
    const div = document.createElement("div");
    div.className = "refeicao";

    div.innerHTML = `
        <h2>${refeicao}</h2>
        
        <button onclick="addref(this)">+</button>
        <ul></ul>
        <!--funcao calckcal ainda nao foi feita-->
        <button onclick="calckcal(this)">Calcular</button>
        <p>Total: </p>
    `;


    container.appendChild(div);
});
