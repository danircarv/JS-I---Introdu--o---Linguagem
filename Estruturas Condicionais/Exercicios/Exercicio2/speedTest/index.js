name1 = prompt("Digite o nome do primeiro veículo:")
speed1 = parseFloat(prompt(`Digite a velocidade do ${name1}:`))

name2 = prompt("Digite o nome do segundo veículo:")
speed2 = parseFloat(prompt(`Digite a velocidade do ${name2}:`))

if(speed1 > speed2){
    alert(`Cuidado ${name2} porque o ${name1} é ${speed1 - speed2}km/h mais rápido!!`)
} else if(speed1 < speed2){
    alert(`Cuidado ${name1} porque o ${name2} é ${speed2 - speed1}km/h mais rápido!!`)
} else {
    alert(`${name1} e ${name2} estão lado a lado nessa!`)
}

