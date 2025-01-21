function inverterString(str) {
    let stringInvertida = "";
    
    for (let i = str.length - 1; i >= 0; i--) {
        stringInvertida += str[i];
    }
    
    return stringInvertida;
}

const texto = "exemplo";
const textoInvertido = inverterString(texto);

console.log(`Texto original: ${texto}`);
console.log(`Texto invertido: ${textoInvertido}`);
