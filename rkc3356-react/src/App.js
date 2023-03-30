import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { pdfjs } from "react-pdf";
import Welcome from './pages/welcome';
import Home from './pages/home';
import Resume from './pages/resume';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function App() {

  return (
    <BrowserRouter basename={'/'} >
      <Routes>
        <Route index path='/' element={<Welcome />} />
        <Route path='/home' element={<Home />} />
        <Route path='/resume' element={<Resume />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
