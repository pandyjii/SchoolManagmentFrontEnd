import { Outlet, useNavigate } from "react-router-dom";


function StudentPrivateComponent(){
    const Navigate=useNavigate();
    // localStorage.clear();
   
    const data=localStorage.getItem('user');
    return data?<Outlet/>:Navigate('/sinup')

   
    
}

export default StudentPrivateComponent;