import React, { useState } from 'react';
import './LoginSignup.css';

const majorsList = [
    'Accounting',
    'ACIS',
    'Advertising',
    'Aerospace Engineering',
    'Agribusiness',
    'Agricultural Sciences',
    'Animal and Poultry Sciences',
    'Arabic',
    'Architecture',
    'Art History',
    'Biochemistry',
    'Biological Sciences',
    'BSE',
    'Biomedical Engineering',
    'Building Construction',
    'BIT',
    'Business (undecided)',
    'CTE',
    'Chemical Engineering',
    'Chemistry',
    'Cinema',
    'Civil Engineering',
    'Classical Studies',
    'Clinical Neuroscience',
    'Communication',
    'CMDA',
    'Computer Engineering',
    'Computer Science',
    'Construction Engineering',
    'Consumer Studies',
    'Creative Technologies',
    'Creative Writing',
    'Criminology',
    'Crop and Soil Sciences',
    'Cybersecurity',
    'Dairy Science',
    'Early Childhood Development',
    'Ecological Restoration',
    'Economics',
    'Electrical Engineering',
    'Elementary Education (PK-6)',
    'English',
    'English Education',
    'Entrepreneurship',
    'Environmental Conservation',
    'Environmental Data Science',
    'Environmental Horticulture',
    'Environmental Policy',
    'Environmental Resources',
    'Environmental Science',
    'Exercise & Health Sciences',
    'Experimental Neuroscience',
    'Explore Science (undecided)',
    'Fashion',
    'Finance',
    'Finance and Real Estate',
    'Financial Planning',
    'Fish Conservation',
    'FST',
    'Forestry',
    'French',
    'General Engineering',
    'Geography',
    'Geosciences',
    'German',
    'Graphic Design',
    'History',
    'Hospitality',
    'Human Development',
    'ISE',
    'Industrial Design',
    'Interior Design',
    'International Public Policy',
    'International Relations',
    'International Studies',
    'Landscape Architecture',
    'Management',
    'Marketing Management',
    'MSE',
    'Mathematics',
    'Mathematics Education',
    'Mechanical Engineering',
    'Medicinal Chemistry',
    'Meteorology',
    'Microbiology',
    'Mining Engineering',
    'Multimedia Journalism',
    'Music',
    'Nanomedicine',
    'Nanoscience',
    'NSFA',
    'Nutrition and Dietetics',
    'Ocean Engineering',
    'Packaging',
    'Philosophy',
    'PPE',
    'Physics',
    'Plant Science',
    'Political Science',
    'Polymer Chemistry',
    'Technical Writing',
    'Property Management',
    'Psychology',
    'Public Health',
    'Public Relations',
    'Real Estate',
    'Religion and Culture',
    'Russian',
    'Smart and Sustainable Cities',
    'Sociology',
    'Spanish',
    'Sports Media and Analytics',
    'Statistics',
    'Studio Art',
    'Sustainable Biomaterials',
    'Systems Biology',
    'Theatre Arts',
    'University Studies',
    'Wildlife Conservation'
];


const genderOptions = ['Male', 'Female', 'Other'];
const raceOptions = ['White', 'Black', 'Hispanic', 'Native American', 'Asian', 'Pacific Islander', 'Mixed', 'Other'];
const yearOptions = ['Freshman', 'Sophomore', 'Junior', 'Senior', "Master's", 'PhD'];
const citizenshipOptions = ['Domestic', 'Int.'];

