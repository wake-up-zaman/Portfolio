import './App.css';
import Header from './Portfolio/Home/Header';
import app from './firebase.init';
import HomePage from './Portfolio/Home/HomePage';
import { Route, Routes } from 'react-router-dom';
import Blogs from './Portfolio/Blogs/Blogs';
import ProjectDetails from './Portfolio/Project/ProjectDetails';
import { ToastContainer } from 'react-bootstrap';

function App() {
  return (
    <>
    <div>
        <Header></Header>
        <Routes>
        <Route path='/' element={<HomePage></HomePage>}></Route>
        <Route path='/home' element={<HomePage></HomePage>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/inventory/:_id' element={<ProjectDetails></ProjectDetails>}></Route>
        </Routes>
        <ToastContainer />
    </div>

    </>


  );
}

export default App;
