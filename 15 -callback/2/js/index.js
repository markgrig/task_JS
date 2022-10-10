const dataContaner = document.querySelector("#data-container")
const url = "https://jsonplaceholder.typicode.com/users"

const createToolElement = ( name ) => {
    const mainElement = document.createElement("div")
    const anchorElement = document.createElement("a")
    anchorElement.href = "#"
    anchorElement.textContent = name
    mainElement.append(anchorElement)
    return mainElement
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





const getUsersByIds = ( arrayIds ) => {
    toggleLoader()
    const reqestArray =  arrayIds.map( (element) => fetch(`${url}/${element}`) )
    Promise.all(reqestArray)
        .then( ( responses ) =>{
            responses =  responses.map( (element) => element.json() )
            return Promise.all( responses )
        })
        .then( ( response ) => {
            response.forEach(element => {
                const HtmlElement = createToolElement(element.name)
                dataContaner.append(HtmlElement)
            });
        })
        .catch( ( error ) =>{
            console.log(error);
        })
        .finally( ()=>{ 
            toggleLoader()
        })
}

getUsersByIds([5, 6, 2, 1])