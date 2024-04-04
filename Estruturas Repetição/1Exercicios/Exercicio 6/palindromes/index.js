palavra = prompt("Digite uma palavra, para vermos se é palíndromo")
palavraInvertida = ""

for(let i = (palavra.length - 1);i>=0;i --){

    palavraInvertida += palavra[i]

}

console.log(palavraInvertida)

if(palavraInvertida == palavra){
    alert(`A palavra ${palavra} é um palíndromo`)
} else{
    alert(`A palavra ${palavra} não é um palíndromo`)
}


