class Dictionory {
    constructor(name){
        this.name = name
        this.words  = {}
    }
    add(word , description ){
        if ( !this.words[word] ) {
            this.words[word] = {
                word: word,
                description: description
            }  
        }
    }
    remove( word ){
        delete this.words[word]
    }
    get( word ){
        return this.words[word]
    }
    showAllWords() {
        Object.values(this.words).forEach((wordItem) => {
            console.log(`${wordItem.word} - ${wordItem.description}`);
        });
    }

}

const Dict = new Dictionory('Толковый словарь')
Dict.add( "js", 'язык программирования')
Dict.add( "vue", 'фреймворк')
console.log(Dict)

Dict.remove("vue")
Dict.showAllWords()
console.log(Dict)

console.log(Dict.get("js"))

Dict.add( "vue", 'фреймворк')
Dict.showAllWords()