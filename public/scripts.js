function decToRoman(quant){
    if(isNaN(quant)){
        return "Insira um número válido.";
    }

    const romanNumber = [
        { value: 1000, symbol: "M"},
        { value: 500, symbol: "D"},
        { value: 100, symbol: "C"},
        { value: 50, symbol: "G"},
        { value: 10, symbol: "X"},
        { value: 5, symbol: "V"},
        { value: 1, symbol: "I"},
    ];

    let result = "";
    for (const {value, symbol} of romanNumber) {
        while (quant >= value) {
            result += symbol;
            quant -= value;
        }
    }
    return result;
}

//console.log(decToRoman(51));