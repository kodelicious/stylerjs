export class StylerControl
{
    /**
     * Construct the class
     * 
     * @param
     */
    constructor()
    {
        this.template = this.getTemplate()
    }

    /**
     * Set element
     * 
     * @param  HTMLElement element
     * @return void
     */
    setElement(element) {
        this.element = element
    }

    /**
     * Set panel
     * 
     * @param  HTMLDivElement panel
     * @return void
     */
    setPanel(panel) {
        this.panel = panel
    }

    /**
     * Get the template for this form control
     * 
     * @return string
     */
    getTemplate() {
        return ''
    }

    /**
     * Set events on elements in the template
     * 
     * @return void
     */
    setEvents() {}

    /**
     * Set events on elements in the template
     * 
     * @return void
     */
    build() {}
}