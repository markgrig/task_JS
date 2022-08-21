const showSuccessMessage = message => console.log(message);
const showErrorMessage = message => console.error(message);
const checkTextOnErrorSymbol = function(text , errorSymbol, successCallback , errorCallback ) {
    for ( let i = 0; i < text.length - 1; i++  ) {
        if ( text[i] === errorSymbol ) {
            errorCallback(`Найден запрещенный символ "${errorSymbol}" под индексом ${i}.`)
        }
    }
    
    if ( !text.includes(errorSymbol) ) {
        successCallback("В данном тексте нет запрещенных символов")
    }
     
}

const text = 'Привет! Как дела! Давно мы с тобой не виделись.';
checkTextOnErrorSymbol(text, 'а', showSuccessMessage, showErrorMessage);
checkTextOnErrorSymbol(text, '2', showSuccessMessage, showErrorMessage);