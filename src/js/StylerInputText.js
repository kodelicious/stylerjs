import { StylerControl } from './StylerControl'

export class StylerInputText extends StylerControl
{
    /**
     * Construct the class
     * 
     * @param
     */
    constructor()
    {
        super()
    }

    /**
     * Get the template for this form control
     * 
     * @return string
     */
    getTemplate() {
        return `
        <div><input type="text" name="color" value=""></div>
        `
    }

    /**
     * Set events on elements in the template
     * 
     * @return void
     */
    setEvents() {
        const input = this.panel.querySelector('input')

        input.addEventListener('blur', () => {
            this.element.style[input.getAttribute('name')] = input.value
        })
    }

    /**
     * Set events on elements in the template
     * 
     * @return void
     */
    build() {
        this.panel.innerHTML = this.template
        this.setEvents()
    }
}