let nameTextBox = document.getElementById("nameTextBox")
let ageTextBox = document.getElementById("ageTextBox")
let addUserButton = document.getElementById("addUserButton")
let userList = document.getElementById("userList")

// create new node called users 
let usersRef = database.ref("users")

let users = [] 

/*
database.ref("users").child("-LkdgsP61Jx2zg5gT-_c")
.set({
    a: "a", 
    b: "b"
}) */

usersRef.on('value',(snapshot) => {
    //console.log(snapshot.val())

    users = [] 

    snapshot.forEach(item => {

        let userItem = item.val() // object 
        let user = new User(userItem.name, userItem.age)
        user.userId = item.key // unique key from firebase database 
        user.hobbies = userItem.hobbies
        users.push(user) // adding to an array 
    })

    displayUsers(users)

})

function addHobby(userId,obj) {
    
    console.log(userId)
    let user = users.find( u => u.userId == userId)

    let hobbyName = obj.previousElementSibling.value
    user.addHobby(new Hobby(hobbyName,'Travel'))
    usersRef.child(userId).set(user)
}

function displayUsers(users) {

    let userItems = users.map(user => {  

        let hobbyItems = user.hobbies.map(hobby => { 
            return `<p><b>${hobby.name}</b></p>`
        }).join('')

        return `<div>${user.name}
                 <input type="text" />        <button onclick='addHobby("${user.userId}",this)'>Add Hobby</button>     
                 ${hobbyItems}
                </div>`
    })

    userList.innerHTML = userItems.join('')
}


addUserButton.addEventListener('click',() => {
    let name = nameTextBox.value 
    let age = ageTextBox.value 
    saveUser(name, age)
})

function saveUser(name, age) {

    let hobby1 = new Hobby('Golf','Sports')
    let hobby2 = new Hobby('Hiking','Outdoors')

    let user = new User(name, age)
    user.addHobby(hobby1)
    user.addHobby(hobby2)
    //user.hobbies = [hobby1,hobby2]

    usersRef.push(user)

}



