let listElement = document.getElementById("list-of-tasks")
let itemArrayList = []

function addNewItem(newItem){
    let newItemElement = `<div class = "task-item">
    <div class="item">       
        <p class = "title"> <input type="checkbox" class="checkbox" /> ${newItem.title} </p>
        <button class="trash-button">
            <img src="./assets/trash.png" alt="Trash icon">
        </button>
        </div>
        <br>
    </div>`
    itemArrayList.push(newItem)
    listElement.innerHTML += newItemElement;
    inputLine.value = ""
}

listElement.addEventListener('click', (element) => {
    if(element.target.classList.contains("trash-button"))
    element.target.parentElement.remove()
})

listElement.addEventListener('click', (element) => {
    if(e.target.classList.contains("checkbox")){
        if(element.target.parentElement.classList.contains("completed")){
            element.target.parentElement.classList.remove("completed")
        } else {
            element.target.parentElement.classList.add("completed")
        }
    }
})

let inputLine = document.getElementById("myInput")
let addButton = document.querySelector("button")

addButton.addEventListener('click', () =>{
    addNewItem(inputLine.value)
})