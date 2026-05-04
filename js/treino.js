window.onload = load;
document.addEventListener("input",save);

const dias = ["Segunda","Terça","Quarta","Quinta","Sexta","Sábado","Domingo"]
const container = document.getElementById("semana")

function criarDia(nomeDia, musculo, exercicios) {
    const div = document.createElement("div");
    div.className = "dia";

    div.innerHTML = `
        <h2>${nomeDia}</h2>
        <input value="${musculo}" placeholder="Músculo (ou descanso)">
        <button onclick="addexerc(this)">+Exercicio</button>
        <ol></ol>
    `;

    const ol = div.querySelector("ol");

    exercicios.forEach(ex => {
        const li = document.createElement("li");

        li.innerHTML = `
            <input value="${ex.nome}">
            <input value="${ex.series}">
            <input value="${ex.reps}">
            <input value="${ex.carga}">
            <button onclick="this.parentElement.remove()" class="addbtn">X</button>
        `;

        ol.appendChild(li);
    });

    container.appendChild(div);
}

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

        data.push({nomeDia, musculo,exercicios})
    });

    localStorage.setItem("treino",JSON.stringify(data))
}

function load(){
    const data = JSON.parse(localStorage.getItem("treino"));
    container.innerHTML = "";

    if(!data) {
        dias.forEach(dia => criarDia(dia,"",[]));
        return;    
    }

    data.forEach(dia => {
        criarDia(dia.nomeDia,dia.musculo,dia.exercicios);
    })
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
