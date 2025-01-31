function decToRoman(){
    const quanti = document.getElementById('quantiD');
    const convButton = document.getElementById('convButton');
    
    const decNumber = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    const romSymbol = ["M","CM", "D", "CD", "C", "XC", "G", "XG", "X", "IX", "V", "IV", "I"];
    
    let quante = parseInt(quanti.value);
    let result = "";
    
    
    for(let i = 0; i < decNumber.length; i++){
        while(quante >= decNumber[i]){
            result += romSymbol[i];
            quante -= decNumber[i];
        }
    }
    
    if(!isNaN(result)){
        alert("Insira um número decimal válido.");
    }

    convButton.textContent = "Romano: " + result;
    
}

//percorrer o numero romano da esquerda pra direita, somando os simbolos.
//se um simbolo da esquerda tiver o valor menor que o da direita
//subtrair e pular o numero, depois continuar seguindo a regra.

function romanToDecimals() {
    const quanti = document.getElementById('quantiR');
    const convButton = document.getElementById('convButton');

    const romanNumbers = {
        I: 1,
        V: 5,
        X: 10,
        G: 50,
        C: 100,
        D: 500,
        M: 1000,
    }

    const quant = quanti.value.toUpperCase();
    let result = 0;

    for (let i = 0; i < quant.length; i++){
        let leftNumber = romanNumbers[quant[i]];
        let rightNumber = romanNumbers[quant[i + 1]];

        if(leftNumber < rightNumber){
           result += rightNumber - leftNumber;
           i++;
        } else {
            result += leftNumber;
        }
    }

    convButton.textContent = "Decimal: " + result;

    if(isNaN(result)){
        alert("Insira um algarismo romano válido.");
    }
}

//se conseguir implementar dec to roman criar uma funcao geral
//com um if para duas functions (romanToDecimal - decToRoman),
//caso o input seja numero decimal seguir pra function dec,
//caso seja roman seguir pra function roman

function chooseConversion(){

    const quantiD = document.getElementById('quantiD');
    const quantiR = document.getElementById('quantiR');
    const decValue = quantiD.value;
    const romValue = quantiR.value;

    if(isNaN(romValue) && romValue !== ""){
        romanToDecimals();
    }else if(!isNaN(decValue) && decValue !== ""){
        decToRoman();
    }

}