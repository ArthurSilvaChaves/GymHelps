window.onload = load;
document.addEventListener("input",save)

const refeicoes = ["Café da Manhã","Almoço","Jantar","Outra"];
const container = document.getElementById("calculadora");

// const alimentos = [
//     ["arroz branco cozido",1.3]
// ]


function criarRefeicao(nomeRefeicao,alimentos =[]){
    const div = document.createElement("div");
    div.className = "refeicao";

    div.innerHTML = `
        <h2>${nomeRefeicao}</h2>
        
        <button onclick="addref(this)">+</button>

        <ul></ul>

        <button onclick="calckcal(this)">Calcular</button>

        <p>Total: </p>
    `;

    const ul = div.querySelector("ul");
    ul.type = "none"

    alimentos.forEach(alimento => {
        const li = document.createElement("li");

        li.innerHTML = `
                <input value="${alimento.nome}" placeholder="nome" type="text"/>
                <input value="${alimento.kcal}" placeholder="kcal" type="number" class="kcal"/>
                <input value="${alimento.g}" placeholder="g" type="number" class="g"/>

                <button onclick="this.parentElement.remove()">X</button>

                <hr style="border: 1px black solid"/>
        `;

        ul.appendChild(li);
    });

    container.appendChild(div);
}

function addref(btn){
    const ul = btn.parentElement.querySelector("ul");
    ul.type = "none"

    const li = document.createElement("li");

    li.innerHTML = `
        <input placeholder="nome" type="text"/>
        <input placeholder="kcal" type="number" class="kcal"/>
        <input placeholder="g" type="number" class="g"/>
        <button onclick="this.parentElement.remove(); save()">X</button>

        <hr style="border: 1px black solid"/>
    `;

    ul.appendChild(li)
}

function calckcal(botao) {
    const refeicao = botao.parentElement;

    const inputKcal = refeicao.querySelectorAll(".kcal");
    const inputG = refeicao.querySelectorAll(".g");

    let totalKcal = 0;
    let totalG = 0;

    inputKcal.forEach(input => {
        totalKcal += Number(input.value);
    })

    inputG.forEach(input => {
        totalG += Number(input.value);
    })

    const p  = refeicao.querySelector("p");

    p.textContent = `Total: ${totalKcal}kcal e ${totalG}g`
}

function save(){
    const data = [];
     
    document.querySelectorAll(".refeicao").forEach(refeicao => {
        const refeicaoNome = refeicao.querySelector("h2").textContent;
    
         const alimentos = [];

        refeicao.querySelectorAll("li").forEach(li => {
        const inputs = li.querySelectorAll("input");

            alimentos.push({
                nome:inputs[0].value,
                kcal:inputs[1].value,
                g:inputs[2].value
            });
        });

        data.push({
            refeicaoNome,
            alimentos
        });
    });

    localStorage.setItem("dieta",JSON.stringify(data));
}

function load(){
    const data = JSON.parse(localStorage.getItem("dieta"));

    container.innerHTML = "";

    if(!data){
        refeicoes.forEach(refeicao => {
            criarRefeicao(refeicao);
        });

        return;
    }

    data.forEach(refeicao => {
        criarRefeicao(
            refeicao.refeicaoNome,
            refeicao.alimentos
        );
    });
}