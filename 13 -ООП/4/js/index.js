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

class HardWordsDictonary extends Dictionory {
    constructor (name) {
        super(name)
    }
    add(word , description ){
        if ( !this.words[word] ) {
            this.words[word] = {
                word: word,
                description: description,
                isDifficult: true,
            }  
        }
    }
}

const hardWordsDictionary = new HardWordsDictonary("Сложные слова")

hardWordsDictionary.add('дилетант', `Тот, кто занимается наукой или искусством без специальной подготовки, обладая только поверхностными знаниями.`);

hardWordsDictionary.add('неологизм', `Новое слово или выражение, а также новое значение старого слова.`);
hardWordsDictionary.add('квант', 'Неделимая часть какой-либо величиныв физике.');
hardWordsDictionary.remove('дилетант');
hardWordsDictionary.showAllWords();
