import RandomWords from "../Constants";

const randomWordsCopy = [...RandomWords]


function selectAndUpdate(){
    const randomIndex = ~~(Math.random()*randomWordsCopy.length)
const randomWord = randomWordsCopy[randomIndex]

randomWordsCopy.splice(randomIndex,1)

console.log(randomWordsCopy)

return randomWord
}

const useRandomWord = selectAndUpdate()

export default useRandomWord