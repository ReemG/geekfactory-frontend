var Task = function(id, category, title, priority, estimate) {
    this.id = id;
    this.category = category;
    this.title = title;
    this.priority = priority;
    this.estimate = estimate;
    this.spent = 0;
    this.remaining = 1.5;
}
Task.prototype.track = function(value) {
    if (typeof value === 'number' && value >= 0) {
        this.spent = value;
        if (this.estimate - value > 0) { this.remaining = this.estimate - value; } else { this.remaining = 0; }
    } else if (value < 0 || typeof value !== 'number') {
        this.spent = 0;
        this.remaining = 1.5;
    }

}
Task.prototype.done = function() {
    if (this.remaining === 0) { return true; } else { return false; }
    // can only be --> return this.remaining === 0
}
Task.prototype.complete = function() {
    this.remaining = 0;
    this.track(1.5);
    this.done();
}