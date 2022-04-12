import { Routes, Route } from 'react-router-dom';
import Login from './Login.js';
import Home from './Home.js';
import '../css/App.css';

function App() {
  return (
    <div className='App'>
      <nav className='Nav'>
        a99 - Team Mizar
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
