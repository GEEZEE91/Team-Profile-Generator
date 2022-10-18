////set up manager class by extending employee  class and adding additonal properties and methods 

const Employee = require ('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber){
        super(name, id, email);
        this.officeNumber = officeNumber;

    }
    getOfficeNumber(){
        return this.officeNumber;
    }
    getRole(){
        return "Manager";
    }
 }

 module.exports = Manager;