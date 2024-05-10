import { useState } from "react";

const display = document.getElementById("display")

let startTime = 0;
let elapsedtime = 0;
let isRunning = false;

function TimeLapse(){

    function start(){
        if(!isRunning){
            startTime = Date.now() - elapsedtime
            timer = setInterval(update, 10)
            isRunning = true
        }
    }

    function stop(){
        if(isRunning){
            clearInterval(timer)
            elapsedtime = Date.now() - startTime
            isRunning = false
        }
    }

    return(
        <>
        <h1 id = "myH1"> Time Lapse</h1>

        <div id="container">
            <div id="display">
                
            </div>
            <div id="controls">
                <button id="startBtn" onClick={start()}>Start</button>
                <button id="stopBtn" onClick={stop()}>Start</button>
                <button id="resetBtn" onClick={reset()}>Start</button>

            </div>
            
        </div>
        </>
    )
}
