import "./P404.css"
import { useNavigate } from "react-router-dom"

function P404() {
    const navigate = useNavigate();

    return (
        <div className="mainPage">
            <h1 className="notFoundheader">Page Not Found!...</h1>
            <h1 className="notFoundheaderType">404 <span>Error</span></h1>
            <button onClick={() => {
                navigate("/")
            }}>Back To home</button>
        </div>
    )
}

export default P404