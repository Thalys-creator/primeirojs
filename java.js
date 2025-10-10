function Calcular(){

    let valorPeso = Number(document.getElementById("peso").value);
    let valorAltura = Number(document.getElementById("altura").value);

    if (valorPeso <= 0 || valorAltura <= 0){
        document.getElementById("resultado").textContent = "Digite valores válidos!";
        return;
    }

    let Imc = valorPeso / (valorAltura * valorAltura);
    let classificacao = "";

    if (Imc < 18.5){
        classificacao = "Abaixo do peso";
    } else if (Imc < 24.9){
        classificacao = "Peso normal";
    } else if (Imc < 29.9){
        classificacao = "Sobrepeso";
    } else if (Imc < 34.9){
        classificacao = "Obesidade Grau 1";
    } else if (Imc < 39.9){
        classificacao = "Obesidade Grau 2";
    } else {
        classificacao = "Obesidade Grau 3";
    }

    document.getElementById("resultado").textContent = 
        "IMC: " + Imc.toFixed(2) + " (" + classificacao + ")";
}





   // et Imc = (valorPeso / (valorAltura * valorAltura));

   // document.getElementById("resultado").textContent = "Imc: " + Imc.toFixed(2);


