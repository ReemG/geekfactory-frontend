var Task = function(id, category, title, priority, estimate) {
    this.id = id;
    this.category = category;
    this.title = title;
    this.priority = priority;
    this.estimate = estimate;
    this.spent = 0;
    this.remaining = estimate;
}
Task.prototype.track = function(hours) {
    if (typeof value === 'number' && value >= 0) {
        this.spent += hours;
        if (this.estimate - value > 0) { this.remaining = Math.max(this.remaing - hours, 0) }
    }
}
Task.prototype.done = function() {
    return this.remaining === 0;
}
Task.prototype.complete = function() {
    this.remaining = 0;
}