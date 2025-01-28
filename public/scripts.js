function decToRoman(quanti){
    //const quanti = document.getElementById('quantiD');
    const convButton = document.getElementById('convButton');
    
    const decNumber = [1000, 500, 100, 50, 10, 5, 1];
    const romSymbol = ["M", "D", "C", "G", "X", "V", "I"];
    
    let result = "";
    
    for(let i = 0; i < decNumber.length; i++){
        while(quanti >= decNumber[i]){
            result += romSymbol[i];
            quanti -= decNumber[i];
        }
    }

    convButton.textContent = "Romano: " + result;
    
    if(!isNaN(result)){
        alert("Insira um número válido.");
    }
    
    return result;
}

console.log(decToRoman(9)); // IX
console.log(decToRoman(1994)); // MCMXCIV
console.log(decToRoman(4)); // IV
console.log(decToRoman(8)); // VIII


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