const LoginSignup = () => {
    const [action, setAction] = useState('Login');
    const [isAdministrator, setIsAdministrator] = useState(false);
    const [isStudent, setIsStudent] = useState(false);
    const [selectedMajor, setSelectedMajor] = useState('');
    const [selectedGender, setSelectedGender] = useState('');
    const [selectedRace, setSelectedRace] = useState('');
    const [selectedYear, setSelectedYear] = useState('');
    const [selectedCitizenship, setSelectedCitizenship] = useState('');

    const handleCheckboxChange = (type) => {
        if (type === 'administrator') {
            setIsAdministrator(!isAdministrator);
            setIsStudent(false);
        } else if (type === 'student') {
            setIsStudent(!isStudent);
            setIsAdministrator(false);
        }
    };

    return (
        <div className='container'>
            {action === 'Sign Up' ? (
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
            ) : null}
            <div className="header">
                <div className="text2">{action}</div>
                <div className="underline"></div>
            </div>
            {action === 'Login' ? (
                <div className="inputs">
                    <div className="input">
                        <img src=""alt="" />
                        <input type="text" placeholder="Username" />
                    </div>
                    <div className="input">
                        <img src="" alt="" />
                        <input type="password" placeholder="Password" />
                    </div>
                </div>
            ) : (
                (isAdministrator || isStudent) && (
                    <div className="inputs">
                        {isAdministrator && (
                            <div>
                                <div className="input" style={{ marginBottom: 15}}>
                                    <img src="" alt="" />
                                    <input type="text" style={{ marginLeft: -15}} placeholder="Admin Name" />
                                </div>
                                <div className="input">
                                    <img src="" alt="" />
                                    <input type="text" style={{ marginLeft: -15}} placeholder="Admin ID" />
                                </div>
                            </div>
                        )}
                        {isStudent && (
                            <div>
                                <div className="input" style={{ marginBottom: 15}}>
                                    <img src="" alt="" />
                                    <input type="text" style={{ marginLeft: -15}} placeholder="Student Name" />
                                </div>
                                <div className="input" style={{ marginBottom: 15}}>
                                    <img src="" alt="" />
                                    <input type="text" style={{ marginLeft: -15}} placeholder="Student ID" />
                                </div>
                                <div className="input" style={{ marginBottom: 15}}>
                                    <img src="" alt="" />
                                    <select
                                        value={selectedMajor}
                                        onChange={(e) => setSelectedMajor(e.target.value)}
                                    >
                                        <option value="" disabled>Select Major</option>
                                        {majorsList.map((major, index) => (
                                            <option key={index} value={major}>{major}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="input" style={{ marginBottom: 15}}>
                                        <select
                                            value={selectedGender}
                                            onChange={(e) => setSelectedGender(e.target.value)}
                                            className="right-align"
                                        >
                                            <option value="" disabled>Select Gender</option>
                                            {genderOptions.map((gender, index) => (
                                                <option key={index} value={gender}>{gender}</option>
                                            ))}
                                        </select>
                                </div>
                                <div className="input" style={{ marginBottom: 15}}>
                                        <select
                                            value={selectedRace}
                                            onChange={(e) => setSelectedRace(e.target.value)}
                                            className="right-align2"
                                        >
                                            <option value="" disabled>Select Race</option>
                                            {raceOptions.map((race, index) => (
                                                <option key={index} value={race}>{race}</option>
                                            ))}
                                        </select>
                                </div>
                                <div className="input" style={{ marginBottom: 15}}>
                                        <select
                                            value={selectedYear}
                                            onChange={(e) => setSelectedYear(e.target.value)}
                                            className="right-align3"
                                        >
                                            <option value="" disabled>Select Year</option>
                                            {yearOptions.map((year, index) => (
                                                <option key={index} value={year}>{year}</option>
                                            ))}
                                        </select>
                                </div>
                                <div className="input">
                                    <label>
                                        Citizenship:
                                        {citizenshipOptions.map((option, index) => (
                                            <label key={index}>
                                                <input
                                                    type="radio"
                                                    value={option}
                                                    checked={selectedCitizenship === option}
                                                    onChange={() => setSelectedCitizenship(option)}
                                                />
                                                {option}
                                            </label>
                                        ))}
                                    </label>
                                </div>
                                {/* Add other student-specific fields */}
                            </div>
                        )}
                        {isAdministrator || isStudent ? (
                            <div className="input">
                                <img src="" alt="" />
                                <input type="text" style={{ marginLeft: -15}} placeholder={`${isAdministrator ? 'Admin' : 'Student'} Username`} />
                            </div>
                        ) : null}
                        <div className="input">
                            <img src="" alt="" />
                            <input type="email" style={{ marginLeft: -15}} placeholder="Email ID" />
                        </div>
                        <div className="input">
                            <img src="" alt="" />
                            <input type="password" style={{ marginLeft: -15}} placeholder="Password" />
                        </div>
                    </div>
                ))}

            {action === 'Login' ? (
                <div className="forgot-password">
                    Lost Password? <span>Click Here!</span>
                </div>
            ) : null}
            <div className="submit-container" style={{ marginLeft: -35}}>
                <div className={action === 'Login' ? 'submit gray' : 'submit'} onClick={() => setAction('Sign Up')}>
                    Sign Up
                </div>
                <div className={action === 'Sign Up' ? 'submit gray' : 'submit'} onClick={() => setAction('Login')}>
                    Login
                </div>
            </div>
        </div>
    );
};

export default LoginSignup;
