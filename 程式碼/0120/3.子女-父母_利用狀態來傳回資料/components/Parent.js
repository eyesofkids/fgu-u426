import { useState } from 'react'
import ChildTwo from './ChildTwo'

function Parent() {
  const [data, setData] = useState('')

  return (
    <>
      <h2>Parent(父母)</h2>
      <p>來自子女內部的資料：{data}</p>
      <ChildTwo setData={setData} />
    </>
  )
}

export default Parent
