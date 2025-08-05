import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useInternetStatus from "../utils/useInternetStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
    const data = useContext(UserContext);
    let [btnName, setBtnName] = useState("Login");
    const onlineStatus = useInternetStatus();

    const carditems = useSelector((store) => store.cart.Items);

    return (
        <div className="header flex justify-between items-center px-10 py-3 bg-white shadow-lg sticky top-0 z-50">
            <div>
                <img className="logo w-16 h-16 rounded-full cursor-pointer hover:scale-105 transition-transform duration-300" src={LOGO_URL} alt="logo" />
            </div>
            <div className="nav-items">
                <ul className="flex list-none gap-8 m-0 p-0 text-lg items-center">
                    <li className="cursor-pointer px-3 py-2 rounded-md hover:bg-gray-100 hover:text-blue-600 transition-all duration-200">Online Status : {onlineStatus ? "🟢" : "🔴"}</li>
                    <li className="cursor-pointer px-3 py-2 rounded-md hover:bg-gray-100 hover:text-blue-600 transition-all duration-200"><Link to="/">Home</Link></li>
                    <li className="cursor-pointer px-3 py-2 rounded-md hover:bg-gray-100 hover:text-blue-600 transition-all duration-200"><Link to="/about">About us</Link></li>
                    <li className="cursor-pointer px-3 py-2 rounded-md hover:bg-gray-100 hover:text-blue-600 transition-all duration-200"><Link to="/contact">Contact us</Link></li>
                    <li className="cursor-pointer px-3 py-2 rounded-md hover:bg-gray-100 hover:text-blue-600 transition-all duration-200"><Link to="/grocery">Grocery</Link></li>
                    <li className="cursor-pointer px-3 py-2 rounded-md hover:bg-gray-100 hover:text-blue-600 transition-all duration-200"><Link to="/cart">Cart - ({carditems.length} items)</Link></li>
                    <button className="login-logout-btn px-5 py-2 bg-gray-100 border-none rounded-md cursor-pointer hover:bg-gray-200 hover:text-blue-600 transition-all duration-300" onClick={() => { setBtnName(btnName === "Login" ? "Logout" : "Login"); }}>{btnName}</button>
                    <li className="text-emerald-300 font-bold">{data.loggedInUSer}</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;