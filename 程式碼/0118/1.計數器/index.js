const element = document.getElementById('total')

element.addEventListener('click', function () {
  element.innerText = +element.innerText + 1
})
