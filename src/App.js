import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import LoginSignup from './Components/LoginSignup/LoginSignup';
import HomePage from './Components/HomePage/HomePage';
import About from './Components/About/About';
import EventCreation from "./Components/AdministratorView/EventCreation";
import AcceptedEvents from "./Components/StudentView/AcceptedEvents";
import PostedEvents from "./Components/AdministratorView/PostedEvents";
import SendInvite from "./Components/AdministratorView/SendInvite";

function App() {
    return (
        <Router>
            <Routes>
                <Route exact path='/' element={<HomePage/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/login-signup' element={<LoginSignup/>}/>
                <Route path='/admin-view/event-creation' element={<EventCreation/>}/>
                <Route path='/admin-view/posted-events' element={<PostedEvents/>}/>
                <Route path='/admin-view/send-invite' element={<SendInvite/>}/>
                <Route path='/student-view/accepted-events' element={<AcceptedEvents/>}/>
            </Routes>
        </Router>
    );
}

export default App;
