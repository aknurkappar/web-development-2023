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

let listElement = document.getElementsByTagName("list")
console.log(listElement)
console.log(item)

itemArrayList.forEach((e) => {
    let newItem = `<li>
    <div class="item">       
        <p> <input type="checkbox" /> ${e.title}</p>
        <button class="trash-button">
            <img src="./assets/trash.png" alt="Trash icon">
        </button>
    </div>
    <br>
</li>`

})

let inputLine = document.getElementById(myInput)

