import { useState } from 'react'

function MyBMI() {
  const [height, setHeight] = useState('')
  const [weight, setWeight] = useState('')
  const [result, setResult] = useState('')

  return (
    <>
      <h1>BMI</h1>
      身高(公分)：
      <input
        type="text"
        value={height}
        onChange={(e) => {
          setHeight(e.target.value)
        }}
      />
      <br />
      體重(公斤)：
      <input
        type="text"
        value={weight}
        onChange={(e) => {
          setWeight(e.target.value)
        }}
      />
      <button
        onClick={() => {
          const bmi = +weight / Math.pow(+height / 100, 2)
          setResult(bmi.toFixed(1))
        }}
      >
        計算
      </button>
      <h1>BMI結果：{result}</h1>
    </>
  )
}

export default MyBMI
