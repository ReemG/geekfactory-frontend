var element = document.getElementById("new-todo");
//element.addEventListener('submit',addtask());
var addtask = function () {
    var table = document.getElementById("task-table");
    var task = new Task(document.getElementById("category").value,
        document.getElementById("title").value,
        document.getElementById("priority").value,
        document.getElementById("estimate").value);
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    var cell7 = row.insertCell(6);
    cell1.innerHTML = task.category;
    cell2.innerHTML = task.title;
    cell3.innerHTML = task.priority;
    cell4.innerHTML = task.estimate;
    task.complete();
    cell5.innerHTML = task.spent;
    cell6.innerHTML = task.remaining;
    if (task.done())
    { cell7.innerHTML = "&#10004"; }

}

