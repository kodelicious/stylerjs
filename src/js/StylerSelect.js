import { StylerControl } from './StylerControl'

export class StylerSelect extends StylerControl
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
        <select name="${this.name}">
            <option value="Arial">Arial</option>
            <option value="Helvetica">Helvetica</option>
        </select>
        `
    }

    /**
     * Set events on elements in the template.
     * 
     * @param  HTMLDivElement rootElement
     * @return void
     */
    setEvents(rootElement) {
        const select = rootElement.querySelector('select')

        select.addEventListener('change', () => {
            this.element.style[select.getAttribute('name')] = select.value
        })
    }
}