const item =
    `<li>
    <div class="item">       
        <p> <input type="checkbox" /> Task 1</p>
        <button class="trash-button">
            <img src="./assets/trash.png" alt="Trash icon">
        </button>
    </div>
    <br>
</li>`

let itemArrayList = [
    {
        title : "clean house",
        isDone : false
    }, 
    {
        title : "do homework",
        isDone : false
    },
    {
        title : "make dinner",
        isDone : false
    }
]

let listElement = document.getElementById("list-of-tasks")
console.log(listElement)
console.log(item)

let checkboxItem = document.getElementsByClassName("checkbox")

itemArrayList.forEach((e) => {
    let newItem = `<div class = "task-item">
    <div class="item">       
        <p> <input type="checkbox" class="checkbox" /> ${e.title}</p>
        <button class="trash-button">
            <img src="./assets/trash.png" alt="Trash icon">
        </button>
        </div>
        <br>
    </div>`
    console.log(newItem)
    listElement.innerHTML += newItem;

})

let inputLine = document.getElementById(myInput)

