var tasks = []

var inputValue = document.getElementById("input-text")
const todoItemList = document.querySelector('.list')

function newTask(){
    if (inputValue.value === '') alert("Your task is empty!")
    else addTask(inputValue.value)
}

function addTask(item){
    const todo = {
        id: Date.now(),
        text: item,
        complete: false 
    }
    tasks.push(todo)
    document.getElementById("input-text").value = ""
    render()
}

todoItemList.addEventListener('click', function(event){
    if (event.target.type === 'checkbox'){
        toogle(event.target.parentElement.getAttribute('id'))
    }

    if (event.target.classList.contains('delete')){
        deleteTask(event.target.parentElement.getAttribute('id'))
    }
})

function toogle(id){
    tasks.forEach(function(item){
        if (item.id == id){
            item.complete = !item.complete
        }
    })

    render()
}

function render(){
    todoItemList.innerHTML = ''
    tasks.forEach(function(item){
        const checked = item.complete ? 'checked' : null
        var li = document.createElement("li")
        li.setAttribute('class', 'item')
        li.setAttribute('id', item.id)
        if (item.complete){
            li.classList.add('checked')
        }
        li.innerHTML = `
            <input type ="checkbox" class='tick' ${checked}>
            <p>${item.text}</p>
            <button class='delete'>X</button>
        `
        todoItemList.append(li)
    })
}

function deleteTask(id){
    tasks = tasks.filter(function(item){
        return item.id != id
    })

    render()
}




