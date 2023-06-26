import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import WorkExperience from './Components/WorkExperience';
import Project from './Components/Project';
import Education from './Components/Education';
import Resume from './Components/Resume';

function App() {
  return (
    <div >
      <BrowserRouter>

        <Navbar />
        <div style={{marginTop:'72px'}}>
        <Routes>
            <Route path='/' element={<Navigate to="portfolio/home" />}/>
            <Route path='portfolio/home' element={<Home/>} />
            <Route path='portfolio/resume' element={<Resume/>} />
            <Route path='portfolio/education' element={<Education/>} />
            <Route path='portfolio/experience' element={<WorkExperience/>} />
            <Route path='portfolio/project' element={<Project/>} />
        </Routes>
        
        </div>
        
      </BrowserRouter>
    </div>
  )
}

export default App;
