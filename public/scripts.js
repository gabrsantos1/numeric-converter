function decToRoman(quant){
    
    const quanti = document.getElementById('quanti');
    const convButton = document.getElementById('convButton');
    
    const decNumber = [1, 5, 10, 50, 100, 500, 1000]
    const romSymbol = ["I", "V", "X", "G", "C", "D", "M"]
    
    let result = "";
    
    
    return result;
    
    if(isNaN(quant)){
        return "Insira um número válido.";
    }
    
}


console.log(decToRoman(9)); // IX
console.log(decToRoman(4)); // IV
console.log(decToRoman(8)); // VIII


//percorrer o numero romano da esquerda pra direita, somando os simbolos.
//se um simbolo da esquerda tiver o valor menor que o da direita
//subtrair e pular o numero, depois continuar seguindo a regra.

function romanToDecimals() {
    const quanti = document.getElementById('quanti');
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

    convButton.textContent = 'Decimal:' + result;

    if(isNaN(result)){
        alert("Insira um algarismo romano válido.");
    }
}


console.log(romanToDecimals("IX")); // 9
console.log(romanToDecimals("IV")); // 4
console.log(romanToDecimals("XIV")); // 14
console.log(romanToDecimals("MCMXCIV")); //1994

//se conseguir implementar dec to roman criar uma funcao geral
//com um if para duas functions (romanToDecimal - decToRoman),
//caso o input seja numero decimal seguir pra function dec,
//caso seja roman seguir pra function roman
