// TODO: Declare global variables
// Function populating task information goes here.

const createTasks = (data) => {
    const column = document.querySelector('.column');
    let taskWrapper = document.createElement('div');
    taskWrapper.setAttribute('class', 'task-wrapper');
    column.appendChild(taskWrapper);

    let taskTitle = document.createElement('h3')
    task.setAttribute('class', 'task-title')
    taskTitle.textContent = data.title;
    taskWrapper.appendChild(taskWrapper);
    let taskDescription = document.createElement('p');
    taskDescription.setAttribute('class', 'task-description')
    taskDescription.textContent = data.taskDescription;
    taskWrapper.appendChild(taskDescription);
}






// TODO: create drag and drop functionality, first on tasks "then cards, time permitting" 

// TODO: add event listeners (bottom) for button presses (i.e. login, project boards etc)

// fetch api routes for handlebars here
// object card including title and post
