import { useState } from 'react'

function MyMoney() {
  const [money, setMoney] = useState('')
  const [result, setResult] = useState('')

  return (
    <>
      <h1>貨幣轉換程式</h1>

      <input
        type="text"
        value={money}
        onChange={(e) => {
          setMoney(e.target.value)
        }}
      />

      <button
        onClick={() => {
          setResult((+money / 28.53).toFixed(2))
        }}
      >
        新台幣轉美金
      </button>
      <button
        onClick={() => {
          setResult((+money * 28.53).toFixed(0))
        }}
      >
        美金轉新台幣
      </button>
      <h1>最後轉換為{result}元</h1>
    </>
  )
}

export default MyMoney
