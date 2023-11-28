import React from "react";
import "./LoginPrompt.css"

/**
 * @param isStudent - a boolean responsible for determining if user is a student
 * @param isAdministrator - a boolean responsible for determining if user is administrator
 *
 * @param setIsAdministrator - a function responsible for modifying the state of props.isAdministrator
 * @param setStudent - a function responsible for modifying the state of props.isStudent
 *
 * @returns {Element}
 */
function AdminStudentCheckBoxes({isStudent, isAdministrator, setIsAdministrator, setIsStudent}) {
    function handleCheckboxChange(type) {
        if (type === 'administrator') {
            setIsAdministrator(!isAdministrator);
            setIsStudent(false);
        } else if (type === 'student') {
            setIsStudent(!isStudent);
            setIsAdministrator(false);
        }
    }

    return (
        <div className="checkboxes">
            <label>
                <input
                    type="checkbox"
                    checked={isAdministrator}
                    onChange={() => handleCheckboxChange('administrator')}
                />
                Administrator
            </label>
            <label>
                <input
                    type="checkbox"
                    checked={isStudent}
                    onChange={() => handleCheckboxChange('student')}
                />
                Student
            </label>
        </div>
    )
}

function LoginPrompt({setPassword, setUsername, setIsAdministrator, isAdministrator, setIsStudent, isStudent}) {
    return (
        <div className="inputs">
            <AdminStudentCheckBoxes
                setIsAdministrator={setIsAdministrator}
                isAdministrator={isAdministrator}
                setIsStudent={setIsStudent}
                isStudent={isStudent}
            />
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