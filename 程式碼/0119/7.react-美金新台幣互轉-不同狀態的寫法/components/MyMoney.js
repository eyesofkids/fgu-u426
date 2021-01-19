import { useState } from 'react'

function MyMoney() {
  const [money, setMoney] = useState('')

  // t2u u2t
  const [type, setType] = useState('')

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
          setType('t2u')
        }}
      >
        新台幣轉美金
      </button>
      <button
        onClick={() => {
          setType('u2t')
        }}
      >
        美金轉新台幣
      </button>
      {type === 'u2t' ? <h2>美金轉新台幣</h2> : ''}
      {type === 't2u' ? <h2>新台幣轉美金</h2> : ''}
      <h1>
        最後轉換為
        {type === 'u2t' ? (+money * 28.53).toFixed(0) : ''}
        {type === 't2u' ? (+money / 28.53).toFixed(2) : ''}
      </h1>
    </>
  )
}

export default MyMoney
