import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Welcome from './pages/Welcome';
import Home from './pages/Home';
import CatWelcome from './pages/CatWelcome';

function App() {

  return (
    <BrowserRouter basename={'/'} >
      <Routes>
        <Route index path='/' element={<Welcome />} />
        <Route path='/home' element={<Home />} />
        <Route path='/cat' element={<CatWelcome />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
