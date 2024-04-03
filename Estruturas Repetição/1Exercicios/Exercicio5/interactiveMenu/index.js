do{
    option = parseInt(prompt(`\n Menu Interativo
    1 - Opção 1 
    2 - Opção 2
    3 - Opção 3
    4 - Opção 4
    5 - Encerrar`))

    if(option == 1){
       alert("Você escolheu a opção 1")
    } else if(option == 2){
       alert("Você escolheu a opção 2")
    } else if(option == 3){
       alert("Você escolheu a opção 3")
    } else if(option == 4){
       alert("Você escolheu a opção 4")
    } else {
      alert("Entrada inválida!")
    }

}while(option != 5)