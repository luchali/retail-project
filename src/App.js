import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WelcomePage from './components/welcomepage/WelcomePage'
import SignUp from './components/auth/SignUp';
import SignIn from './components/auth/SignIn';
import AuthDetails from './components/auth/AuthDetails';

function App() {
  return (
    <div className="App">
      <Router>

        <Routes>
          <Route path='/welcomepage' element={<WelcomePage />}/>
          <Route path='/signup' element={<SignUp />}/>
          <Route path='/signin' element={<SignIn />}/>
        </Routes>

      <AuthDetails />
      </Router>
      
    </div>
  );
}

export default App
