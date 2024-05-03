import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register'
import Login from './pages/Login'
import About from './pages/About';
import Contact from './pages/Contact';
import Quizz from './pages/Quizz';
import QuizzType from './pages/QuizzType';
import Quizzquest from './pages/Quizzquest';
import Price from './pages/Price';
import { MyContext } from './Context';
import Profile from './pages/Profile';
import Admin from './pages/Admin';

function App() {

  const [dropdownAnswers, setDrpodownAnswers] = useState({})
  const [optionAnswers, setOptionAnswers] = useState({})
  const [dateAnswers, setDateAnswers] = useState({});
  const [inputAnswers, setInputAnswers] = useState({});

  return (
    <MyContext.Provider value={{
      dropdownAnswers, setDrpodownAnswers,
      optionAnswers, setOptionAnswers,
      dateAnswers, setDateAnswers,
      inputAnswers, setInputAnswers,
    }}>
      <div className="App">
        <Router>
          <Routes>
            <Route path='/' exact Component={Home} />
            <Route path='admin' exact Component={Admin} />
            <Route path='/register' exact Component={Register} />
            <Route path='/login' exact Component={Login} />
            <Route path='/about' exact Component={About} />
            <Route path='/contact' exact Component={Contact} />
            <Route path='/quizz' exact Component={Quizz} />
            <Route path='/quizztype' exact Component={QuizzType} />
            <Route path='/quizzquest' exact Component={Quizzquest} />
            <Route path='/price' exact Component={Price} />
            <Route path='/profile' exact Component={Profile} />
          </Routes>
        </Router>
      </div>
    </MyContext.Provider>
  );
}

export default App;