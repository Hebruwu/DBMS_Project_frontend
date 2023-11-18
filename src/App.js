import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import LoginSignup from './Components/LoginSignup/LoginSignup';
import HomePage from './Components/HomePage/HomePage';
import About from './Components/About/About';
import EventCreation from "./Components/AdministratorView/EventCreation";
import AdminAccount from "./Components/AdministratorView/AdminAccount";
import StudentAccount from "./Components/StudentView/StudentAccount";
import AcceptedEvents from "./Components/StudentView/AcceptedEvents";
import PostedEvents from "./Components/AdministratorView/PostedEvents";
import SendInvite from "./Components/AdministratorView/SendInvite";
import WhosAttending from "./Components/AdministratorView/WhosAttending";
import EventDetails from "./Components/StudentView/EventDetails";

function App() {
    return (
        <Router>
            <Routes>
                <Route exact path='/' element={<HomePage/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/login-signup' element={<LoginSignup/>}/>
                <Route path='/adminView/eventCreation' element={<EventCreation/>}/>
                <Route path='/adminView/adminAccount' element={<AdminAccount/>}/>
                <Route path='/adminView/postedEvents' element={<PostedEvents/>}/>
                <Route path='/adminView/sendInvite' element={<SendInvite/>}/>
                <Route path='/adminView/whosAttending' element={<WhosAttending/>}/>
                <Route path='/studentView/studentAccount' element={<StudentAccount/>}/>
                <Route path='/studentView/acceptedEvents' element={<AcceptedEvents/>}/>
                <Route path='/studentView/eventDetails' element={<EventDetails/>}/>
            </Routes>
        </Router>
    );
}

export default App;
