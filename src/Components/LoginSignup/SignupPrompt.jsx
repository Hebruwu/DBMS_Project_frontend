import React from "react";
import "./SignupPrompt.css"

const genderOptions = ['M', 'F', 'O'];
const raceOptions = ['White', 'Black', 'Hispanic', 'Native American', 'Asian', 'Pacific Islander', 'Mixed', 'Other'];
const yearOptions = ['Freshman', 'Sophomore', 'Junior', 'Senior', "Master's", 'PhD'];
const citizenshipOptions = ['Domestic', 'Int.'];

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

function SignupPrompt({
                          setSelectedMajor,
                          setSelectedDepartment,
                          setSelectedGender,
                          setSelectedRace,
                          setSelectedCitizenship,
                          setSelectedYear,
                          selectedGender,
                          selectedDepartment,
                          selectedMajor,
                          selectedRace,
                          selectedYear,
                          selectedCitizenship,
                          setSelectedStudentName,
                          setSelectedEmail,
                          setPassword,
                          setUsername,
                      }) {
    return (
        <div className="inputs">
            <div className="input" style={{marginBottom: 15}}>
                <img src="" alt=""/>
                <input type="text" style={{marginLeft: -15}}
                       onChange={(e) => setSelectedStudentName(e.target.value)}
                       placeholder="Student Name"/>
            </div>
            <div className="input" style={{marginBottom: 15}}>
                <input
                    type="text"
                    style={{marginLeft: 2}}
                    placeholder="Department"
                    value={selectedDepartment}
                    onChange={(e) => setSelectedDepartment(e.target.value)}
                />
            </div>
            <div className="input" style={{marginBottom: 15}}>
                <img src="" alt=""/>
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
            <div className="input" style={{marginBottom: 15}}>
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
            <div className="input" style={{marginBottom: 15}}>
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
            <div className="input" style={{marginBottom: 15}}>
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
            <div className="input">
                <img src="" alt=""/>
                <input type="text" style={{marginLeft: -15}}
                       onChange={(e) => setUsername(e.target.value)}
                       placeholder={"Username"}/>
            </div>
            <div className="input">
                <img src="" alt=""/>
                <input type="email"
                       onChange={(e) => setSelectedEmail(e.target.value)}
                       style={{marginLeft: -15}}
                       placeholder="Email ID"/>
            </div>
            <div className="input">
                <img src="" alt=""/>
                <input type="password"
                       onChange={(e) => setPassword(e.target.value)}
                       style={{marginLeft: -15}} placeholder="Password"/>
            </div>
        </div>)
}

export default SignupPrompt