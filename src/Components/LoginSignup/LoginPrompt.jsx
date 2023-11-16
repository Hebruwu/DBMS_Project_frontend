import React from "react";
import "./LoginPrompt.css"

function LoginPrompt() {
    return (
        <div className="inputs">
            <div className="input">
                <img src="" alt=""/>
                <input type="text" placeholder="Username"/>
            </div>
            <div className="input">
                <img src="" alt=""/>
                <input type="password" placeholder="Password"/>
            </div>
            <div className="forgot-password">
                Lost Password? <span>Click Here!</span>
            </div>
        </div>
    )
}

export default LoginPrompt