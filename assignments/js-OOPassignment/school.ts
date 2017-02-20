export class Person {
    constructor(public name: string) { }
    getRole() { }
    getInfo() {
        return "My name is " + this.name + ". I am a " + this.getRole() + ".";
    }
} 
export class Student extends Person  {
    constructor(public name:string){
        super(name);
    }
    getRole(){return 'Student';}
}
export class Staff extends Person  {
    constructor(public name:string){
        super(name);
    }
    getRole(){return 'Staff';}
}
export class Teacher extends Staff  {
    constructor(public name:string ,public subject:string){
        super(name);
    }
    getInfo(){
        return super.getInfo() + " I teach "+this.subject+".";
    }
}


