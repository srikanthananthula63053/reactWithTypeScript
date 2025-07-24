import { useState } from "react";

type Links = {
    id: number,
    url: string,
    text: string
}

const navLinks: Links[] = [
    {
        id: 1,
        url: 'some url',
        text: 'some text'
    },
    {
        id: 2,
        url: 'some url',
        text: 'some text'
    },
    {
        id: 3,
        url: 'some url',
        text: 'some text'
    }
]

function States() {
    const [text, setText] = useState('')
    const [num, setNum] = useState(1)
    const [array, setArray] = useState<number[]>([])
    const [links, setLinks] = useState<Links[]>(navLinks)
    console.log(links)

    return (
        <div>
            <h2>React & TypeScript</h2>
            <button className="btn btn-center"
                onClick={() =>
                    //setText("hello")
                    //setNum(num + 23)
                    // setArray([1, 3])
                    setLinks([...links, { id: 4, url: "hello", text: "byee" }])
                }
            >click me</button>
            {/* {num}
           {text} */}
            {/* {[links]} */}
        </div>
    )
}

export default States;