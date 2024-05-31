import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register'
import Login from './pages/Login'
import About from './pages/About';
import Contact from './pages/Contact';
import Quizz from './pages/Quizz';
import QuizzType from './pages/QuizzType';
import Quizzquest from './pages/Quizzquest';
import Admin from './pages/Admin';
import UserQuizzes from './pages/UserQuizzes';
import Price from './pages/Price';
import { MyContext } from './Context';
import Profile from './pages/Profile';

function App() {
  const [dropdownAnswers, setDrpodownAnswers] = useState({})
  const [optionAnswers, setOptionAnswers] = useState({})
  const [dateAnswers, setDateAnswers] = useState({});
  const [inputAnswers, setInputAnswers] = useState({});
  const [questions, setQuestions] = useState([]);
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [currentQuizz, setCurrentQuizz] = useState(null);


  const LoginUser = (user, token) => {
    localStorage.setItem("user", JSON.stringify({ user, token }));
    setUser(user);
    setToken(token);
  }

  const Logout = () => {
    localStorage.removeItem("user");
    setUser(null);
    setToken(null);
  }

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      LoginUser(user.user, user.token)
    }
  }, []);


  return (
    <MyContext.Provider value={{
      dropdownAnswers, setDrpodownAnswers,
      optionAnswers, setOptionAnswers,
      dateAnswers, setDateAnswers,
      inputAnswers, setInputAnswers,
      questions, setQuestions,
      LoginUser, Logout, setUser,
      user, token, currentQuizz, setCurrentQuizz
    }}>
      <div className="App">
        <Router>
          <Routes>
            <Route path='/' exact Component={Home} />
            <Route path='/admin' exact element={<Admin />} />
            <Route path='/register' exact element={!user ? <Register /> : <Navigate replace to='/' />} />
            <Route path='/login' exact element={!user ? <Login /> : <Navigate replace to='/' />} />
            <Route path='/about' exact Component={About} />
            <Route path='/contact' exact Component={Contact} />
            <Route path='/quizz' exact Component={Quizz} />
            <Route path='/quizztype' exact Component={QuizzType} />
            <Route path='/quizzquest' exact Component={Quizzquest} />
            <Route path='/price' exact Component={Price} />
            <Route path='/userquizzes' exact Component={UserQuizzes} />
            <Route path='/profile' exact element={user ? <Profile /> : <Navigate replace to='/' />} />
          </Routes>
        </Router>
      </div>
    </MyContext.Provider>
  );
}

export default App;