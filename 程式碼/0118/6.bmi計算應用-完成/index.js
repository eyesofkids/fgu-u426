// 先統一得到目前的網頁上的要使用的DOM元素物件
const myHeight = document.getElementById('myHeight')
const myWeight = document.getElementById('myWeight')
const calc = document.getElementById('calc')
const bmiText = document.getElementById('bmiText')

calc.addEventListener('click', function () {
  // 先得到身高與體重的數字值
  const w = +myWeight.value
  const h = +myHeight.value

  // 計算 BMI = 體重(公斤) / 身高2(公尺平方)
  const bmi = w / Math.pow(h / 100, 2)

  // 輸出時只保留一位小數點
  bmiText.innerHTML = bmi.toFixed(1)

  // 全部寫在一起
  // bmiText.innerHTML = (
  //   +myWeight.value / Math.pow(+myHeight.value / 100, 2)
  // ).toFixed(1)
})
