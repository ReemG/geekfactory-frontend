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
    var t = {}; /*********************/

    function editTask(task) { /*********************/
        return function() {
            var table = document.getElementById("task-table");
            var cat = document.getElementById("edit-category");
            document.getElementById("edit-category").disabled = false;
            cat.value = table.rows[task.id].cells[0].innerHTML;

            var title = document.getElementById("edit-title");
            document.getElementById("edit-title").disabled = false;
            title.value = table.rows[task.id].cells[1].innerHTML;

            var priority = document.getElementById("edit-priority");
            document.getElementById("edit-priority").disabled = false;
            priority.value = table.rows[task.id].cells[2].innerHTML;

            var estimate = document.getElementById("edit-estimate");
            document.getElementById("edit-estimate").disabled = false;
            estimate.value = table.rows[task.id].cells[3].innerHTML;

            document.getElementById("edit-button").disabled = false;
            rownumber = task.id;
            t = task;

        }
    } /*********************/



    function edit(event) { /*********************/
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

        t.category = cat.value;
        t.title = title.value;
        t.priority = prio.value;
        t.estimate = est.value;
        t.complete();
        table.rows[rownumber].cells[4].innerHTML = t.spent;
        table.rows[rownumber].cells[5].innerHTML = t.remaining;
        if (t.done()) {
            table.rows[rownumber].cells[6].innerHTML = "&#10004";
        }

        cat.value = "";
        cat.disabled = true;
        title.value = "";
        title.disabled = true;
        prio.value = "";
        prio.disabled = true;
        est.value = "";
        est.disabled = true;
    } /*********************/

    function createTaskRow(task) {
        var tr = document.createElement('tr');
        tr.appendChild(createTableCell(task.category));
        tr.appendChild(createTableCell(task.title));
        tr.appendChild(createTableCell(task.priority));
        tr.appendChild(createTableCell(task.estimate));
        task.complete();
        tr.appendChild(createTableCell(task.spent)); //completed
        tr.appendChild(createTableCell(task.remaining));
        tr.appendChild(createTableCell(task.done() && '&#10004'));
        var button = document.createElement("button");
        button.innerText = "Delete";
        button.addEventListener("click", deleteTesk(task));
        tr.appendChild(button);
        var button2 = document.createElement("button"); /*********************/
        button2.innerText = "Edit"; /*********************/
        button2.addEventListener("click", editTask(task)); /*********************/
        tr.appendChild(button2); /*********************/
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