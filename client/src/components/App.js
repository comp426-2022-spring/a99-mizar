import { Routes, Route } from 'react-router-dom';
import Resources from './Resources.js';
import Sentiment from './Sentiment.js';
import Home from './Home.js';
import '../css/App.css';

const App = () => {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/resources' element={<Resources />} />
        <Route path='/sentiment' element={<Sentiment />} />
      </Routes>
    </div>
  );
}

export default App;
