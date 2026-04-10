function imccalc(){
    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value;
    let resultado = document.getElementById("result");
    let abaixoouacima = document.getElementById("aoa");

    if(peso && altura){
        x = peso/(altura**2)
        resultado.textContent = `seu imc e de ${x.toFixed(2)}`
        
        if(x <= 18.5){
            abaixoouacima.textContent = "Voce esta em excesso de magreza"
        } else if(x > 18.5 && x <= 25){
            abaixoouacima.textContent = "Voce esta com peso normal"
        } else if (x > 25 && x <= 30){
            abaixoouacima.textContent = " excesso de peso"
        } else if (x > 30 && x <= 35){
            abaixoouacima.textContent = "obesidade (grau I)"
        } else if (x > 35 && x <= 40){
            abaixoouacima.textContent = "obesidade (grau II)"
        } else if (x > 40){
            abaixoouacima.textContent = "obesidade (grau III)"
        }
    }
}

