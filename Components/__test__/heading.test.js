import { render, screen } from "@testing-library/react";
import WritingArea from "../WritingArea";
import "@testing-library/jest-dom"

test("check if the writingArea is loading",()=>{
    render(<WritingArea/>)
    const heading = screen.getByPlaceholderText("start writing here...")

    // ASSERTION
    expect(heading).toBeInTheDocument()
})