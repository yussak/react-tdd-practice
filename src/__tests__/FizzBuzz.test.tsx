import { fireEvent, render } from "@testing-library/react"
import Index from "../pages"

describe("Fixzz Buzz 問題の答えを表示する",()=>{
    // まず仕様を書く
    it.todo("入力欄に3の倍数を入力したら出力欄にFizzと表示される")
    it.todo("入力欄に5の倍数を入力したら出力欄にBuzzと表示される")
    it.todo("入力欄に3,5の両方の倍数を入力したら出力欄にFizzBuzzと表示される")
    
    describe("それ以外の数字のときはそのまま出力欄に表示する",()=>{
        it('1を入力したら出力欄に"1"と表示する',()=>{
            // 準備
            const {getByTestId} = render(<Index />)
            const inputElement = getByTestId("input")
            const outputElement = getByTestId("output")
            // 実行
            fireEvent.change(inputElement, {target:{value:"1"}})
            
            // 検証
            expect(outputElement.textContent).toBe("1")
        })
    })
})