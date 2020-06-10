import { StylerControl } from './StylerControl'

export class StylerControlRange extends StylerControl
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
     * Convert value of the control.
     * 
     * @param  string value
     * @return string value
     */
    convertValue(value) {
        return this.convertValueforValidUnit(value)
    }

    /**
     * Get the template for this form control.
     * 
     * @return string
     */
    getControlTemplate() {
        return `
        <input type="range" name="${this.name}" value="${this.value}" class="sjs-form-control"${this.attributes} />
        `
    }

    /**
     * Set events on elements in the template.
     * 
     * @param  HTMLDivElement rootElement
     * @return void
     */
    setEvents(rootElement) {
        const input = rootElement.querySelector('.sjs-form-control')
        
        input.addEventListener('input', () => {
            this.element.style[this.name] = input.value + (this.unit || '')
        })
    }
}