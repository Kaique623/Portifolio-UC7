function Calcular() {
    let operadores = document.getElementsByTagName("input");
    let number1 = document.getElementById("num1").value;
    let number2 = document.getElementById("num2").value;
    let operador;
    let respostasParagrafo  = document.getElementById("result")

    for (operator in operadores){
        if (operadores[operator].type != "radio"){
            continue;
        }
        if (operadores[operator].checked){
            operador = operadores[operator].value;
            console.log(operador)
            break;
        }
    }

    if (operador == "Soma")
        respostasParagrafo.innerHTML = (parseFloat(number1) + parseFloat(number2)).toFixed(2);
    else if (operador == "Sub")
        respostasParagrafo.innerHTML = (parseFloat(number1) - parseFloat(number2)).toFixed(2);
    else if (operador == "Mult")
        respostasParagrafo.innerHTML = (parseFloat(number1) * parseFloat(number2)).toFixed(2);
    else if (operador == "Divi")
        respostasParagrafo.innerHTML = (parseFloat(number1) / parseFloat(number2)).toFixed(2);
    
    if (respostasParagrafo.innerHTML == "NaN")
        respostasParagrafo.innerHTML = "";
}