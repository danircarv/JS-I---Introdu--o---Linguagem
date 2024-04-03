money = parseFloat(prompt("How much money do you have?"))

do{
    
    option = parseInt(prompt(`Money Available: ${money}
    Choose an option
    1 - Make a deposit
    2 - Withdraw money
    3 - Exit`))

    if(option == 1){
       deposit = parseInt(prompt("How much would you like to deposit?"))
       money += deposit
    } else if(option == 2){
       withdraw = parseInt(prompt("How much would you like to withdraw?"))
       money -= withdraw
    } else{
        alert("Entrada inválida!")
    }
}while(option != 3)