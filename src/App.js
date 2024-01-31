
import './App.css';
import Navbar from './TeacherDashboard/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sinup from './TeacherDashboard/Sinup';

import UpProduct from './TeacherDashboard/UpProduct';
import AddProduct from './TeacherDashboard/Addproduct';
import Product from './TeacherDashboard/Product';
import PrivateComponent from './TeacherDashboard/PrivateCompo';
import Login from './TeacherDashboard/Login';
import StudentPrivateComponent from './StudentDashbord/StudentPrivateComponent';
import StudentAddProduct from './StudentDashbord/AddProduct';
import StudentProduct from './StudentDashbord/HomeStudent';
import StudentSinup from './StudentDashbord/StudentSinup';
import StudentLogin from './StudentDashbord/StudentLogin';
import StudentNavbar from './StudentDashbord/StudentNavbar';
import Student from './StudentDashbord/Student';
import Teacher from './TeacherDashboard/Teacher';
import { useState } from 'react';
import UpStudent from './StudentDashbord/UpdateStudent';

function App() {
   const [student, setStudent] = useState(true)

   function StudentNav() {
      setStudent(!student)
      console.log(student);
   }
   return (

      <>
         {
            student ?
              
                  <BrowserRouter>
                     <Navbar StudentNav={StudentNav} />

                     <Routes>

                        <Route element={<PrivateComponent />}>
                           <Route path='/update/:id' element={<UpProduct />} />
                           <Route path='/add' element={<AddProduct />} />
                           <Route path='/' element={<Product />} />
                        </Route>
                        <Route path='/teacher' element={<Teacher />} />
                        <Route path='/sinupt' element={<Sinup />} />
                        <Route path='/logint' element={<Login />} />
                     </Routes>
                  </BrowserRouter>
             :     
                  <BrowserRouter>
                     <StudentNavbar StudentNav={StudentNav} />

                     <Routes>

                        <Route element={<StudentPrivateComponent />}>

                           <Route path='/add' element={<StudentAddProduct />} />
                           <Route path='/' element={<StudentProduct />} />
                           <Route path='/update/:id' element={<UpStudent/>} />
                        </Route>
                        <Route path='/student' element={<Student />} />
                        <Route path='/sinups' element={<StudentSinup />} />
                        <Route path='/logins' element={<StudentLogin />} />
                     </Routes>
                  </BrowserRouter>

                 
               
       }
      </>

   );
}

export default App;
