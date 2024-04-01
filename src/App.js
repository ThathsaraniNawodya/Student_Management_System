import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom'; // Import for BrowserRouter
import AddStudent from './pages/AddStudent';
import UpdateStudent from './pages/UpdateStudent';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import DeleteStudent from './pages/DeleteStudent';
import ListStudent from './pages/ListStudent';
import Admin from './pages/Admin';
import Home from './pages/Home';
import Calendar from './pages/Calendar';
import Login from './pages/Login';
import Dashbord from './components/Dashboard';
// Add your other component imports here

function App() {
  return (
  
    <BrowserRouter>
        <Sidebar />
          <Navbar />
          
          <Routes>
              
              <Route path="/studentlogin" element={<Login/>}></Route>
             < Route path="/dashbord" element={<Dashbord/>}></Route>
               <Route path="/addstudent" element={<AddStudent />}></Route>
               <Route path="/updatestudent" element={<UpdateStudent />}></Route>
               <Route path="/deletestudent" element={<DeleteStudent />} ></Route>
               <Route path="/liststudent" element={<ListStudent />} ></Route>
               <Route path="/admin" element={<Admin />} ></Route>
               <Route path="/home" element={<Home />} ></Route>
               <Route path="/calendar" element={<Calendar />} ></Route>
           </Routes>
          
    
     
    </BrowserRouter>
  );
}

export default App;
