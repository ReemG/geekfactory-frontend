(function() {
    "use strict";

    var form = document.getElementById("new-todo");
    var tasksContainer = document.querySelector('#tasks');
    var taskManager = createTaskManager();
    form && form.addEventListener('submit', addTask);
    taskManager.onChange(update);
    //loadtasks();
    var form2 = document.getElementById("edit-task"); /*********************/
    form2 && form2.addEventListener('submit', edit); /*********************/
    var c = 0; /*********************/

    function addTask(event) {
        event.preventDefault();
        var task = {};
        event.target.querySelectorAll('input:not([type="submit"]').forEach(function(input) {
            task[input.name] = input.value;
            input.value = null;
        });
        c += 1; /*********************/
        taskManager.create(c, task.category, task.title, task.priority, task.estimate); /*********************/
    }


    function update(tasks) {
        while (tasksContainer.hasChildNodes()) {
            tasksContainer.removeChild(tasksContainer.lastChild);
        }

        tasks.forEach(function(task) {
            tasksContainer.appendChild(createTaskRow(task));
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));

    }


    function deleteTesk(task) {
        return function() {
            taskManager.remove(task);
        }
    }
    var rownumber = 0; /*********************/
    var edittask = {}; /*********************/

    function editTask(task) {
        return function() {
            var table = document.getElementById("task-table");
            document.getElementById("edit-task").style.display = "block";

            var cat = document.getElementById("edit-category");
            cat.value = table.rows[task.id].cells[0].innerHTML;

            var title = document.getElementById("edit-title");
            title.value = table.rows[task.id].cells[1].innerHTML;

            var priority = document.getElementById("edit-priority");
            priority.value = table.rows[task.id].cells[2].innerHTML;

            var estimate = document.getElementById("edit-estimate");
            estimate.value = table.rows[task.id].cells[3].innerHTML;

            rownumber = task.id;
            edittask = task;

        }
    }



    function edit(event) {
        event.preventDefault();
        var table = document.getElementById("task-table");

        var cat = document.getElementById("edit-category");
        table.rows[rownumber].cells[0].innerHTML = cat.value;

        var title = document.getElementById("edit-title");
        table.rows[rownumber].cells[1].innerHTML = title.value;

        var prio = document.getElementById("edit-priority");
        table.rows[rownumber].cells[2].innerHTML = prio.value;

        var est = document.getElementById("edit-estimate");
        table.rows[rownumber].cells[3].innerHTML = est.value;

        edittask.category = cat.value;
        edittask.title = title.value;
        edittask.priority = prio.value;
        edittask.estimate = est.value;
        edittask.complete();
        table.rows[rownumber].cells[4].innerHTML = edittask.spent;
        table.rows[rownumber].cells[5].innerHTML = edittask.remaining;
        if (edittask.done()) {
            table.rows[rownumber].cells[6].innerHTML = "&#10004";
        }
        document.getElementById("edit-task").style.display = "none";

    }

    function createTaskRow(task) {
        var tr = document.createElement('tr');
        tr.appendChild(createTableCell(task.category));
        tr.appendChild(createTableCell(task.title));
        tr.appendChild(createTableCell(task.priority));
        tr.appendChild(createTableCell(task.estimate));
        task.complete();
        tr.appendChild(createTableCell(task.spent));
        tr.appendChild(createTableCell(task.remaining));
        tr.appendChild(createTableCell(task.done() && '&#10004'));
        var button = document.createElement("button");
        button.innerText = "Delete";
        button.addEventListener("click", deleteTesk(task));
        tr.appendChild(button);
        var button2 = document.createElement("button");
        button2.innerText = "Edit";
        button2.addEventListener("click", editTask(task));
        tr.appendChild(button2);
        return tr;
    }

    function createTableCell(text) {
        var td = document.createElement('td');
        if (text) {
            var text = document.createTextNode(text);
            td.appendChild(text);
        }
        return td;
    }
    // function storetasks (tasks){
    //     if(typeof scope.localStorage !=='undefined')
    //     {scope.localStorage.setItem('tasks',JSON.stringify(tasks));}
    // }
    // function loadtasks() {
    //     if (typeof window.localStorage !== 'undefined') {
    //         var tasks = JSON.parse(window.localStorage.getItem('tasks'));
    //         tasks && tasks.foreach(function(task) {
    //             taskManager.create(task.category, task.title, task.priority, task.estimate);
    //         })
    //     }
    // }
})();