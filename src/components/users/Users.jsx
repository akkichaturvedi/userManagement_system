import "./Users.css"
import Navbar from "../navbar/Navbar"
import { useState, useEffect } from "react";
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { useIndexedDB } from "react-indexed-db";


function Users() {

    const { getAll, deleteRecord } = useIndexedDB("myData")
    const [userData, setUserdata] = useState([]);

    useEffect(() => {
        getAll().then(dataFromstorage => {
            setUserdata(dataFromstorage);
        })
    }, [])

    console.log(userData);

    // let dbinstringF = localStorage.getItem("users");
    // let dbinArrF = JSON.parse(dbinstringF);
    // const [userDbdata, setUpdateduserdata] = useState(dbinArrF)


    // let imgeurldata = localStorage.getItem("imageUrls")

    // const [lsImageUrls, setImageUrls] = useState([]);

    // useEffect(() => {
    //     setImageUrls([...lsImageUrls, imgeurldata])
    // }, [imgeurldata])


    const deleteUsers = (data) => {
        if (data) {
            deleteRecord(data).then(event => {
                toast("User deleted successfully")
            })
            
            getAll().then(dataFromstorage => {
                setUserdata(dataFromstorage);
            })
        }
    }


    // return (
    //     <>
    //         <Navbar />
    //     </>
    // )
    return (
        <>
            <Navbar />
            <h1 style={{ textAlign: "center", fontFamily: "monospace", fontSize: "30px" }}>User Listed Here</h1>

            {userData.map((data, indx) => {
                if (userData.length >= 0) {
                    return (
                        <div key={indx}>
                            <div className="users" key={indx}>
                                <div className="userleft">
                                    <div className="image">
                                        <img src={data.previue} alt="userImage" />
                                    </div>
                                </div>
                                <div className="userRight">
                                    <h3 >id : <span id="id">{indx + 1}</span></h3>
                                    <h3>Name : {data.userdetails.name}</h3>
                                    <h3>Number : {data.userdetails.mnumber}</h3>
                                    <h3>email : {data.userdetails.email}</h3>
                                    <h3>Address : {data.userdetails.add}</h3>
                                    <button className="deleteUser"
                                        onClick={() => { deleteUsers(data.id) }}
                                    >

                                        Delete user
                                    </button>
                                </div>
                            </div>
                        </div>
                    )
                } else {
                    return <h2 style={{ textAlign: "center", color: "white" }}>No users are Listed</h2>
                }
            })}
        </>
    )

}

export default Users