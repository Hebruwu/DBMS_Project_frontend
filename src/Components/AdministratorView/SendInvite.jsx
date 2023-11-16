import React, { useState } from 'react';
import Select from 'react-select';
import './SendInvite.css';

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

const SendInvite = () => {
    const [selectedMajor, setSelectedMajor] = useState([]);
    const [selectedGender, setSelectedGender] = useState([]);
    const [selectedRace, setSelectedRace] = useState([]);
    const [selectedYear, setSelectedYear] = useState([]);
    const [selectedCitizenship, setSelectedCitizenship] = useState([]);

    const multiSelectStyles = {
        control: (provided) => ({
            ...provided,
            minHeight: '40px',
        }),
    };

    return (
        <div className="inputs">
            <div className="header" style={{ marginLeft: 0, marginTop: 500}}>
                <h2>Send Invites!</h2>
            </div>
            <div className="input" style={{ marginBottom: 15 }}>
                <Select
                    isMulti
                    options={majorsList.map((major) => ({ value: major, label: major }))}
                    value={selectedMajor}
                    onChange={(selectedOptions) => setSelectedMajor(selectedOptions)}
                    styles={multiSelectStyles}
                    placeholder="Select Major(s)"
                />
            </div>
            <div className="input" style={{ marginBottom: 15 }}>
                <Select
                    isMulti
                    options={genderOptions.map((gender) => ({ value: gender, label: gender }))}
                    value={selectedGender}
                    onChange={(selectedOptions) => setSelectedGender(selectedOptions)}
                    styles={multiSelectStyles}
                    placeholder="Select Gender(s)"
                />
            </div>
            <div className="input" style={{ marginBottom: 15 }}>
                <Select
                    isMulti
                    options={raceOptions.map((race) => ({ value: race, label: race }))}
                    value={selectedRace}
                    onChange={(selectedOptions) => setSelectedRace(selectedOptions)}
                    styles={multiSelectStyles}
                    placeholder="Select Race(s)"
                />
            </div>
            <div className="input" style={{ marginBottom: 15 }}>
                <Select
                    isMulti
                    options={yearOptions.map((year) => ({ value: year, label: year }))}
                    value={selectedYear}
                    onChange={(selectedOptions) => setSelectedYear(selectedOptions)}
                    styles={multiSelectStyles}
                    placeholder="Select Year(s)"
                />
            </div>
            <div className="input">
                <Select
                    isMulti
                    options={citizenshipOptions.map((citizenship) => ({ value: citizenship, label: citizenship }))}
                    value={selectedCitizenship}
                    onChange={(selectedOptions) => setSelectedCitizenship(selectedOptions)}
                    styles={multiSelectStyles}
                    placeholder="Select Citizenship(s)"
                />
            </div>
            <div className="sidebar2">
                <button style={{ marginLeft: -20}} className="button" >Send!</button>
                <button style={{ marginLeft: -20}} className="button" >Logout</button>
            </div>
        </div>
    );
};

export default SendInvite;