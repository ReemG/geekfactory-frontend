var Employee = function (name , department){
    this.name = name;
    this.department = department;
    this.role = "employee";
}
Employee.prototype.getInfo = function(){
    return "My name is " + this.name + ". I am " + this.role + " in the "+ this.department + " department.";
}

var Manager = function(name,department,reports){
    this.name = name; 
    this.department = department;
    this.role = "manager";
    this.reports = reports;
}
Manager.prototype.getInfo = function(){
    return Employee.prototype.getInfo.call(this)+ " I manage " + this.reports + " employees." ; 
}
Manager.prototype.__proto__ = Employee.prototype;
module.exports = {
    Employee :   Employee,
    Manager : Manager ,
}