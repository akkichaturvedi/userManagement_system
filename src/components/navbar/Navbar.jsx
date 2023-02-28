import "./Navbar.css"
import { Link, useNavigate } from "react-router-dom"
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

function Navbar() {

    const navigate = useNavigate();

    return (
        <div className="navbar">
            <ul>
                <li> Logo</li>
                <Link to={"/home"} className="link"><li> Home</li></Link>
                <Link to={"/users"} className="link"><li> users</li></Link>
                <li onClick={() => {
                    navigate("/")
                    // setTimeout(() => {
                    //     toast.success('Logout Successfully...');
                    // }, 200);
                }} className="llink"> Logout <ToastContainer /></li>
            </ul>
        </div>
    )
}

export default Navbar