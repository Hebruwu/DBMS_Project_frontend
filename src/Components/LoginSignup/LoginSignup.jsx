import React, {useState} from 'react';
import './LoginSignup.css';
import LoginPrompt from './LoginPrompt'
import SignupPrompt from "./SignupPrompt";

/**
 * @param props.isStudent - a boolean responsible for determining if user is a student
 * @param props.isAdministrator - a boolean responsible for determining if user is administrator
 *
 * @param props.setIsAdministrator - a function responsible for modifying the state of props.isAdministrator
 * @param props.setStudent - a function responsible for modifying the state of props.isStudent
 *
 * @returns {Element}
 */
function AdminStudentCheckBoxes(props) {
    // Parents states
    let isStudent = props.isStudent
    let isAdministrator = props.isAdministrator

    // Parent state functions
    const setIsAdministrator = props.setIsAdministrator
    const setIsStudent = props.setIsStudent

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

    function handleSignupButton() {
        if (action !== "Signup") setAction('Signup');
        else {
            // Make a POST request to the backend.
        }
    }

    function handleLoginButton() {
        if (action !== "Login") setAction('Login');
        else {
            // Make a GET request to the backend.
        }
    }

    return (
        <div className='container'>
            <AdminStudentCheckBoxes
                setIsAdministrator={setIsAdministrator}
                isAdministrator={isAdministrator}
                setIsStudent={setIsStudent}
                isStudent={isStudent}
            />

            <div className="header">
                <div className="text2">{action}</div>
                <div className="underline"></div>
            </div>

            {action === 'Login' ? <LoginPrompt/> :
                <SignupPrompt
                    isAdministrator={isAdministrator}
                    isStudent={isStudent}

                    setSelectedMajor={setSelectedMajor}
                    setSelectedDepartment={setSelectedDepartment}
                    setSelectedGender={setSelectedGender}
                    setSelectedRace={setSelectedRace}
                    setSelectedCitizenship={setSelectedCitizenship}
                    setSelectedYear={setSelectedYear}

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