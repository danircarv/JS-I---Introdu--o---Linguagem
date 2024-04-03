
const idade = parseInt(prompt("Informe sua idade"))

if(idade > 18 ){
    alert("Voce é maior de idade")
} else if(idade < 12) {
    alert("VocÊ é menor de idade")
} else if(idade < 4){
    alert("VocÊ é criança")
}

// if else ternario
const resultado  = (6 === 6) ? "Verdadeiro" : "Falso"

console.log(resultado)