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
     * @return string html
     */
    getControlTemplate() {
        let html = `
        <select name="${this.name}" class="sjs-form-control"${this.attributes}>
        `

        for (let i = 0; i < this.data.length; i++) {
            const value = this.data[i]
            const selected = this.value === value ? ' selected' : ''
            html += `
            <option value="${value}"${selected}>${value}</option>
            `
        }

        html += `
        </select>
        `

        return html
    }

    /**
     * Set events on elements in the template.
     * 
     * @param  HTMLDivElement rootElement
     * @return void
     */
    setEvents(rootElement) {
        const select = rootElement.querySelector('.sjs-form-control')

        select.addEventListener('change', () => {
            this.element.style[this.name] = select.value
        })
    }
}