message = ``

for(const user of users){
    message += `Hi ${user.name} whose ID is ${user.id} and address is ${user.address.city}\n`
}

alert(message)



const idNumber = Number(prompt(`Enter your id number: `))

toDoList =  ``

for(const todo of todos){
    if(idNumber===todo.userId){
        toDoList += `To Do: ${todo.title}\n`
    }
}

alert(toDoList)

// for(i=1; i<=users.length; i++){
//     if(idNumber===i){
//         alert(`Here is your To-do list ${users[i-1].username}\n
//         ${todos.slice(1, 6)}`)
//     }
// }