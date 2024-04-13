import { useState } from "react"


const Index =()=>{
    const [num, setNum]=useState("")

const convertFizzbuzz=(e)=>{
    if(e.target.value==="3") {
        setNum("Fizz")
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