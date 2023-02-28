import { useEffect, useState } from "react"
import "./Home.css"
import Navbar from "../navbar/Navbar"
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { useIndexedDB } from "react-indexed-db";

let details = {
    // id: "",
    name: "",
    mnumber: "",
    email: "",
    add: "",
    // file: "",
}

// const dataFromLS = () => {
//     let data = localStorage.getItem("users");
//     // console.log(data);
//     if (data) {
//         return JSON.parse(data)
//     } else {
//         return []
//     }
// }


function Home() {
    const { add } = useIndexedDB('myData');

    // // return (<div>{JSON.stringify(db)}</div>);

    // const [userArr, setUserArr] = useState(dataFromLS())

    const [userdetails, setUserdetails] = useState(details)

    const handleDetails = (e) => {
        let { name, value } = e.target;
        setUserdetails({ ...userdetails, [name]: value })
    }

    // // Managing file input take image from user..
    const [image, setImage] = useState();
    const [previue, setPreviue] = useState();

    useEffect(() => {
        if (image) {
            const reader = new FileReader();

            reader.onloadend = () => {
                setPreviue(reader.result)
            }
            reader.readAsDataURL(image)
        } else {
            setPreviue(null)
        }
    }, [image])

    // const [imageurlarr, setImageurlarr] = useState([])

    // useEffect(() => {
    //     localStorage.setItem("imageUrls", JSON.stringify(previue))
    // }, [previue])



    // //for storing userdetails in array
    const addUser = () => {

        if (userdetails.name === "" || userdetails.email === "") {
            toast("Enter Details")
        }
        else {
            if (previue || userdetails.name || userdetails.email) {
                add({
                    previue, userdetails
                }).then(
                    event => {
                        console.log("Id generated...");
                    }
                    ,
                    error => {
                        console.log("Error occured");
                        // console.log(error);
                    }
                )
            }
            setImage("")
            setUserdetails(details)
            toast.success("User Added Successfully.")
        }
    }

    // for sotring data into a localstorage
    // useEffect(() => {
    //     localStorage.setItem("users", JSON.stringify(userArr)) //JSON.stringy use to store data in the form of string because you can only store string data in localstorage 
    // }, [userArr])


    return (
        <>
            <Navbar />
            <div className="home">
                <div className="homeleft">
                    <input type="text" placeholder="Full name"
                        autoComplete="off"
                        required
                        name="name"
                        value={userdetails.name}
                        onChange={handleDetails}
                    />
                    <br />
                    <br />
                    <input type="number" placeholder="mobile Number"
                        autoComplete="off"
                        required
                        name="mnumber"
                        value={userdetails.mnumber}
                        onChange={handleDetails}
                    />
                    <br />
                    <br />
                    <input type="email" placeholder="E-mail"
                        autoComplete="off"
                        required
                        name="email"
                        value={userdetails.email}
                        onChange={handleDetails}
                    />
                    <br />
                    <br />
                    <input type="text" placeholder="Address"
                        autoComplete="off"
                        required
                        name="add"
                        value={userdetails.add}
                        onChange={handleDetails}
                    />
                    <br />
                    <br />
                    <button onClick={addUser} style={{ backgroundColor: "lightgreen", color: "white" }}>Add User</button>
                    {/* <ToastContainer /> */}
                </div>


                <div className="homeright">
                    <div className="image">
                        <img src={previue} alt="userImage" />
                    </div>
                    <div className="file">
                        <input type="file"
                            accept="image/*"
                            onChange={(e) => {
                                const file = e.target.files[0];
                                if (file && file.type.substring(0, 5) === "image") {
                                    setImage(file)
                                } else {
                                    setImage(null)
                                }
                            }}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home