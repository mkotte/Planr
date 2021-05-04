// Function populating task information goes here.
const createTasks = (data) => {
    for (let i=0; i < data.length; i++){ 
        const column = document.querySelector(`.column-${i}`);
        let taskWrapper = document.createElement('div');
        taskWrapper.setAttribute('class', 'task-wrapper');
        column.appendChild(taskWrapper);

        let taskTitle = document.createElement('h3')
        taskTitle.setAttribute('class', 'task-title')
        taskTitle.textContent = data[i].title;
        taskWrapper.appendChild(taskTitle);
        let taskDescription = document.createElement('p');
        taskDescription.setAttribute('class', 'task-description')
        taskDescription.textContent = data[i].description;
        taskWrapper.appendChild(taskDescription);
    }
}

const grabTaskData = () => {
    fetch("/api/tasks").then(data => data.json()).then(dataObj => createTasks(dataObj))
}


grabTaskData();


// TODO: create drag and drop functionality, first on tasks "then cards, time permitting" 

// TODO: add event listeners (bottom) for button presses (i.e. login, project boards etc)

// fetch api routes for handlebars here
// object card including title and post
