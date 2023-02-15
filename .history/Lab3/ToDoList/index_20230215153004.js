// let itemArrayList = [
//     {
//         title : "clean house",
//         isDone : false
//     }, 
//     {
//         title : "do homework",
//         isDone : false
//     },
//     {
//         title : "make dinner",
//         isDone : false
//     }
// ]

// itemArrayList.forEach((e) => {
//     let newItem = `<div class = "task-item">
//     <div class="item">       
//         <p> <input type="checkbox" class="checkbox" /> ${e.title}</p>
//         <button class="trash-button">
//             <img src="./assets/trash.png" alt="Trash icon">
//         </button>
//         </div>
//         <br>
//     </div>`
//     listElement.innerHTML += newItem;

// })

let listElement = document.getElementById("list-of-tasks")
let itemArrayList = []

function addNewItenm(newTempItem){
    let newItemElement = `<div class = "task-item">
    <div class="item">       
        <p> <input type="checkbox" class="checkbox" /> ${newTempItem.title} </p>
        <button class="trash-button">
            <img src="./assets/trash.png" alt="Trash icon">
        </button>
        </div>
        <br>
    </div>`
    itemArrayList.push(newTempItem)
    listElement.innerHTML += newItemElement;
    console.log(itemArrayList)
    inputLine.value = ""
}

let checkboxItem = document.querySelectorAll("input[class=checkbox]")

for(let i = 0; i < checkboxItem.length; i++){
    checkboxItem[i].addEventListener('change', ()=>{
        itemArrayList[i].isDone = !itemArrayList[i].isDone;
        if(itemArrayList[i].isDone){
            console.log(itemArrayList[i].title , "done")
        }
    })
}

let inputLine = document.getElementById("myInput")
// console.log(inputLine.value)

let addButton = document.querySelector("button")

// console.log(addButton)

addButton.addEventListener('click', () =>{
    inputValue = inputLine.value
    const tempItem = {
        title : inputValue,
        isDone : false 
    }
    addNewItenm(tempItem)
    // console.log(tempItem)
})


