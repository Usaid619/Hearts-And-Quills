import sum from "../sum";

test("testing sum component independently which is unit testing",()=>{
    const result = sum(4,3)

    expect(result).toBe(7)
})