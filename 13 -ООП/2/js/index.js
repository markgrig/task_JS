class Person {
    constructor( name, age) {
        this.name = name || "noname"
        this.age = age || 0
    }
    
    compareAge( person ) {
        this.age > person.age ?
        alert(`${this.name} старше, чем ${person.name}`)
        : alert(`${this.name} младше, чем ${person.name}`)
    }
}

const Mark = new Person("Mark", 21)
const Sofa = new Person("Sofa", 18)
Sofa.compareAge(Mark)
