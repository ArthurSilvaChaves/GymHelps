const alimentos = [
    {
        "nome":"Arroz Branco Cozido",
        kcal:130
    },
    {
        "nome":"Feijão Carioca",
        kcal:76
    },
    {
        "nome":"Frango",
        kcal:165
    },
    {
        nome:"Banana",
        kcal:89
    },
    {
        nome:"Batata Inglesa Cozida",
        kcal:65
    },
    {
        nome:"Ovo de Galinha Cozido",
        kcal:77
    },
    {
        nome:"Pão Francês",
        kcal:300
    }
];

const busca = document.getElementById("busca");
const lista = document.getElementById("listaAlimentos");

function mostrarAlimentos(listaAlimentos){
    lista.innerHTML = "";

    listaAlimentos.forEach(alimento => {

        lista.innerHTML += `
            <div class="card">
                <h2>Alimento: <br/> ${alimento.nome}</h2>
                <p>Kcal/100g: <br/> ${alimento.kcal}</p>
            </div>
        `;
    });

};

mostrarAlimentos(alimentos);

busca.addEventListener("input", () => {
    const valor = busca.value.toLowerCase();
    
    const filtro = alimentos.filter(alimento => 
        alimento.nome.toLowerCase().includes(valor)
    );

    mostrarAlimentos(filtro);
});

//---------------------------------------------------------------


const cards = document.querySelectorAll(".card");

cards.forEach(card => {
    card.addEventListener("click",() => {
        card.classList.toggle("ativo");
    })
})