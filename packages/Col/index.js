'use strict';

var displayComponentFactory = require('constelation-display-component-factory')

var style = {
  display: 'flex',
  flexDirection: 'column',
}

// var styleAliases = {
//   alignHorizontal: 'alignItems',
//   alignVertical: 'justifyContent',
// }

// module.exports = displayComponentFactory('Col', style, styleAliases)
module.exports = displayComponentFactory('Col', style)
