import './App.scss';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import WelcomePage from './components/welcomepage/WelcomePage'
import SignUp from './components/auth/SignUp';
import SignIn from './components/auth/SignIn';
import AuthDetails from './components/auth/AuthDetails';
import MainPage from './components/main/MainPage';
import CatalogPage from './components/catalog/CatalogPage';
import AddProduct from './components/catalog/AddProduct';

function App() {
  return (
    <div className="App">
      <Router>

        <Routes>
          <Route path="/mainpage" element={<MainPage />} />
          <Route path='/welcomepage' element={<WelcomePage />}/>
          <Route path='/signup' element={<SignUp />}/>
          <Route path='/signin' element={<SignIn />}/>
          <Route path='/catalogpage' element={<CatalogPage />} />
          <Route path='/addproduct' element={<AddProduct />}/>
           <Route path='/' element={<Navigate to="/welcomepage" />}/>
        </Routes>

      <AuthDetails />
      </Router>
      
    </div>
  );
}

export default App
