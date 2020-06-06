import { StylerControl } from './StylerControl'
import Picker from 'vanilla-picker'

export class StylerColorPicker extends StylerControl
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
        <button>Pick Color</button>
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
            parent: rootElement.querySelector('button'),
            alpha: false,
            color: this.value,
            onChange: (color) => {
                this.element.style[this.name] = color.rgbaString;
            },
        })
    }
}