var taskManager = {
    create: function () {
        array = [];
        manager = {
            create: function (category, title, priority, estimate) {
                this.category = category;
                this.title = title;
                this.priority = priority;
                this.estimate = estimate;
                this.spent = 0;
                this.remaining = 1.5;
                array.push(this);
                return this;
            },

            get: function (value) {
                return array[value];
            },

            getAll: function (active) {
                if (active === true) {
                    for (var i = 0; i < array.length; i++) {
                        if (array[i].estimate === 0)
                        { array.splice(i, 1); }
                    }
                }
                return array;
            },

            find: function (matcher) {
                var arr = [];
                for (var i = 0; i < array.length; i++) {
                    var t = true;
                    var c = true;
                    var lowertitle = array[i].title.toLowerCase();
                    var lowercategory = array[i].category.toLowerCase();
                    for (var j = 0; j < matcher.length; j++) {
                        if (matcher.charAt(j) !== lowercategory.charAt(j))
                        { c = false; }
                        if (matcher.charAt(j) !== lowertitle.charAt(j))
                        { t = false; }
                    }
                    if (t === true || c === true)
                    { arr.push(array[i]); }
                }
                return arr;
            },

            remove : function(index){
                return array.splice(index,1);
            }
        };

        return manager;
    }

};


module.exports = taskManager;