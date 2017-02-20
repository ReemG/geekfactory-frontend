export class Task {
    constructor(public id: number,
                public category: string,
                public title: string,
                public priority: number,
                public estimate: number,
                public spent?: number,
                public remaining?: number) {
                this.spent = this.spent || 0;
                this.remaining = this.remaining || this.estimate;
    }
    track(hours: number) {
        if (typeof hours === 'number' && hours >= 0) {
            this.spent += hours;
            this.remaining = Math.max(this.remaining - hours, 0)

        }
    }
    done() {
        return this.remaining === 0
    }
    complete() {
        this.remaining = 0;
    }
}