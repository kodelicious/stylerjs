import allowedProperties from './allowed-properties'
import { StylerColorPicker } from './StylerColorPicker'
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
                    case 'color-picker': 
                        control = new StylerColorPicker
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
                    const value = this.propertyValue(element, propertyKey, property)
                    console.log(propertyKey+': '+value);
                    
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

    /**
     * Get the set value of the passed property.
     * 
     * @param  HTMLElement element
     * @param  string propertyKey
     * @param  object property
     * @return any value
     */
    propertyValue(element, propertyKey, property) {
        // first check if style is set by user
        let value = element.style[propertyKey] || undefined

        // otherwise check the computed style
        if (! value) {
            const style = window.getComputedStyle(element, null)
            value = style[property.javascript] || property.default
        }

        // check the stylesheets???
        //.....

        // strip the unit when present
        if (value && property.unit) {
            value = value.replace(property.unit, '')
        }

        return value
    }

    /**
     * Get the set style.
     * 
     * @param  HTMLElement element
     * @param  string property
     * @return void
     */
    style(element, property) {
        const proto = Element.prototype;
        const slice = Function.call.bind(Array.prototype.slice);
        const matches = Function.call.bind(proto.matchesSelector || 
                        proto.mozMatchesSelector || proto.webkitMatchesSelector ||
                        proto.msMatchesSelector || proto.oMatchesSelector);

        // returns true if a DOM Element matches a cssRule
        const elementMatchCSSRule = function(element, cssRule) {
            return matches(element, cssRule.selectorText);
        };

        // returns true if a property is defined in a cssRule
        const propertyInCSSRule = function(prop, cssRule) {
            return prop in cssRule.style && cssRule.style[prop] !== "";
        };

        // here we get the cssRules across all the stylesheets in one array
        const cssRules = slice(document.styleSheets).reduce(function(rules, styleSheet) {
            return rules.concat(slice(styleSheet.cssRules));
        }, []);

        // get only the css rules that matches that element
        const elementRules = cssRules.filter(elementMatchCSSRule.bind(null, element));

        // check if the property "width" is in one of those rules
        const hasProperty = elementRules.some(propertyInCSSRule.bind(null, property));

console.log(hasProperty)
    }
}