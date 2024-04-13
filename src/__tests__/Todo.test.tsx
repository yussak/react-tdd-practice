import { render } from "@testing-library/react"
import App from "../App"

describe("Todo機能", () => {
    const testTodoList =[
        {id:1, title:"買い物"},
        {id:2, title:"掃除"},
        {id:3, title:"洗濯"},
    ]
    
    describe("Todo一覧を取得できる", ()=>{
        it("todoの個数を正しく表示できる", ()=>{
            // index.tsxが引数としてtodolistを受け取る
            render(<App todolist={testTodoList}/>)
            const todoItems = screen.getAllByText(/todo\d/);
            expect(todoItems).toHaveLength(3)
        })  
        it.todo("id, titleを正しく取得できる", ()=>{
        })
    })
    it.todo("Todoを追加できる")
    it.todo("Todoを削除できる")
    it.todo("Todoを更新できる")
})