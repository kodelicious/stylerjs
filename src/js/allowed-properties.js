export default {
    layout: {
        'display': {
            label: 'Display',
            javascript: 'display',
            type: 'select',
            values: {
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
        }
    }
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