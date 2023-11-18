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
                <Route path='/admin-view/event-creation' element={<EventCreation/>}/>
                <Route path='/admin-view/admin-account' element={<AdminAccount/>}/>
                <Route path='/admin-view/posted-events' element={<PostedEvents/>}/>
                <Route path='/admin-view/send-invite' element={<SendInvite/>}/>
                <Route path='/admin-view/whos-attending' element={<WhosAttending/>}/>
                <Route path='/student-view/student-account' element={<StudentAccount/>}/>
                <Route path='/student-view/accepted-events' element={<AcceptedEvents/>}/>
                <Route path='/student-view/event-details' element={<EventDetails/>}/>
            </Routes>
        </Router>
    );
}

export default App;
