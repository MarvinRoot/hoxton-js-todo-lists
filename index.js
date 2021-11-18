message = ``

for(const user of users){
    message += `Hi ${user.name} whose ID is ${user.id} and address is ${user.address.city}\n`
}

alert(message)



let idNumber = Number(prompt(`Enter your id number: `))

toDoList =  ``
if(isNaN(idNumber) || idNumber>10 || idNumber<1){
    alert("You didn't enter the correct ID")
}else {
    
    for(const todo of todos){
        if(idNumber===todo.userId){
            toDoList += `To Do: ${todo.title}\n`
        }
    }


    const confirmation = confirm('If you want to view the current to-do list press "ok"\nIf you want to add a to-do to the list press "cancel"')

    if(confirmation){
        alert(toDoList)
    }else{
        const newToDo = prompt("Enter the title of your to-do")
        todos.push({userId: idNumber, id: todos.length+1, title: newToDo, completed: false})
        toDoList += `To Do: ${newToDo}\n`
        alert(toDoList)
    }
    
}