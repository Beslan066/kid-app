
import React from "react";
import './App.css';
import { Routes, Route } from 'react-router-dom';


import Homepage from './pages/Homepage';
import Events from './pages/Events';
import Quiz from './pages/Quiz';
import Books from './pages/Books';
import Multfilms from './pages/Multfilms';
import Statistics from './pages/Statistics';
import Games from './pages/Games';



import Nav from './components/Navbar.jsx';

function App() {
  return (
    

    <>

    <Routes>
        <Route path='/' element={<Nav />}>
        
          <Route index element={<Homepage />}/> 
          <Route path='/quiz' element={<Quiz />} />
          <Route path='/books' element={<Books />} />
          <Route path='/stats' element={<Statistics />} />
          <Route path='/events' element={<Events />} />
          <Route path='/mults' element={<Multfilms />} />
          <Route path='/games' element={<Games />} />
        
        </Route>
    </Routes>
    </>
    

    


  );
}

export default App;
