import { StylerControl } from './StylerControl'

export class StylerInputNumber extends StylerControl
{
    /**
     * Construct the class.
     * 
     * @param
     */
    constructor() {
        super()
    }

    /**
     * Get the template for this form control.
     * 
     * @return string
     */
    getControlTemplate() {
        return `
        <input type="number" name="${this.name}" value="${this.value}"${this.attributes} />
        `
    }

    /**
     * Set events on elements in the template.
     * 
     * @param  HTMLDivElement rootElement
     * @return void
     */
    setEvents(rootElement) {
        const input = rootElement.querySelector('input')
        
        input.addEventListener('change', () => {
            this.element.style[this.name] = input.value + (this.unit || '')
        })
    }
}