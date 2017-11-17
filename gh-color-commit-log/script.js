colors = [ '#FF0000', '#00FF00', '#0000FF', '#2EAFAC', '#DAD', '#BAE', '#BEE', '#eee', '#c6e48b', '#7bc96f', '#239a3b', '#196127']

calendar = document.querySelector('.js-calendar-graph-svg')

currentColor = colors[0]

contribGraph = document.querySelector('.mb-5.border.border-gray-dark.rounded-1.py-2')

clearBtn = document.createElement('button')

clearBtn.innerHTML = 'Clear "Pixels"'
// This is the laziest version of implementing Github's Primer styleguide, at least it gets rid of some defaults
// https://github.com/primer/primer/blob/master/modules/primer-buttons/lib/button.scss
clearBtn.style = `position: relative;
  display: inline-block;
  margin: 1% 0;
  padding: 6px 12px;
  font-size: $body-font-size;
  font-weight: $font-weight-bold;
  line-height: 20px;
  white-space: nowrap;
  vertical-align: middle;
  cursor: pointer;
  user-select: none;
  background-repeat: repeat-x;
  background-position: -1px -1px;
  background-size: 110% 110%;
  border: 1px solid transparentize($black, 0.8);
  border-radius: 0.25em;
  appearance: none;`
clearBtn.addEventListener('click', clearPixels)

contribGraph.parentNode.insertBefore(clearBtn, contribGraph);


legend = document.createElement('ul')
legend.classList += 'legend'

colors.forEach(color => {
    square = document.createElement('li')
    square.setAttribute('data-color', color)
    // This is the laziest version of implementing Github's Primer styleguide, at least it gets rid of some defaults
    // https://github.com/primer/primer/blob/master/modules/primer-buttons/lib/button.scss
    square.style = `
    display: inline-block;
    width: 20px;
    height: 20px;
    margin: 0 2px;
    background-color: ${color};
    border: 3px solid white;
    border-radius: 50%;
    `
    square.addEventListener('click', () => {
        if (currentColor !== color) {
            let currentEl = document.querySelector(`li[data-color='${currentColor}']`)
            currentEl.style['border-color'] = 'white'
            currentColor = color
            currentEl = document.querySelector(`li[data-color='${color}']`)
            currentEl.style['border-color'] = 'black'
        }
    })
    legend.appendChild(square)
})
contribGraph.parentNode.insertBefore(legend, contribGraph);

columns = calendar.children[0].children;

clearPixels();

[...columns].filter(el => {return el.tagName === 'g'}).forEach(column => {
    column.addEventListener('click', evt => {
        console.log(column)
        let index = colors.indexOf(evt.target.getAttribute('fill'))
        // This was before there was a palette ...
        // evt.target.setAttribute('fill', colors[(index + 1) % colors.length])
        console.log("currentColor:", currentColor)
        evt.target.setAttribute('fill', currentColor)
    })
})

function clearPixels() {
    [...columns].filter(el => {return el.tagName === 'g'}).forEach(column => {
        [...column.children].forEach(square => {
            square.setAttribute('fill', '#EEE')
        })
    })
}
