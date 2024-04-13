function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");
    
    if (taskInput.value.trim() !== "") {
        var li = document.createElement("li");
        li.innerHTML = taskInput.value.trim() + ' <button class="delete-btn" onclick="removeTask(this)">Delete</button>';
        taskList.appendChild(li);
        taskInput.value = "";
    } else {
        alert("Please enter a task!");
    }
}

function removeTask(button) {
    button.parentNode.remove();
}