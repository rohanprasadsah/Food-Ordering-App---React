import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useInternetStatus from "../utils/useInternetStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
    const data = useContext(UserContext);
    let [btnName, setBtnName] = useState("Login");
    const onlineStatus = useInternetStatus();
    return (
        <div className="header">
            <div>
                <img className="logo" src={LOGO_URL} alt="logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Oline Status : {onlineStatus ? "🟢" : "🔴"}</li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About us</Link></li>
                    <li><Link to="/contact">Contact us</Link></li>
                    <li><Link to="/grocery">Grocery</Link></li>
                    <li>Cart</li>
                    <button className="login-logout-btn" onClick={() => { setBtnName(btnName === "Login" ? "Logout" : "Login"); }}>{btnName}</button>
                    <li className="text-emerald-300 font-bold">{data.loggedInUSer}</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;