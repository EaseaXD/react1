import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css'
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Dialogs from './components/Dialogs';
import { BrowserRouter, Route, Routes } from 'react-router-dom';



const App =(props) => {
  
  return (
   
    <BrowserRouter>
   
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path="/profile/*" element={<Profile dispatch={props.dispatch} store={props.store}  />} />
            <Route path="/dialogs/*" element={<Dialogs dispatch={props.dispatch} store ={props.store}  />} />
          </Routes>
        </div>
      
      </div>
    </BrowserRouter>
  );
}




export default App;
