const refeicoes = ["Café da Manhã","Almoço","Jantar","Outra"];
const container = document.getElementById("calculadora");

function addref(btn){
    const ul = btn.parentElement.querySelector("ul");
    ul.type = "none"

    const li = document.createElement("li");

    li.innerHTML = `
        <input placeholder="nome do alimento">
        <button onclick="this.parentElement.remove()">X</button>
    `;

    ul.appendChild(li)
}

refeicoes.forEach(refeicao => {
    const div = document.createElement("div");
    div.className = "refeicao";

    div.innerHTML = `
        <h2>${refeicao}</h2>
        
        <button onclick="addref(this)">+ ref</button>
        <ul></ul>
        <!--funcao calckcal ainda nao foi feita-->
        <button onclick="calckcal(this)">Calcular</button>
    `;

    container.appendChild(div);
});
