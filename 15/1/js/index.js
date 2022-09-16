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

const result = fetch(url)
const getAllUsers = () => {
    toggleLoader()
    
    result
        .then( ( response ) =>{
            if ( !response.ok ) {
                throw "error"
            }
            return response.json()
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

getAllUsers()