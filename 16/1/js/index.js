const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts';
let isLoading = false;
const createNewPost = async () => {
    isLoading = true;
    try {
        const response = await fetch(POSTS_URL, { method: 'POST', })
        if ( !response.ok ) {
            throw new Error(`ошибка пост запроса по url: \n $ ${POSTS_URL}`)
        }
        const posts = await response.json()
        console.log("posts", posts);
    }
    catch(error) {
        console.log(error)
    }
    finally{
    isLoading = false;
    }
};


createNewPost();