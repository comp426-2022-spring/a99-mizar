import { Routes, Route } from 'react-router-dom';
import Login from './Login.js';
import Home from './Home.js';
import '../css/App.css';

const App = () => {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
