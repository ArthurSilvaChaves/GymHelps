alimentos = [
    {
        "nome":"Arroz",
        kcal:130
    },
    {
        "nome":"Feijão",
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
    }
];

const lista = document.getElementById("listaAlimentos");

alimentos.forEach(alimento => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
        <h2>Alimento: <br/> ${alimento.nome}</h2>
        <p>Kcal/100g: <br/> ${alimento.kcal}</p>
    `;

    lista.appendChild(card);
});