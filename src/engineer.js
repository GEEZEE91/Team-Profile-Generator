////set up eng class by extending employee  class and adding additonal properties and methods 


const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github){
        super(name, id, email);
        this.github = github;
    }
    getRole(){
        return "Engineer";
    }
    getGithub(){
        return this.github;
    }
}

module.exports = Engineer;