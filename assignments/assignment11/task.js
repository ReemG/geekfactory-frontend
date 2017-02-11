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
        if (this.estimate - value > 0)
        { this.remaining = this.estimate - value; }
        else { this.remaining = 0; }
    }

    else if (value < 0 || typeof value !== 'number') {
        this.spent = 0;
        this.remaining = 1.5;
    }

}
Task.prototype.done = function () {
    return this.remaining === 0
}
Task.prototype.complete = function () {
    this.remaining = 0;
    this.track(1.5);
    this.done();
}


module.exports = Task;

