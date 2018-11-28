import {MUTATION} from './constants'

let color = '#65F0FF'


//TODO: add export
//TODO: Added ff for opacity reasons 
const rgbToHex = (r, g, b) => '#' + [r, g, b].map(x => {
  const hex = x.toString(16)
  return hex.length === 1 ? '0' + hex : hex
}).join('') + 'ff'

//TODO: add export
const hexToRgb = hex =>
  hex.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i
             ,(m, r, g, b) => '#' + r + r + g + g + b + b)
    .substring(1).match(/.{2}/g)
    .map(x => parseInt(x, 16))

function mutate(low, high){
  var item = Math.floor(Math.random()*(high - low) + low)
  return item
}

function getLowestMutationColors(colorFraction){
  var newColorFraction = Math.floor(colorFraction - 255 * MUTATION)
  if(newColorFraction < 0){
    newColorFraction = 0
  }
  return newColorFraction
}

function getHighestMutationColors(colorFraction){
  var newColorFraction = Math.floor(colorFraction + 255 * MUTATION)
  if(newColorFraction > 255){
    newColorFraction = 255
  }
  return newColorFraction
}

export function mutateColor(hexColor) {
  let temp = hexToRgb(hexColor)
  let newColorRGB = temp.map(x => mutate(getLowestMutationColors(x), getHighestMutationColors(x)))
  return rgbToHex(newColorRGB[0], newColorRGB[1], newColorRGB[2])
}
