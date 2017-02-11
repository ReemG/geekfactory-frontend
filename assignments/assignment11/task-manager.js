var Task = require('./task')
var createTaskManager = function () {
    tasks = [];
    create = function (category, title, priority, estimate) {
        var task = new Task(category, title, priority, estimate);
        tasks.push(task);
        return task;
    }
    get = function (value) {
        return tasks[value];
    }
    getAll = function (active) {
        if (active === true) {
            for (var i = 0; i < tasks.length; i++) {
                if (tasks[i].estimate === 0)
                { tasks.splice(i, 1); }
            }
        }
        return tasks;
    }
    find = function (matcher) {
        var arr = [];
        for (var i = 0; i < tasks.length; i++) {
            var t = true;
            var c = true;
            var lowertitle = tasks[i].title.toLowerCase();
            var lowercategory = tasks[i].category.toLowerCase();
            for (var j = 0; j < matcher.length; j++) {
                if (matcher.charAt(j) !== lowercategory.charAt(j))
                { c = false; }
                if (matcher.charAt(j) !== lowertitle.charAt(j))
                { t = false; }
            }
            if (t === true || c === true)
            { arr.push(tasks[i]); }
        }
        return arr;
    }

    remove = function (index) {
        if (typeof index !== 'number') {
            for (var i = 0; i < tasks.length; i++) {
                if (tasks[i] === index) {
                    index = i;
                    break;
                }
            }
        }

        if (index >= 0 && index < tasks.length) {
            tasks.splice(index, 1);
        }
    }

    return {
        create: create,
        get: get,
        getAll: getAll,
        find: find,
        remove: remove
    };
}
module.exports.create = createTaskManager;