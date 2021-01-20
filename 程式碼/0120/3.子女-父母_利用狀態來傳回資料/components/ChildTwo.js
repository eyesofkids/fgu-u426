function ChildTwo(props) {
  const innerData = 'Child內部資料'

  return (
    <>
      <h2>ChildTwo(子女二號)</h2>
      <button
        onClick={() => {
          props.setData(innerData)
        }}
      >
        傳送資料到父母
      </button>
    </>
  )
}

export default ChildTwo
