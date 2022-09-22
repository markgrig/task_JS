const student = {
    stack: [`HTML`] ,
    level: 1 ,
    improveLevel() {
        this.level = this.level + 1
        if ( this.level === 2 ) {this.stack.push("CSS") }
        if ( this.level === 3 ) {this.stack.push("JavaScript") }
        if ( this.level === 4 ) {this.stack.push("React") }
        if ( this.level === 5 ) {this.stack.push("NodeJS") }
        if ( this.level === 5 )  alert(`студент выучил все технолигии`)
        console.log(this);
        return this
    }
}

student
    .improveLevel()
    .improveLevel()
    .improveLevel()
    .improveLevel()
    .improveLevel()