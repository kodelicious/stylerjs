import allowedProperties from './allowed-properties'
import { StylerPanel } from './StylerPanel'
import helpers from './helpers'

export class StylerJS
{
    /**
     * Construct the class.
     * 
     * @param StylerOptions options
     */
    constructor(options)
    {
        this.options = options
        this.panel = new StylerPanel
        this.classes = {
            hover: 'sjs-element-hover',
            focus: 'sjs-element-focus',
        }
    }

    /**
     * Get the elements based on the options selector.
     * 
     * @return any
     */
    setElements() {
        this.elements = document.querySelectorAll(this.options.selector)
    }

    /**
     * Start running.
     * 
     * @return void
     */
    run() {
        this.setElements()
        this.setEvents()
        // this.gatherData()
    }

    /**
     * Set several events.
     * 
     * @return void
     */
    setEvents() {
        this.setDocumentEvents()
        this.setElementEvents()
    }

    /**
     * Set events on the document node.
     * 
     * @return void
     */
    setDocumentEvents() {
        document.addEventListener('click', () => {
            this.deselectElement()
            this.panel.destroy()
        })
    }

    /**
     * Gather all information about selector elements and corresponding styles.
     * 
     * @return void
     */
    setElementEvents() {
        for (let element of this.elements) {
            element.addEventListener('mouseenter', () => {
                if (! element.classList.contains(this.classes.focus)) {
                    element.classList.add(this.classes.hover)
                }
            })
            element.addEventListener('mouseleave', () => {
                if (element.classList.contains(this.classes.hover)) {
                    helpers.removeClass(element, this.classes.hover)
                }
            })
            element.addEventListener('click', (e) => {
                // make sure document click is not fired
                e.stopPropagation()

                // remove other outlines
                this.deselectElement(element)

                // then visually select the element
                element.classList.remove(this.classes.hover)
                element.classList.add(this.classes.focus)

                // finally destroy and build the style panel
                this.panel.destroy()
                this.panel.build(element)
            })
        }
    }

     /**
     * Deselect all elements.
     * 
     * @param  any elm
     * @return void
     */
    deselectElement(elm) {
        const elements = document.querySelectorAll(`.${this.classes.focus}`)

        if (elements.length) {
            for (let element of elements) {
                if (elm !== element) {
                    helpers.removeClass(element, this.classes.focus)
                }
            }
        }
    }

    /**
     * Gather all information about selector elements and corresponding styles.
     * 
     * @return void
     */
    gatherData() {
        for (let element of this.elements) {
            let styles = window.getComputedStyle(element)
            let elementStyles = {}

            for (let property in styles) {
                // if (this.allowedProperties.indexOf(property) !== -1) {
                //     objStyles[property] = styles.getPropertyValue(property)
                // }
            }

            // this.data.push({
            //     element: element,
            //     styles: elementStyles
            // })
        }
    }
}