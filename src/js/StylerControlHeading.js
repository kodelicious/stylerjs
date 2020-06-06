export class StylerControlHeading
{
    /**
     * Construct the class.
     * 
     * @param
     */
    constructor() {
        this.label = 'My Group';
    }

    /**
     * Set panel element for injecting the template.
     * 
     * @param  HTMLDivElement panel
     * @return void
     */
    setPanel(panel) {
        this.panel = panel
    }

    /**
     * Set label for the template.
     * 
     * @param  string label
     * @return void
     */
    setLabel(label) {
        this.label = label
    }

    /**
     * Get the template for this form control.
     * 
     * @return string
     */
    getTemplate() {
        return `
        <div class="sjs-form-heading">${this.label}</div>
        `
    }

    /**
     * Set events on elements in the template.
     * 
     * @param  HTMLDivElement rootElement
     * @return void
     */
    setEvents(rootElement) {
        
    }

    /**
     * Set events on elements in the template
     * 
     * @return void
     */
    build() {
        const rootElement = document.createRange().createContextualFragment(this.getTemplate()).querySelector('div')
        this.setEvents(rootElement)

        this.panel.appendChild(rootElement);
    }
}