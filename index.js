const h1 = document.querySelector('h1')
const h2 = document.querySelector('h2')


// Always start index.js with DOMContentLoaded
document.addEventListener("DOMContentLoaded", () => {
    document
        .getElementById('create-task-form')
        .addEventListener("submit", handleFormSubmit)
})

const handleFormSubmit = (e) => {
    e.preventDefault()
    // console.log(e.target.value)
    console.log(e)
    const task = e.target[0].value
    console.log(task)
    displayTask(task)
}

const displayTask = (task) => {
    const newTaskLi = document.createElement('li')
    const taskUl = document.getElementById('tasks')
    taskUl.append(newTaskLi) 
    newTaskLi.innerText = `${task}`

}