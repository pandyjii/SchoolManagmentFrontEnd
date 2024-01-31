import { Link, useNavigate } from "react-router-dom";
import './Component.css'
export default function StudentNavbar({ StudentNav }) {
    const auth = JSON.parse(localStorage.getItem('user'));

    // console.log(auth.name)



    const Navigate = useNavigate();
    function logout() {
        localStorage.clear();
        Navigate('/sinups');
    }



    return (

        <>
            {
                auth ?
                    <div className="Navbar-component">
                        <img className="logo-img" alt="web-img" src="https://thumbs.dreamstime.com/z/initial-letter-sp-logotype-company-name-blue-circle-swoosh-design-vector-logo-business-identity-203854937.jpg" />
                        <Link to={'/'}>Product</Link>
                        <Link to={'/add'}>AddProduct</Link>
                        <Link to={'/update'}>UpProduct</Link>
                        <Link onClick={logout} to={'/sinup'}>SinOut  {auth ? <span className="name">({auth.name})</span> : ''}</Link>

                    </div>
                    :
                    <div className="Navbar-Login">
                        <img className="logo-img" alt="web-img" src="https://thumbs.dreamstime.com/z/initial-letter-sp-logotype-company-name-blue-circle-swoosh-design-vector-logo-business-identity-203854937.jpg" />
                        <Link to={'/student'} >Student  </Link>
                        <Link to={'/teacher'} onClick={StudentNav} >Teacher  </Link>
                        <Link to={'/sinups'}></Link>
                        <Link to={'/logins'}></Link>

                    </div>
            }
        </>

    )
}

