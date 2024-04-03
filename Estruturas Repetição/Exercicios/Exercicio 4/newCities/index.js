const nome = prompt("Digite o nome do viajante:")
let cidades = ""
let contagem = 0

let continuar = prompt("Você visitou alguma cidade? (Sim/Não)")

while(continuar === "Sim"){
    let cidade = prompt("Qual cidade você visitou?")
    cidades += ` - ${cidade} \n`
    contagem++
    continuar = prompt("Você visitou alguma outra cidade? (Sim/Não)")
    
}

alert(`${nome} visitou as seguintes cidades: \n${cidades}
Quantidade de cidades visitadas por ${nome}: ${contagem}`)
