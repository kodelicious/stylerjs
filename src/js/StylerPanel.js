import allowedProperties from './allowed-properties'
import { StylerInputText } from './StylerInputText'
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
        alert(123)
        const panel = document.createElement('div')
        panel.setAttribute('id', this.id)

        // set events
        panel.addEventListener('click', (e) => {
            e.stopPropagation()
        })

        // loop through all allowed groups and properties
        for (let group in allowedProperties) {
            const properties = allowedProperties.getPropertyValue(group)
            console.log(properties)
        }
        const inputText = new StylerInputText()
        inputText.setElement(element)
        inputText.setPanel(panel)
        inputText.build()

        const select = new StylerSelect()
        select.setElement(element)
        select.setPanel(panel)
        select.build()

        document.body.appendChild(panel)
    }
}