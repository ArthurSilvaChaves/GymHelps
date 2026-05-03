const dias = ["Segunda","Terça","Quarta","Quinta","Sexta","Sábado","Domingo"]
const container = document.getElementById("semana")

function save() {
    const data = [];

    document.querySelectorAll(".dia").forEach(dia => {
        const nomeDia = dia.querySelector("h2").textContent;
        const musculo = dia.querySelector("input").value;

        const exercicios = [];

        dia.querySelectorAll("li").forEach(li => {
            const inputs = li.querySelectorAll("input");

            exercicios.push({
                nome : inputs[0].value,
                series: inputs[1].value,
                reps: inputs[2].value,
                carga: inputs[3].value
            });
        });

        dados.push({Nomedia, musculo,exercicios})
    });

    localStorage.setItem("treino",JSON.stringify(dados))
}

function load(){
    const dados = JSON.parse(localStorage.getItem("treino"));

    if(!dados) return;
}

function addexerc(botao){
    const ol = botao.parentElement.querySelector("ol")
    ol.type = "I"

    const li = document.createElement("li")

    li.innerHTML = `
        <input placeholder="nome do exercicio">
        <input placeholder="series">
        <input placeholder="repeticoes">
        <input placeholder="carga">
        <button onclick="this.parentElement.remove()" class="addbtn">X</button>
    `;

    ol.appendChild(li)
}

dias.forEach(dia => {
    const div = document.createElement("div");

    div.className = "dia";

    div.innerHTML = `
        <h2>${dia}</h2>
        <input placeholder="Musculo (ou descanso)">
        <button onclick="addexerc(this)">+Exercicio</button>
        <ol></ol>
    `;

    container.appendChild(div);
})