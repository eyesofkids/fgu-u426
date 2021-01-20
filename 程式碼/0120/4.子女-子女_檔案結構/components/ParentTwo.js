import { useState } from 'react'
import ChildThree from './ChildThree'
import ChildFour from './ChildFour'

function ParentTwo() {
  return (
    <>
      <h2>Parent(父母)</h2>
      <ChildThree />
      <ChildFour />
    </>
  )
}

export default ParentTwo
