function decToRoman(quant){
    if(isNaN(quant)){
        return "Insira um número válido.";
    }

    const decNumber = {
        1000: M,
        500: D,
        100: C,
        50: G,
        10: X,
        5: V,
        1: I,
    };

    let result = "";

    return result;

}


console.log(decToRoman(9)); // IX
console.log(decToRoman(4)); // IV
console.log(decToRoman(8)); // VIII

//percorrer o numero romano da esquerda pra direita, somando os simbolos.
//se um simbolo da esquerda tiver o valor menor que o da direita
//subtrair e pular o numero, depois continuar seguindo a regra.

function romanToDecimals(quant) {
    
    const romanNumbers = {
        I: 1,
        V: 5,
        X: 10,
        G: 50,
        C: 100,
        D: 500,
        M: 1000,
    }

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

    return result;

}


console.log(romanToDecimals("IX")); // 9
console.log(romanToDecimals("IV")); // 4
console.log(romanToDecimals("XIV")); // 14
console.log(romanToDecimals("MCMXCIV")); //1994


