import { useState } from 'react'
import ChildThree from './ChildThree'
import ChildFour from './ChildFour'

function ParentTwo() {
  const [data, setData] = useState('')

  return (
    <>
      <h2>Parent(父母)</h2>
      <ChildThree data={data} />
      <ChildFour setData={setData} />
    </>
  )
}

export default ParentTwo
