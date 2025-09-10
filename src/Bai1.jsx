import { useState } from "react"

export default function Bai1 () {
  const [number, setNumber] = useState(0);
  function tru () {
    setNumber(number - 1)
  }
  function cong () {
    setNumber(number + 1)
  }
  return (
    <div>
      <h1>Bài 1: Ứng dụng Đếm số</h1>
      <h1>giá trị hiện tại: {number}</h1>
      <button onClick={tru}>-</button> <button onClick={cong}>+</button>
    </div>


  )
}