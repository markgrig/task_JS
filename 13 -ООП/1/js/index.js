class Student {
    constructor(name, age, technologies, statusStudent) {
        this.name = name 
        this.age = age 
        this.technologies =  technologies || []
        this.statusStudent = statusStudent || "not status"
    }
    
    set setTechnologies(technologies) {
        this.technologies = [
            ...this.technologies,
            ...technologies,
        ]
    }

    set setNewStatus(newStatus) {
        this.statusStudent = newStatus
    }
}

const student = new Student( 'Mark', 21 )
student.setTechnologies = [ "HTML", "CSS", "JS", "Webpack"]
student.setNewStatus = "Junior"
console.log(student);