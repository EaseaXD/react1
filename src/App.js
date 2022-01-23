import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css'
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Dialogs from './components/Dialogs';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { addPost } from './redux/state';


const App =(props) => {
  
  return (
   
    <BrowserRouter>
   
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path="/profile/*" element={<Profile profilePage={props.state.profilePage} addPost={props.addPost} updateNewPostChangeText={props.updateNewPostChangeText} />} />
            <Route path="/dialogs/*" element={<Dialogs state= {props.state.dialogsPage} dialogsMessage={props.state.dialogsPage.dialogsMessage} />} />
          </Routes>
        </div>
      
      </div>
    </BrowserRouter>
  );
}




export default App;
