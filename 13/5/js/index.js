class Develeper {
    constructor( fullName, age, position) {
        this.fullName = fullName
        this.age = age
        this.position = position
        this.technologies = []
    }

    code() {}
    learnNewTechnologies( technology) {
        this.technologies.push(technology)
    }
}

class JuniorDeveloper extends Develeper {
    constructor( fullName, name ) {
        super(fullName, name )
        this.position = "Junior" 
        this.technologies = ['HTML', 'CSS', 'JavaScript']
    }

    code() {
        console.log("Junior разработчик пишет код...");
    }
    

}

class MiddleDeveloper extends Develeper {
    constructor( fullName, name ) {
        super(fullName, name )
        this.position = "Middle" 
        this.technologies = ['HTML', 'CSS', 'JavaScript', "React"]
    }

    code() {
        console.log("Middle разработчик пишет код...");
    }
    

}


class SeniorDeveloper extends Develeper {
    constructor( fullName, name ) {
        super(fullName, name )
        this.position = "Senior" 
        this.technologies = ['HTML', 'CSS', 'JavaScript', "React", "Node.js"]
    }

    code() {
        console.log("Senior разработчик пишет код...");
    }
    

}

const juniorDeveloper = new JuniorDeveloper('Анастасия', 20)
const middleDeveloper = new MiddleDeveloper('Игорь', 25)
const seniorDeveloper = new SeniorDeveloper('Максим', 30)
juniorDeveloper.code(); // Junior разработчик пишет код...
middleDeveloper.code(); // Middle разработчик пишет код…
seniorDeveloper.code(); // Senior разработчик пишет код...
console.log(juniorDeveloper.fullName, juniorDeveloper.age,
juniorDeveloper.position); // 'Анастасия', 20, 'Junior'
console.log(middleDeveloper.fullName, middleDeveloper.age,
middleDeveloper.position); // 'Игорь', 25, 'Middle'
console.log(seniorDeveloper.fullName, seniorDeveloper.age,
seniorDeveloper.position); // 'Максим', 30, 'Senior'
