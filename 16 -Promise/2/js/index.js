const TODOS_URL = 'https://jsonplaceholder.typicode.com/todos';
// const getTodosByIds = (ids) => {
//     const requests = ids.map((id) => fetch(`${TODOS_URL}/${id}`));
//     Promise.all(requests)
//         .then((responses) => {
//             const dataResults = responses.map((data) => data.json());
//             return Promise.all(dataResults)
//         })
//         .then((allTasks) => {
//             console.log(allTasks);
//         })
//         .catch((error) => {
//             console.log(error);
//         })
// }

// const requests = ids.map((id) => fetch(`${TODOS_URL}/${id}`));


const getTodosByIds = async (ids) => {
    try {
        const promises = ids.map((id) => fetch(`${TODOS_URL}/${id}`));
        const requests = await Promise.all(promises)
        requests.forEach(element => {
            if ( !element.ok ){
                throw new Error(`ошибка пост запроса по url`)
            }
        })
        const results = await Promise.all(  requests.map( ( el ) =>  el.json() )) 
        console.log(results);
    
    }
    catch( error ) {
        console.log(error);
    }
}

getTodosByIds([43, 21, 55, 100, 10]);