let listElement = document.getElementById("list-of-tasks")
let itemArrayList = []

let checkboxItem = document.querySelectorAll("input")
let trashButton = document.querySelectorAll(".trash-button")

function addNewItem(newTempItem){
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

listElement.addEventListener('click', (e) => {
    if(e.target.classList.contains("trash-button"))
    e.target.parentElement.remove()
})

listElement.addEventListener('click', (e) => {
    if(e.target.classList.contains("checkbox")){
        if(e.target.classList.contains("completed")){
            console.log("contains")
            e.target.parentElement.classList.remove("completed")
        } else {
            console.log("not contains")
            e.target.parentElement.classList.add("completed")
        }
    }
})

let inputLine = document.getElementById("myInput")

let addButton = document.querySelector("button")


addButton.addEventListener('click', () =>{
    inputValue = inputLine.value
    const tempItem = {
        title : inputValue,
        isDone : false 
    }
    addNewItem(tempItem)
})

