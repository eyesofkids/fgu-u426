const text = document.getElementById('text')
const color1 = document.getElementById('color1')
const color2 = document.getElementById('color2')
const color3 = document.getElementById('color3')
const apply = document.getElementById('apply')

// input value:string
// return string
const valueToHex = (value) => {
  //(255).toString(16)
  let hex = (+value).toString(16)

  // hex只有一位時，要補前面的0字串
  if (hex.length < 2) {
    hex = '0' + hex
  }

  return hex
}

apply.addEventListener('click', function () {
  const colorString =
    '#' +
    valueToHex(color1.value) +
    valueToHex(color2.value) +
    valueToHex(color3.value)

  text.style.color = colorString
})
