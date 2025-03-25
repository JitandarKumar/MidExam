import {useState,useEffect} from "react"

function CountdownLightSwitch() {
    const [isDarkMode, setIsDarkMode] = useState(false)
    const [timeLeft, setTimeLeft] = useState (30)



useEffect(() => {
    document.body.className = isDarkMode ? "dark" : "light"

}, [isDarkMode])

useEffect(() => {
    if (timeLeft >0){
        const time = setTimeout(() => setTimeLeft(timeLeft - 1),1000)
        return () => clearTimeout(time);
    }
}, [timeLeft]);

return (
    <div className="mainContainer">
        <button onClick={() => setIsDarkMode(!isDarkMode)}>
            Toggle {isDarkMode ? "Light" : "Dark"} Mode
        </button>
        <div className="countdown"><p>Time Left: {timeLeft}s</p></div>
        <div className="bar">
            <div className="progress" 
            style={{width: `${(100*(30-timeLeft)) / 30 }%`}}></div>
        </div>

    </div>

)
} export default CountdownLightSwitch








