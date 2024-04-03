// Personagem que ataca
nameAtk = prompt("Digite o nome do atacante:")
powerAtk = parseInt(prompt(`Digite o poder de ataque de ${nameAtk}`))

// Personagem que defende
nameDef = prompt("Digite o nome do defensor:")
health = parseInt(prompt(`Digite os pontos de vida de ${nameDef}`))
powerDef = parseInt(prompt(`Digite o poder de defesa de ${nameDef}`))
haveShield = parseInt(prompt("O defensor tem escudo? \n0 - Não \n1 - Sim"))

// Dano
var damage

if(powerAtk > powerDef && haveShield == 0){
    damage = powerAtk - powerDef
    health -= damage  
} else if(powerAtk > powerDef && haveShield == 1){
    damage = (powerAtk - powerDef)/2
    health -= damage
} else if( powerAtk <= powerDef){
    damage = 0
}

alert(`Dano causado: ${damage}
Pontos de vida após o ataque: ${health}
`)