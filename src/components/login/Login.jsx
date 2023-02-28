import "./Login.css"
import React, { useState } from "react"
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

let registerDetails = {
    user: "",
    pass: "",
    cpass: "",
    luser: "",
    lpass: ""
}

function Login() {

    const navigate = useNavigate();

    const [details, setDetails] = useState("login")
    // const [registerdata, setregisterdata] = useState(loginDetails)
    const [registerdata, setRegisterdata] = useState(registerDetails)

    const register = () => {
        setDetails("register")
    }

    const manageregisterDetails = (e) => {
        let { name, value } = e.target;
        setRegisterdata({ ...registerdata, [name]: value })
    }

    // const manageLogingetails = (e) => {
    //     let { name, value } = e.target;
    //     setRegisterdata({ ...registerdata, [name]: value })
    // }

    const loginCredintial = () => {
        if (registerdata.luser === "" || registerdata.lpass === "") {
            toast.error('All fields are required');

        } else if (registerdata.luser !== localStorage.getItem("username")) {
            toast.error('Username is unamtched');
        } else if (registerdata.lpass !== localStorage.getItem("cpassword")) {
            toast.error('Password is unamtched');
        } else {

            if (registerdata.luser === localStorage.getItem("username") && registerdata.lpass === localStorage.getItem("cpassword")) {
                setTimeout(() => {
                    toast.success('Successfully Login...');
                }, 200);
                navigate("/home")

            }
        }
    }

    const storeRegisterDetails = () => {
        if (registerdata.user === "" ||
            registerdata.pass === "" ||
            registerdata.cpass === "") {
            // toast.error("All fields are reqired...")

            toast.error('All fields are required');

        } else if (registerdata.pass !== registerdata.cpass) {
            toast.error('Confirm Password not matched');
        } else {
            if (registerdata.user && registerdata.pass && registerdata.cpass) {

                localStorage.setItem("username", registerdata.user)
                localStorage.setItem("password", registerdata.pass)
                localStorage.setItem("cpassword", registerdata.cpass)
                navigate("/home")
                setTimeout(() => {
                    toast.success('Successfully registered...');
                }, 200)
            }

        }

    }


    return (
        <>
            {details === "login" ?
                <div className="login">
                    <h2>Login Detailes</h2>
                    <br />
                    <input type="text" placeholder="Username" name="luser"
                        required
                        value={registerdata.luser}
                        onChange={manageregisterDetails}
                    />
                    <br />
                    <br />
                    <input type="password" placeholder="Password" name="lpass"
                        required
                        value={registerdata.lpass}
                        onChange={manageregisterDetails}
                    />
                    <br />
                    <br />
                    <button onClick={loginCredintial}>Login</button>
                    <ToastContainer />
                    <br />
                    <button onClick={register}>New User register here</button>
                </div>
                :
                <div className="register">
                    <h2>Register Detailes</h2>
                    <br />
                    <input type="text" placeholder="Username" name="user"
                        required
                        value={registerdata.user}
                        onChange={manageregisterDetails}
                    />
                    <br />
                    <br />
                    <input type="password" placeholder="Password" name="pass"
                        required
                        value={registerdata.pass}
                        onChange={manageregisterDetails}
                    />
                    <br />
                    <br />
                    <input type="password" placeholder="C_Password" name="cpass"
                        required
                        value={registerdata.cpass}
                        onChange={manageregisterDetails}
                    />
                    <br />
                    <br />
                    <button onClick={storeRegisterDetails}>Register</button>
                    <ToastContainer />
                </div>
            }
        </>
    )

}

export default Login