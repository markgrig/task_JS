const url = "https://jsonplaceholder.typicode.com/photos"

const createPhotoElement = ( urlPhoto ) => {
    const dataContaner = document.querySelector("#data-container")
    dataContaner.innerHTML = `
    <li class="photo-item">
        <img class="photo-item__image" src="${urlPhoto}">
    <h3 class="photo-item__title"> accusamus beatae ad facilis cum similique qui sunt </h3>
    </li>
    `
}

const toggleLoader = (teg) => {
    const loader = document.querySelector('.loader')
  
    const isHidden = loader.hasAttribute("hidden") 
    if (isHidden) {
        loader.removeAttribute("hidden")
    }
    else {
        loader.setAttribute("hidden", "")
    }
}

const getFastestLoadedPhoto = ( arrayIds ) => {
    toggleLoader()
    const reqestArray =  arrayIds.map( (element) => fetch(`${url}/${element}`) )
    Promise.race(reqestArray)
        .then( ( responses ) =>{
            return responses.json()
        })
        .then( ( response ) => {
           createPhotoElement(response.thumbnailUrl            )
        })
        .catch( ( error ) =>{
            console.log(error);
        })
        .finally( ()=>{ 
            toggleLoader()
        })
}

getFastestLoadedPhoto([60])