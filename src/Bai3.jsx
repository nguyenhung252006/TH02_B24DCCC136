import { useState } from "react";

export default function Bai3() {
    const [color, setColor] = useState("")
    function makeColor(e) {
        switch (e) {
            case "red":
                setColor("red")
                break
            case "green":
                setColor("green")
                break
            case "blue":
                setColor("blue")
                break
            case "yellow":
                setColor("yellow")
                break
            default:
                setColor("")
        }
    }

    return (
        <div>
            <h1>Bài 3: Ứng dụng đổi màu nền:</h1>
            <button  value="red" onClick={(e) => makeColor(e.target.value)}>red</button> <button  onClick={(e) => makeColor(e.target.value)} value="green" >green</button> <button  onClick={(e) => makeColor(e.target.value)} value="blue">blue</button> <button  onClick={(e) => makeColor(e.target.value)} value="yellow">yellow</button>
            <div style={{ backgroundColor: color, height: "200px",width: "200px", margin : "20px 20px" }}></div>
        </div>
    )

}

