import { StylerControl } from './StylerControl'
import Picker from 'vanilla-picker'

export class StylerControlColorPicker extends StylerControl
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
        return value
        return this.convertRGBAToHexA(value)
    }

    /**
     * Convert RGBA to HEXA.
     * 
     * @param  string value
     * @return string
     */
    convertRGBAToHexA(value) {
        const rgb = value.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i)
        return  (rgb && rgb.length === 4) ? "#" +
                ("0" + parseInt(rgb[1],10).toString(16)).slice(-2) +
                ("0" + parseInt(rgb[2],10).toString(16)).slice(-2) +
                ("0" + parseInt(rgb[3],10).toString(16)).slice(-2) : ''
    }

    /**
     * Get the template for this form control.
     * 
     * @return string
     */
    getControlTemplate() {
        return `
        <div class="sjs-form-control sjs-form-control-color-picker">
            <div class="sjs-form-control-group">
                <div class="sjs-form-control-prepend" style="background-color: ${this.value}"></div>
                <div class="sjs-form-control-text">${this.value}</div>
            </div>
        </div>
        `
    }

    /**
     * Set events on elements in the template.
     * 
     * @param  HTMLDivElement rootElement
     * @return void
     */
    setEvents(rootElement) {
        new Picker({
            parent: rootElement.querySelector('.sjs-form-control'),
            alpha: false,
            color: this.value,
            popup: 'left',
            onChange: (color) => {
                const hex = color.hex.substr(0, 7)
                this.element.style[this.name] = hex
                rootElement.querySelector('.sjs-form-control-text').innerHTML = hex
            },
        })
    }
}