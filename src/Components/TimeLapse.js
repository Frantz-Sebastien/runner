import { useState } from "react";
 


function TimeLapse(){
    const [time, setTime] = useState(0)
    const [running, setRunning] = useState(false)
    return(
        <>
        <div>
            <span>{("0" + Math.floor((time/6000) % 60))}:</span>
            <span>{("0" + Math.floor((time/1000) % 60))}:</span>
            <span>{("0" + Math.floor((time/10) % 100))}:</span>
        </div>

        <div>
            <button onClick={()=>{setRunning(true)}}>Start</button>
            <button onClick={()=>{setRunning(false)}}>Stop</button>
            <button onClick={()=>{setTime(0)}}>Reset</button>
        </div>

        </>
    )
}

export default TimeLapse