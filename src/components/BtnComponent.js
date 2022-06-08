import React from "react"

const BtnComponent = ({start, status, stop, reset, resume}) => {

    const buttonStart = <button onClick={start} className="stopwatch-btn stopwatch-btn-gre">Start</button>
    const buttonStopReset = <div>
                                <button onClick={stop} className="stopwatch-btn stopwatch-btn-red">Stop</button>
                                <button onClick={reset} className="stopwatch-btn stopwatch-btn-yel">Reset</button>
                            </div>
    const buttonResumeReset = <div>
                                <button onClick={resume} className="stopwatch-btn stopwatch-btn-gre">Resume</button>
                                <button onClick={reset} className="stopwatch-btn stopwatch-btn-yel">Reset</button>
                            </div>

    return (
        <div>
            {status === 0 ? buttonStart : ""} 
            {status === 1 ? buttonStopReset : ""} 
            {status === 2 ? buttonResumeReset : ""} 
        </div>
    );
}

export default BtnComponent;