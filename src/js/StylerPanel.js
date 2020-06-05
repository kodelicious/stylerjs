import allowedProperties from './allowed-properties'
import { StylerInputText } from './StylerInputText'
import { StylerInputNumber } from './StylerInputNumber'
import { StylerInputRange } from './StylerInputRange'
import { StylerSelect } from './StylerSelect'

export class StylerPanel
{
    /**
     * Construct the class.
     * 
     * @param StylerOptions options
     */
    constructor(options) {
        this.id = 'sjs-panel'
    }

    /**
     * Destroy the StyleJS panel.
     * 
     * @return void
     */
    destroy() {
        const panel = document.querySelector('#'+this.id)
        if (panel) {
            panel.parentNode.removeChild(panel)
        }
    }

    /**
     * Build the StyleJS panel.
     * 
     * @param  HTMLElement element
     * @return void
     */
    build(element) {
        const panel = document.createElement('div')
        panel.setAttribute('id', this.id)

        // set events
        panel.addEventListener('click', (e) => {
            e.stopPropagation()
        })

        // loop through all allowed groups and properties
        for (let groupKey in allowedProperties) {
            const properties = allowedProperties[groupKey]
            for (let propertyKey in properties) {
                const property = properties[propertyKey]
                let control

                switch (property.type) {
                    case 'input-text': 
                        control = new StylerInputText
                    break;
                    case 'input-number': 
                        control = new StylerInputNumber
                    break;
                    case 'input-range': 
                        control = new StylerInputRange
                    break;
                    case 'select': 
                        control = new StylerSelect
                    break;
                }

                if (control) {
                    // get value of the element's property
                    const style = window.getComputedStyle(element, null)
                    const value = style[property.javascript] || property.default
console.log(value);

                    control.setElement(element)
                    control.setLabel(property.label)
                    control.setName(propertyKey)
                    control.setValue(value || '')
                    control.setUnit(property.unit || '')
                    control.setAttributes(property.attributes || {})
                    control.setData(property.data ? property.data.basic : [])
                    control.setPanel(panel)
                    control.build()
                }
            }
        }

        document.body.appendChild(panel)
    }
}