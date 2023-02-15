let listElement = document.getElementById("list-of-tasks")
let inputLine = document.getElementById("myInput")
let addButton = document.querySelector("button")
let itemArrayList = []

function addNewItem(thisInputValue){
    let newItemElement = `<div class = "task-item">
    <div class="item">       
        <p class = "title"> <input type="checkbox" class="checkbox" /> ${thisInputValue} </p>
        <button class="trash-button">
            <img src="./assets/trash.png" alt="Trash icon">
        </button>
        </div>
        <br>
    </div>`
    itemArrayList.push(thisInputValue)
    listElement.innerHTML += newItemElement;
    inputLine.value = ""
}

listElement.addEventListener('click', (element) => {
    if(element.target.classList.contains("trash-button"))
    element.target.parentElement.remove()
})

listElement.addEventListener('click', (element) => {
    if(element.target.classList.contains("checkbox")){
        if(element.target.parentElement.classList.contains("completed"))
            element.target.parentElement.classList.remove("completed")
        else
            element.target.parentElement.classList.add("completed")
    }
})


addButton.addEventListener('click', () =>{
    inputValue = inputLine.value
    addNewItem(inputValue)
})