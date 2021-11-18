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

const confirmation2 = confirm('If you want to update a to-do click "ok"\nIf you want to delete a to-do click "cancel"')

if(confirmation2){
    const updateToDoId = Number(prompt("Enter the ID of the to-do you want to update"))
    if(isNaN(updateToDoId)){
        console.error("YOU PUT THE WRONG ID!!!!!!");
    }else{
        const updateToDoTitle = prompt("Enter the new title")
        const updateToDoCompleted = prompt("Enter false if the to-do is not completed and true if the to-do is completed")
        todos[updateToDoId-1].title=updateToDoTitle
        todos[updateToDoId-1].completed=updateToDoCompleted
    }
}else{
    const deleteToDoId = Number(prompt("Enter the ID of the to-do you want to delete"))
    if(isNaN(deleteToDoId)){
        console.error("YOU PUT THE WRONG ID!!!!!!");
    }else{
        todos.splice(deleteToDoId-1,deleteToDoId)
    }
}