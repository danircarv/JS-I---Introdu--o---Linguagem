valorMet = parseFloat(prompt(`Digite o valor em metros a ser convertido`))
option = parseInt(prompt(`Selecione o número correspondente a unidade de medida da conversão
1 - Milímetro(mm)
2 - Centímetro(cm)
3 - Decímetro(dm)
4 - Decâmetro(dam)
5 - Hectômetro(hm)
6 - Kilômetro(km)`))

switch(option){
    case 1:
        resultado = valorMet*1000
        alert(`${valorMet} metros são ${resultado.toFixed(2)} milímetros`)
        break
    
    case 2:
        resultado = valorMet*100
        alert(`${valorMet} metros são ${resultado.toFixed(2)} centímetros`)
        break
    
    case 3:
        resultado = valorMet*10
        alert(`${valorMet} metros são ${resultado.toFixed(2)} decímetros`)
        break
    
    case 4:
        resultado = valorMet/10
        alert(`${valorMet} metros são ${resultado.toFixed(2)} decâmetros`)
        break
    
    case 5:
        resultado = valorMet/100
        alert(`${valorMet} metros são ${resultado.toFixed(2)} hectômetros`)
        break
    
    case 6:
        resultado = valorMet/1000
        alert(`${valorMet} metros são ${resultado.toFixed(2)} kilômetros`)
        break
    
    default:
        alert("Opção inválida!")
}

