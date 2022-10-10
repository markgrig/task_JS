const ALBUMS_URL = "https://jsonplaceholder.typicode.com/albums"
const dataContainer = document.querySelector("#data-container")

const toggleLoader = () => {
    const loader = document.querySelector('.loader')
  
    const isHidden = loader.hasAttribute("hidden") 
    if (isHidden) {
        loader.removeAttribute("hidden")
    }
    else {
        loader.setAttribute("hidden", "")
    }
}

const createListElement = (element) => {
    const listElement = document.createElement("li")
    listElement.textContent = `${element.title}`
    dataContainer.append(listElement)
}

const getAlbums = async ( url ) =>{
    try {
        toggleLoader()
        const request = await fetch(url)
       
        if ( !request.ok){
            throw new Error(`Произошла ошибка в получении данных об альбомах...`)
        } 
        else {
            result = await request.json()
            result.forEach(element => { createListElement(element) });
        }
    }
    catch (error) {
        dataContainer.textContent = error
    }
    finally {
        toggleLoader()
    }
}

getAlbums(ALBUMS_URL)