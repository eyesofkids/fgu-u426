const money = document.getElementById('money')
const twd2usd = document.getElementById('twd2usd')
const usd2twd = document.getElementById('usd2twd')
const result = document.getElementById('result')

twd2usd.addEventListener('click', function () {
  result.innerText = (+money.value / 28.53).toFixed(2)
})

usd2twd.addEventListener('click', function () {
  result.innerText = (+money.value * 28.53).toFixed(0)
})
