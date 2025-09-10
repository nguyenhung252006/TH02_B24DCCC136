import { useState } from "react"
export default function Bai2 () {
    const [work, setWork] = useState([])
    const [input, setInput] = useState("")
    function addWork () {
        if (input.trim() != "") {
            setWork([...work,input])
            setInput("")
            focus()
        }
    }
    return (
        <div>
            <h1>Bài 2: Danh sách công việc:</h1>
            <input type="text"
            value={input}
            onChange={(e) => {setInput(e.target.value)}}
            placeholder="Nhập công việc"
             />
            <button
            onClick={addWork}>thêm</button>
            <ul>
                {work.map((item,index) => <li key={index}>{item}</li>)}
            </ul>
        </div>
    )
}