class Dictionory {
    #name
    #words
    
    constructor(name){
        this.#name = name || "noname"
        this.#words  = {}
    }

    get getMainName() {
        return this.#name
    }

    set setMainName(name) {
        return this.#name = name || "noname"
    }

    get allWords() {
        return this.#words
    }

    addNewWord(word , description) {
        const newWord = {
            word: word,
            description: description
        } 
        return newWord
    
    }
    add( word , description ){
        if ( !this.#words[word] ) {
            this.#words[word] = this.addNewWord(word , description)
        }
    
    }
    remove( word ){
        delete this.#words[word]
    
    }
    get ( word ){
        return this.#words[word]
    }

    showAllWords() {
        Object.values(this.#words).forEach((wordItem) => {
            console.log(`${wordItem.word} - ${wordItem.description}`);
        });
    }

}

class HardWordsDictonary extends Dictionory {
    constructor (name) {
        super(name)
    }
    
    addNewWord(word , description) {
        const newWord = {
            word: word,
            description: description,
            isDifficult: true,
        } 
        return newWord
    }
}

const hardWordsDictionary = new HardWordsDictonary("Сложные слова")

hardWordsDictionary.add('дилетант', `Тот, кто занимается наукой или искусством без специальной подготовки, обладая только поверхностными знаниями.`);

hardWordsDictionary.add('неологизм', `Новое слово или выражение, а также новое значение старого слова.`);
hardWordsDictionary.add('квант', 'Неделимая часть какой-либо величиныв физике.');
hardWordsDictionary.remove('дилетант');
hardWordsDictionary.showAllWords();

console.log(hardWordsDictionary.getMainName); // Сложные слова
hardWordsDictionary.setMainName = 'Новый Словарь';
console.log(hardWordsDictionary.getMainName); // Новый Словарь
console.log(hardWordsDictionary.allWords); 

