var Task = function (category, title, priority, estimate) {
    this.category = category;
    this.title = title;
    this.priority = priority;
    this.estimate = estimate;
    this.spent = 0;
    this.remaining = 1.5;
}
Task.prototype.track = function (value) {
    if (value >= 0) {
        this.spent = value;
        this.remaining = this.estimate - value;
    }

    else if (value < 0 || typeof value !== 'number' ) {
        this.spent = 0;
        this.remaining = 1.5;
    }
    
}
Task.prototype.done = function () {
    if (this.remaining === 0)
    { return true; }
    else { return false; }
}
Task.prototype.complete = function(){
    this.remaining = 0;
    this.track(1.5);
    this.done();
}


module.exports = Task;

