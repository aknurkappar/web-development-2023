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
    listElement.innerHTML += newItem;

})

let checkboxItem = document.querySelectorAll("input[class=checkbox]")

for(let i = 0; i < checkboxItem.length; i++){
    checkboxItem[i].addEventListener('change', ()=>{
        itemArrayList[i].isDone = !itemArrayList[i].isDone;
    })
}

let inputLine = document.getElementById("myInput")
console.log(inputLine.value)

let addButton = document.querySelectorALL("button")

console.log(addButton)


