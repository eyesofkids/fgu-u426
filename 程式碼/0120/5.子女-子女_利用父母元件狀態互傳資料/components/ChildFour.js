function ChildFour(props) {
  const innerData = 'ChildFour內部資料'

  return (
    <>
      <h2>ChildFour(子女四號)</h2>
      <button
        onClick={() => {
          props.setData(innerData)
        }}
      >
        傳送資料到子女三號
      </button>
    </>
  )
}

export default ChildFour
