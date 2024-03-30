import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Welcome from './pages/welcome';
import Home from './pages/home';
import CatWelcome from './containers/CatWelcome';

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
