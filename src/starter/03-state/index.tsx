import { useState } from "react";

function States() {
    const [text, setText] = useState('')
    const [num, setNum] = useState(1)
    const [array, setArray] = useState<number[]>([])

    return (
        <div>
            <h2>React & TypeScript</h2>
            <button className="btn btn-center"
                onClick={() =>
                    //setText("hello")
                    setNum(num+23)
                   // setArray([1, 3])
                }
            >click me</button>
        </div>
    )
}

export default States;