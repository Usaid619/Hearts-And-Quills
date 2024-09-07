import { render, screen } from "@testing-library/react";
import WritingArea from "../WritingArea";
import "@testing-library/jest-dom"

describe("checking header Elements",()=>{
    test("check if the placeHolder elem is loading",()=>{
        render(<WritingArea/>)
        const placeHolder = screen.getByPlaceholderText("start writing here...")
    
        // assertion
        expect(placeHolder).toBeInTheDocument()
    })
    
    test("check if blur elem is loading",()=>{
        render(<WritingArea/>)
        const blurElem = screen.getByRole("paragraph")
        
        expect(blurElem).toBeInTheDocument()
    })
})

