var input = document.getElementById("main__todo-input") //input
var addBtn = document.getElementById("main__todo-btn") //add button
var list = document.getElementById("main__tasks-list") // html ul

//on click add task
addBtn.onclick = addTask

//add task
function addTask() {
    var inputValue = input.value
    if(inputValue != ""){
        addDom(inputValue)
    }else{
        alert("Please enter a task to add")
        input.classList.add("main__todo-empty-input")
    }
}


// add to dom
function addDom(value) {
    var li = document.createElement("li")
    li.innerHTML = value
    li.className = "main__tasks-item"
    var button = document.createElement("button")
    button.className = "main__tasks-btn"
    button.innerText = "X"
    button.onclick = crossDom
    li.appendChild(button)
    list.appendChild(li)
    document.getElementById("main__todo-input").value = null;
}

//cross out from dom
function crossDom(doneVal) {
    var done = doneVal.currentTarget.parentNode
    done.style.textDecoration ="line-through"
}

function showDate() {
    var weekday = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][new Date().getDay()]    
    var d = new Date();
    var year = d.getFullYear()
    var month = d.getMonth() 
    var day = d.getDate()
    var date = weekday +" "+ day + '/ ' + (month + 1) + '/ ' + year;
    document.getElementById("main__todo-date").innerHTML = date
}
showDate()