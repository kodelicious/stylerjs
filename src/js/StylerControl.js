export class StylerControl
{
    /**
     * Construct the class.
     * 
     * @param
     */
    constructor() {
        this.label = 'My Label';
        this.name = '';
        this.value = '';
    }

    /**
     * Set element.
     * 
     * @param  HTMLElement element
     * @return void
     */
    setElement(element) {
        this.element = element
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
     * Set name of the control.
     * 
     * @param  string name
     * @return void
     */
    setName(name) {
        this.name = name
    }

    /**
     * Set value of the control.
     * 
     * @param  string value
     * @return void
     */
    setValue(value) {
        this.value = value
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
     * Get the whole template for this form control.
     * 
     * @return string
     */
    getTemplate() {
        return `
        <div class="sjs-form-group">
            <div class="sjs-form-label">
                ${this.label}
            </div>
            <div class="sjs-form-control">
                ${this.getControlTemplate()}
            </div>
        </div>
        `
    }

    /**
     * Get the template for this form control.
     * 
     * @return void
     */
    getControlTemplate() {}

    /**
     * Set events on elements in the template.
     * 
     * @param  HTMLDivElement rootElement
     * @return void
     */
    setEvents(rootElement) {}

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