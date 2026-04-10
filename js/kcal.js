function tmbcalc(){
    const genero = document.getElementById("choice").value;
    const peso = document.getElementById("peso").value;
    const altura = document.getElementById("altura").value;
    const idade = document.getElementById("idade").value;
    const resultadotmb = document.getElementById("resulttmb");
    const tdee = document.getElementById("resulttdee");
    let tmb;
    const fatoratividade = document.getElementById("atividade").value;
    let fatorA;

    if(fatoratividade == "sedentario"){
        fatorA = 1.2
    }  else if(fatoratividade == "lativo"){
        fatorA = 1.375
    } else if (fatoratividade == "mativo"){
        fatorA = 1.55
    } else if (fatoratividade == "muiativo"){
        fatorA = 1.725
    } else if (fatoratividade  == "eativo"){
        fatorA = 1.9
    }

    if(genero == "homem"){
        //caso for homem
        tmb = 10 * peso + 6.25 * altura - 5 * idade + 5;
        resultadotmb.textContent = `seu gasto metabolico basal e de ${tmb}`;
        tdee.textContent = `e o seu gasto energetico diario total e ${(tmb*fatorA).toFixed(2)}`
    }else {
        tmb = 10 * peso + 6.25 * altura - 5 * idade - 161;
        resultadotmb.textContent = `seu gasto metabolico basal e de ${tmb}`;
        tdee.textContent = `e o seu gasto energetico diario total e ${(tmb*fatorA).toFixed(2)}`
    }
}