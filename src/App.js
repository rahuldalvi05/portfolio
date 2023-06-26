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
            <Route path='/' element={<Navigate to="home" />}/>
            <Route path='home' element={<Home/>} />
            <Route path='resume' element={<Resume/>} />
            <Route path='education' element={<Education/>} />
            <Route path='experience' element={<WorkExperience/>} />
            <Route path='project' element={<Project/>} />
        </Routes>
        
        </div>
        
      </BrowserRouter>
    </div>
  )
}

export default App;
