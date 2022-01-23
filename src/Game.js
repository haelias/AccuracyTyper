import {useState , useEffect, useRef} from "react"

function useGameLogic(){
    const STARTING_TIME = 60
    
    const [text, setText] = useState("")
    const [timeRemaining, setTimeRemaining] = useState(STARTING_TIME)
    const [isTimeRunning, setIsTimeRunning] = useState(false)
    const [wordCount, setWordCount] = useState(0)
    const textBoxRef = useRef(null)

    const [randWords, setrandWords] = useState([])
    const [loaded, setLoaded] = useState(false)

    const [wpm, setWpm] = useState(null)

    // const [curWord, setCurWord] = useState()

    const getWords = async(e) => {
        try {
            const res = await fetch(`https://random-word-api.herokuapp.com/word?number=100`)
            const data = await res.json()
            setrandWords(data)
            console.log(data)
            setLoaded(true)
        }
        catch(err) {
            console.log('fuck')
        }

        // return (
        //     <div>
        //     {randWords.map(item =>{<div key = {item}><p>{item}</p></div>})}
        //     </div>
        // )
    }

    const ShowWords = () => {
        let current = 0 + randWords.length
        if (loaded) {
        return(
        <h1>{randWords[current]}</h1>
        )
    }
    }

    // let shit = []

    // let aids = 0;
    
    function handleChange(e) {
        const {value} = e.target
        setText(value)
        // let aids = aids+1
        // console.log(aids)
        // shit.push('egg')
        // console.log(shit.length)

        for (let i = 0; i < 100; i++) {
            if (text === randWords[0]) {
                setText('')
                randWords.shift()
                setWordCount(100 - randWords.length)
                console.log(randWords)
            }
        }
    }
    
    // let yeet = 0;

    function calculateWordCount(text) {
        // const wordsArr = text.trim().split(" ")
        // return wordsArr.filter(word => word !== "").length
        // yeet = randWords.length
        return 100 - randWords.length
    }
    useEffect(() => {
        if(isTimeRunning && timeRemaining > 0) {
            setTimeout(() => {
                setTimeRemaining(time => time - 1)
            }, 1000)
        } else if(timeRemaining === 0) {
            endGame()
        }
    }, [timeRemaining, isTimeRunning])
    
    function startGame() {
        setIsTimeRunning(true)
        setTimeRemaining(STARTING_TIME)
        setText("")
        textBoxRef.current.disabled = false
        textBoxRef.current.focus()
        getWords()
    }
    
    function endGame() {
        setTimeRemaining(0)
        textBoxRef.current.disabled = true;
        setIsTimeRunning(false)
        // setWordCount(calculateWordCount(text))
    }

    const loopz = () => {
        
    }

    const Test2 = () => {
        return (
        <div>
            {loaded ? <h1 className = 'typeword'>{randWords[0]}</h1> : <h1 className='typeword'>Words will appear here</h1>}
            {/* {loaded ? <h1 className='typenext'>{randWords[99 - randWords.length]}</h1> : null} */}
            
            {/* {wordCount.map(wurds => {
              <div key = {wurds}>
                  <h1>{wurds}</h1>
              </div>  
              
            })} */}
        </div>
        )
    }
    
    return (
        [textBoxRef, handleChange,text,timeRemaining,startGame,isTimeRunning,wordCount,Test2, ShowWords, endGame]
    )
}

export default useGameLogic