function ChildOne(props) {
  console.log(props)

  return (
    <>
      <h2>ChildOne(子女一號)</h2>
      <p>來自父母內部的資料：{props.data}</p>
    </>
  )
}

export default ChildOne
