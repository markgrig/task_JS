//import { JSBlock } from './js-block'
//import { TimerBlock } from './timer-block'
import { DonateForm } from './donate-form'
import { DonateList } from './donate-list'


export class App {
    #donateForm
    #donateList
    constructor( arrayDonates, totalAmount ) {
        this.state = {
            donates: arrayDonates || [],
            totalAmount: totalAmount || 0
        }
      
        this.#donateForm = new DonateForm( this.state.totalAmount , this.createNewDonate.bind(this) )
        this.#donateList = new DonateList( this.state.donates )

    }
    run() {

        const donateFormElement = this.#donateForm.render()
        const donateListElement = this.#donateList.render()
        document.body.append( donateFormElement, donateListElement   )
        
    }
    createNewDonate(newDonate) {
        this.state.donates.push(newDonate)
        this.state.totalAmount +=  Number( newDonate.amount)
        this.#donateList.updateDonates( this.state.donates )
        this.#donateForm.updateTotalAmount(this.state.totalAmount)
        console.log(this.state.donates);
        console.log(this.state.totalAmount);
    }
}


