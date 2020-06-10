import { StylerControl } from './StylerControl'

export class StylerControlSpacing extends StylerControl
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
        <input type="range" name="${this.name}-left" value="${this.value}" class="sjs-form-control"${this.attributes} />
        <input type="range" name="${this.name}-right" value="${this.value}" class="sjs-form-control"${this.attributes} />
        <input type="range" name="${this.name}-top" value="${this.value}" class="sjs-form-control"${this.attributes} />
        <input type="range" name="${this.name}-bottom" value="${this.value}" class="sjs-form-control"${this.attributes} />
        `
    }

    /**
     * Set events on elements in the template.
     * 
     * @param  HTMLDivElement rootElement
     * @return void
     */
    setEvents(rootElement) {
        const inputs = rootElement.querySelectorAll('.sjs-form-control')
        
        for (let i = 0; i < inputs.length; i++) {
            const input = inputs[i]
            input.addEventListener('input', () => {
                this.element.style[input.getAttribute('name')] = input.value + (this.unit || '')
            })
        }
    }
}