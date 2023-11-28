import React from "react";
import "./LoginPrompt.css"

function LoginPrompt({setPassword, setUsername}) {
    return (
        <div className="inputs">
            <div className="input">
                <img src="" alt=""/>
                <input type="text" onChange={(event) => {
                    setUsername(event.target.value)
                }} placeholder="Username"/>
            </div>
            <div className="input">
                <img src="" alt=""/>
                <input type="password" onChange={(event) => {
                    setPassword(event.target.value)
                }} placeholder="Password"/>
            </div>
            <div className="forgot-password">
                Lost Password? <span>Click Here!</span>
            </div>
        </div>
    )
}

export default LoginPrompt