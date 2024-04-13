import { useState } from "react"


const Index =()=>{
    const [num, setNum]=useState("")

const convertFizzbuzz=(e)=>{
    const num = Number(e.target.value)
    if (num % 15 === 0) {
        setNum("FizzBuzz")
        return
    }
    if(num % 3 ===0) {
        setNum("Fizz")
        return
    }
    if (num % 5 === 0) {
        setNum("Buzz")
        return
    }
    setNum(e.target.value)
}

    return (
        <div>
            <p>入力：
                <input type="number" data-testid="input" onChange={convertFizzbuzz}/>
            </p>
            <p>出力：
                <span data-testid="output">{num}</span>
            </p>
        </div>
    )
}

export default Index