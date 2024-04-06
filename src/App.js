import React from 'react'
import {BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import SignUP from './pages/SignUP'
import SignIn from './pages/SignIn'
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import Quizz from './pages/Quizz';
import QuizzType from './pages/QuizzType';
import Quizzquest from './pages/Quizzquest';
import quizzquest2 from './pages/quizzquest2';



function App() {
  return (
    <div className="App">
        <Router>
            
            <Routes>
              <Route path='/' exact Component={Home} />
              <Route path='/signup' exact Component={SignUP} />
              <Route path='/signin' exact Component={SignIn} />
              <Route path='/about' exact Component={AboutUs} />
              <Route path='/contact' exact Component={Contact} />
              <Route path='/quizz' exact Component={Quizz} />
              <Route path='/quizztype' exact Component={QuizzType} />
              <Route path='/quizzquest' exact Component={Quizzquest} />
              <Route path='/quizzquest2' exact Component={quizzquest2} />
            </Routes>
        </Router>
    </div>
  );
}

export default App;
