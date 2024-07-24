document.getElementById('add-task-btn').addEventListener('click', function() {
    const taskInput = document.getElementById('task-input');
    const taskText = taskInput.value;

    if (taskText) {
        addTask(taskText);
        taskInput.value = '';
    } else {
        alert('Please enter a task.');
    }
});

function addTask(taskText) {
    const taskList = document.getElementById('task-list');
    
    const taskItem = document.createElement('li');
    taskItem.className = 'task-item';
    
    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'x';
    deleteButton.addEventListener('click', function() {
        taskList.removeChild(taskItem);
    });

    taskItem.appendChild(taskSpan);
    taskItem.appendChild(deleteButton);
    taskList.appendChild(taskItem);
}
