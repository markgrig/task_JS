const handleObjects = function( obj , key, action) {
    if ( action === 'get' ) {
        return obj[key]
    }

    else if ( action === 'add' ) {
        obj[key] = ''
        return obj
    }

    else if ( action === 'delete' ) {
        delete obj[key]; 
        return obj
    }

    else {
        return obj 
    }

}

const student = { 
    name: 'Maxim',
    programmingLanguage: 'JavaScript',
}

let result = handleObjects(student, 'programmingLanguage','delete');
console.log('result', student);
result = handleObjects(student, 'programmingLanguage','add');
console.log('result', student);
result = handleObjects(student, 'name','get');
console.log('result', result);
result = handleObjects(student, 'name','123');
console.log('result', result);
    