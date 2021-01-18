const text = document.getElementById('text')
const color1 = document.getElementById('color1')
const color2 = document.getElementById('color2')
const color3 = document.getElementById('color3')
const apply = document.getElementById('apply')

// input value:string
// return string
const colorValueToHex = (value) => {
  //(255).toString(16)
  const hexValue = (+value).toString(16)

  return hexValue
}

apply.addEventListener('click', function () {
  const colorString = `#${colorValueToHex(color1.value)}${colorValueToHex(
    color2.value
  )}${colorValueToHex(color3.value)}`

  text.style.color = colorString
})
