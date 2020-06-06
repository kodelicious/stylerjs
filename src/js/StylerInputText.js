import { StylerControl } from './StylerControl'

export class StylerInputText extends StylerControl
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
        <input type="text" name="${this.name}" value="${this.value}" class="sjs-form-control"${this.attributes} />
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

        input.addEventListener('blur', () => {
            this.element.style[this.name] = input.value
        })
    }
}