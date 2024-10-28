import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import CreatePost from './components/CreatePost/CreatePost';
import Login from './components/Auth/Login';
import Logout from './components/Auth/Logout';
import Navbar from './components/Navbar/Navbar';
import { useState } from 'react';

function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem('isAuth'));

  return (
    <Router>
      <Navbar isAuth={isAuth} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-post" element={<CreatePost isAuth={isAuth} />} />
        <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
        <Route path="/logout" element={<Logout setIsAuth={setIsAuth} />} />
      </Routes>
    </Router>
  );
}

export default App;