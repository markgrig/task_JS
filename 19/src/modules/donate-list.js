export class DonateList {
    #donates
    #donatesContainer
    #donatesContainerTitle
    #donatesContainerDonates
    
    constructor(donates) {
        this.#donates = donates
        
        this.#donatesContainer = document.createElement('div')
        this.#donatesContainer.className = 'donates-container'

        this.#donatesContainerTitle = document.createElement('h3')
        this.#donatesContainerTitle.className = 'donates-container__title'
        this.#donatesContainerTitle.textContent = "Список донатов"

        this.#donatesContainerDonates = document.createElement('div')
        this.#donatesContainerDonates.className = "donates-container__donates"

    }
    render(updatedDonates = []){
        
        updatedDonates.forEach( ( el ) => {
            const donateItem = document.createElement("div")
            donateItem.className = "donate-item"
            donateItem.innerHTML = ` ${ el.date } <b> ${el.amount} $ </b>`
            this.#donatesContainerDonates.append( donateItem )
        })

        this.#donatesContainer.append( this.#donatesContainerTitle, this.#donatesContainerDonates ) 

        return this.#donatesContainer
    }
    updateDonates(updatedDonates) {
        this.#donatesContainerDonates.remove()
        console.log(updatedDonates , "123");
        this.render(updatedDonates )
    }
}