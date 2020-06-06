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
        <div class="sjs-form-control sjs-form-control-color-picker">
            <div class="sjs-form-control-group">
                <div class="sjs-form-control-prepend" style="background-colorx: #${this.value}"></div>
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
            onChange: (color) => {
                this.element.style[this.name] = color.rgbaString
                rootElement.querySelector('.sjs-form-control-text').innerHTML = '#'+color.rgbaString
            },
        })
    }
}