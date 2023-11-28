import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import './LoginSignup.css';
import LoginPrompt from './LoginPrompt'
import SignupPrompt from "./SignupPrompt";

function LoginSignup() {
    const [action, setAction] = useState('Login');
    const [isAdministrator, setIsAdministrator] = useState(false);
    const [isStudent, setIsStudent] = useState(false);
    const [selectedMajor, setSelectedMajor] = useState('');
    const [selectedGender, setSelectedGender] = useState('');
    const [selectedRace, setSelectedRace] = useState('');
    const [selectedYear, setSelectedYear] = useState('');
    const [selectedCitizenship, setSelectedCitizenship] = useState('');
    const [selectedDepartment, setSelectedDepartment] = useState('');
    const [selectedStudentName, setSelectedStudentName] = useState('');
    const [selectedEmail, setSelectedEmail] = useState('')
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()

    function handleSignupButton() {
        if (action !== "Signup") {
            setAction('Signup');
            setUsername('');
            setPassword('');
        } else {
            // Make a POST request to the backend.
            let request_url = "http://ec2-18-118-164-236.us-east-2.compute.amazonaws.com/eventhosting/students/create";
            let request = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    "name": selectedStudentName,
                    "username": username,
                    "password": password,
                    "email": selectedEmail,
                    "race": selectedRace,
                    "department": selectedDepartment,
                    "major": selectedMajor,
                    "citizenship": selectedCitizenship,
                    "year": selectedYear,
                    "gender": selectedGender,
                })
            }
            fetch(request_url, request).then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to create new user.")
                }
                setAction("Login")
            }).catch((error) => console.log(error))

        }
    }

    function handleLoginButton() {
        if (action !== "Login") {
            setAction('Login');
            setUsername('');
            setPassword('');
        } else {
            // By default, we will try to log in as a student.

            let request_url = isAdministrator ?
                "http://ec2-18-118-164-236.us-east-2.compute.amazonaws.com/eventhosting/admins/authenticate" :
                "http://ec2-18-118-164-236.us-east-2.compute.amazonaws.com/eventhosting/students/authenticate";

            // Make a GET request to the backend.
            let request = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    "username": username,
                    "password": password,
                }),
            }
            fetch(request_url, request).then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to fetch data.")
                }

                // This is where we move to the next page.
                sessionStorage.setItem("username", username)
                sessionStorage.setItem("password", password)
                sessionStorage.setItem("isAdmin", isAdministrator ? "T" : "F")


                if (isAdministrator) {
                    navigate("/admin-view/posted-events")
                } else {
                    navigate('/student-view/accepted-events')
                }
            })
                .catch(error => {
                    // This is where we display to the user, that we have failed to log - in
                    // (Do we have functionality for that yet?)
                    console.log(error)
                })
        }
    }

    return (
        <div className='container'>
            <div className="header">
                <div className="text2">{action}</div>
                <div className="underline"></div>
            </div>

            {action === 'Login' ? <LoginPrompt
                    setPassword={setPassword}
                    setUsername={setUsername}
                    setIsAdministrator={setIsAdministrator}
                    isAdministrator={isAdministrator}
                    setIsStudent={setIsStudent}
                    isStudent={isStudent}
                /> :
                <SignupPrompt
                    isAdministrator={isAdministrator}
                    isStudent={isStudent}

                    setSelectedMajor={setSelectedMajor}
                    setSelectedDepartment={setSelectedDepartment}
                    setSelectedGender={setSelectedGender}
                    setSelectedRace={setSelectedRace}
                    setSelectedCitizenship={setSelectedCitizenship}
                    setSelectedYear={setSelectedYear}
                    setSelectedStudentName={setSelectedStudentName}
                    setSelectedEmail={setSelectedEmail}
                    setUsername={setUsername}
                    setPassword={setPassword}

                    selectedGender={selectedGender}
                    selectedDepartment={selectedDepartment}
                    selectedMajor={selectedMajor}
                    selectedRace={selectedRace}
                    selectedYear={selectedYear}
                    selectedCitizenship={selectedCitizenship}

                />}
            <div className="submit-container" style={{marginLeft: -35}}>
                <div className={action === 'Login' ? 'submit gray' : 'submit'} onClick={() => handleSignupButton()}>
                    Sign Up
                </div>
                <div className={action === 'Sign Up' ? 'submit gray' : 'submit'} onClick={() => handleLoginButton()}>
                    Login
                </div>
            </div>
        </div>
    );
}

export default LoginSignup;