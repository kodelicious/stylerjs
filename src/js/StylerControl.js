export class StylerControl
{
    /**
     * Construct the class.
     * 
     * @param
     */
    constructor() {
        this.element = undefined;
        this.property = undefined;
        this.label = 'My Label';
        this.name = '';
        this.value = '';
        this.attributes = '';
        this.data = [];
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
     * Set property.
     * 
     * @param  object property
     * @return void
     */
    setProperty(property) {
        this.property = property
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
        this.value = this.convertValue(value)
    }

    /**
     * Convert value of the control.
     * This method will be extended.
     * 
     * @param  string value
     * @return string value
     */
    convertValue(value) {
        return value
    }

    /**
     * Convert value of the control.
     * This method will be extended.
     * 
     * @param  string value
     * @return string value
     */
    convertValueforValidUnit(value) {
        if (value && this.property && this.property.unit) {
            value = value.replace(/(cm|mm|in|px|pt|pc|em|ex|ch|rem|vw|vh|vmin|vmax)/g, '')
            switch (this.property.unit) {
                case 'rem':
                    value = value / 16
                break;
            }
        }

        return value
    }

    /**
     * Set unit of the control for the value.
     * 
     * @param  string unit
     * @return void
     */
    setUnit(unit) {
        this.unit = unit
    }

    /**
     * Set all attributes of the control.
     * 
     * @param  object attributes
     * @return void
     */
    setAttributes(attributes) {
        if (Object.keys(attributes).length) {
            for (let attributeKey in attributes) {
                this.attributes += ` ${attributeKey}="${attributes[attributeKey]}"`
            }
        }
    }

    /**
     * Set data of the control.
     * 
     * @param  array data
     * @return void
     */
    setData(data) {
        this.data = data
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
            <div class="sjs-form-label">${this.label}</div>
            <div class="sjs-form-control-wrapper">
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