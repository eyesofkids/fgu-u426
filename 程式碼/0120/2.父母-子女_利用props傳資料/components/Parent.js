import ChildOne from './ChildOne'

function Parent() {
  const innerData = 'Parent內部資料'

  return (
    <>
      <h2>Parent(父母)</h2>
      <ChildOne data={innerData} />
    </>
  )
}

export default Parent
