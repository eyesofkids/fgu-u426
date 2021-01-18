const elmentTotal = document.getElementById('total')
const elementAdd = document.getElementById('add')
const elementSub = document.getElementById('sub')

elementAdd.addEventListener('click', function () {
  elmentTotal.innerText = +elmentTotal.innerText + 1
})

elementSub.addEventListener('click', function () {
  elmentTotal.innerText = +elmentTotal.innerText - 1
})
