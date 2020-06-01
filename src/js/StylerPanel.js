// import allowedProperties from './allowed-properties'
import { StylerInputText } from './StylerInputText'

export class StylerPanel
{
    /**
     * Construct the class
     * 
     * @param StylerOptions options
     */
    constructor(options)
    {
        this.id = 'sjs-panel'
    }

    /**
     * Destroy the StyleJS panel
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
     * Build the StyleJS panel
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

        // set html
        const inputText = new StylerInputText()
        inputText.setElement(element)
        inputText.setPanel(panel)
        inputText.build()

        document.body.appendChild(panel)
    }
}