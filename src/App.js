import logo from './logo.svg';
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
            <Route path="/profile/*" element={<Profile state={props.state.profilePage} />} />
            <Route path="/dialogs/*" element={<Dialogs state= {props.state.dialogsPage} dialogsMessage={props.state.dialogsPage.dialogsMessage} />} />
          </Routes>
        </div>
      
      </div>
    </BrowserRouter>
  );
}




export default App;
