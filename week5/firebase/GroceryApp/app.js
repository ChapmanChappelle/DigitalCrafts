let groceryDiv = document.getElementById("groceryDiv")
let addDiv = document.getElementById("addDiv")
let storeBtn = document.getElementById("storeBtn")
let storeTxt = document.getElementById("storeTxt")

// listener for storeBtn
storeBtn.addEventListener("click", () => {
   let name = storeTxt.value
   saveDataToFirebase(name)
})

// takes documentID and deletes the store from the database
function deleteStore(documentId) {
   db.collection("stores")
      .doc(documentId)
      .delete()
      .then(function () {
         getAll()
      })
      .catch(function (error) {})
   
   // refreshing list
   getAllStores()
}

// displays all stores
function getAllStores() {
   // clear groceryDiv
   groceryDiv.innerHTML = ""

   db.collection("stores")
      .get()
      .then((snapshot) => {
         snapshot.forEach((doc) => {
            let data = doc.data()
            let storeItem = `
               <p>${data.name}</p>
               <button onclick="deleteStore('${doc.id}')">Delete</button>`
            groceryDiv.insertAdjacentHTML("beforeend", storeItem)
         })
      })
}

// writes to firestore db
function saveDataToFirebase(name) {
   db.collection("stores")
      .add({
         name: name
      })
      .then(function (docRef) {
         getAllStores()
      })
      .catch(function (error) {
         console.log("error")
      })
}




getAllStores()