export default {
    'Layout': {
        'display': {
            label: 'Display',
            javascript: 'display',
            type: 'select',
            data: {
                basic: [
                    'inline',
                    'block',
                    'flex',
                    'inline-block',
                    'inline-flex',
                    'none'
                ],
                advanced: [
                    'inline-table',
                    'list-item',
                    'run-in',
                    'table',
                    'table-caption',
                    'table-column-group',
                    'table-header-group',
                    'table-footer-group',
                    'table-row-group',
                    'table-cell',
                    'table-column',
                    'table-row'
                ],
            },
            default: 'flex',
            version: 'css1'
        },
        'padding': {
            label: 'Padding',
            javascript: 'padding',
            type: 'input-spacing',
            unit: 'rem',
            default: 0,
            attributes: {
                min: 0,
                max: 10,
                step: 0.125,
            },
            version: 'css1'
        },
        'margin': {
            label: 'Margin',
            javascript: 'margin',
            type: 'input-spacing',
            unit: 'rem',
            default: 0,
            attributes: {
                min: 0,
                max: 10,
                step: 0.125,
            },
            version: 'css1'
        },
        // 'width': {
        //     label: 'Width',
        //     javascript: 'width',
        //     type: 'input-number',
        //     unit: 'rem',
        //     default: 0,
        //     attributes: {
        //         min: 0,
        //         step: 0.125,
        //     },
        //     version: 'css1'
        // },
        // 'height': {
        //     label: 'Height',
        //     javascript: 'height',
        //     type: 'input-number',
        //     unit: 'rem',
        //     default: 0,
        //     attributes: {
        //         min: 0,
        //         step: 0.125,
        //     },
        //     version: 'css1'
        // },
    },

    'Typography': {
        'color': {
            label: 'Color',
            javascript: 'color',
            type: 'color-picker',
            default: '#000000',
            version: 'css1'
        },
        'font-size': {
            label: 'Font size',
            javascript: 'fontSize',
            type: 'input-range',
            unit: 'rem',
            attributes: {
                min: 0,
                max: 10,
                step: 0.125,
            },
            version: 'css1'
        },
        'font-style': {
            label: 'Font style',
            javascript: 'fontStyle',
            type: 'select',
            data: {
                basic: [
                    'normal',
                    'italic',
                    'oblique',
                    'initial',
                    'inherit',
                ],
            },
            default: 'normal',
            version: 'css1'
        },
        'text-align': {
            label: 'Text align',
            javascript: 'textAlign',
            type: 'select',
            data: {
                basic: [
                    'left',
                    'right',
                    'center',
                    'justify',
                    'initial',
                    'inherit',
                ],
            },
            default: 'left',
            version: 'css1'
        },
    },
}

/*
layout
------
display
padding
margin
width
min-width (advanced)
max-width (advanced)
height
min-height (advanced)
max-height (advanced)
float/flex/grid
(clear) (advanced)
overflow (advanced)
position (advanced)
z-index (advanced)

typography
------
font-family
font-size
font-style
color
letter-spacing (advanced)
line-height
text-align
text-indent (advanced)
text-decoration
text-transform (advanced)
dir (advanced)
column-count (advanced)

background
------
add multiple background type
color
gradient
image
transparency

border
------
left/right/top/bottom
style
width
color
radius

shadows
------
box-shadow
text-shadow

transitions
------
type
timer
speed

effects
------
opacity
filters
cursor
*/