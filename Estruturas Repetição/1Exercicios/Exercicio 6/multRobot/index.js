number = parseInt(prompt(" Robô da Tabuada: \nDigite o número que você deseja saber a tabuada!"))
tabuada = ``

for(let i = 0;i<=20;i++){
    resultado = number*i
    tabuada += `${i} x ${number} = ${number*i}\n`
}

alert(`Aqui está a tabuada de ${number}:
${tabuada}`)