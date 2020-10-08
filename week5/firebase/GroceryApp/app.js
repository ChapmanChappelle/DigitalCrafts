let groceryDiv = document.getElementById("groceryDiv")
let addDiv = document.getElementById("addDiv")
let storeBtn = document.getElementById("storeBtn")
let storeTxt = document.getElementById("storeTxt")
let addItemDiv = document.getElementById("addItemDiv")
let itemTxt = document.getElementById("itemTxt")
let itemBtn = document.getElementById("itemBtn")

// listener for storeBtn
storeBtn.addEventListener("click", () => {
   let name = storeTxt.value
   saveDataToFirebase(name)
})

// function for adding items to a grocery store
function addItems(documentId) {
   // gets item name
   let userInput = itemTxt.value

   db.collection("stores")
      .doc(documentId)
      .update({
         items: firebase.firestore.FieldValue.arrayUnion(`${userInput}`),
      })
}

// takes documentID and deletes the store from the database
function deleteStore(documentId) {
   db.collection("stores")
      .doc(documentId)
      .delete()
      .then(function () {
         getAllStores()
      })
      .catch(function (error) {})
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
               <div id="storeItem">
                  <p>${data.name}</p>
                  <button id="deleteBtn" onclick="deleteStore('${doc.id}')">Delete</button>
                  <button id="addItemsBtn" onclick="addItems('${doc.id}')">Add Item</button>
               </div>`
            groceryDiv.insertAdjacentHTML("beforeend", storeItem)
         })
      })
}

// writes to firestore db
function saveDataToFirebase(name) {
   db.collection("stores")
      .add({
         name: name,
      })
      .then(function (docRef) {
         getAllStores()
      })
      .catch(function (error) {
         console.log("error")
      })
}

getAllStores()
