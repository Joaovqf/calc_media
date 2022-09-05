function calcular(){
    var entrada = document.getElementById("todoselementos").value
    var convert = entrada.split(",")
    console.log(convert)
    convert = convert.map(Number)
    console.log(convert)
    var divisor = convert.length
    console.log(divisor)
    var soma = 0
    for (var i=0; i<convert.length;i++){
     soma += convert[i]
    }
    console.log(soma)
    var resultado = soma / divisor
    alert(`Sua Média é ${resultado}.`)
}