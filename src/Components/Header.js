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
        <div className="header flex justify-between items-center px-8 lg:px-12 py-4 bg-gradient-to-r from-white via-gray-50 to-white shadow-xl sticky top-0 z-50 border-b border-gray-100">
            <div className="logo-section flex items-center gap-3">
                <img className="logo w-14 h-14 lg:w-16 lg:h-16 rounded-full cursor-pointer hover:scale-110 hover:rotate-12 transition-all duration-300" src={LOGO_URL} alt="logo" />
                <div className="brand-name hidden sm:block">
                    <h1 className="text-2xl font-black text-gray-800 tracking-wide">FusionBowl</h1>
                    <p className="text-xs text-gray-500 font-medium">Fusion of Flavors</p>
                </div>
            </div>
            <div className="nav-items">
                <ul className="flex list-none gap-2 lg:gap-6 m-0 p-0 text-sm lg:text-base items-center">
                    <li className="hidden md:flex items-center gap-2 px-3 py-2 rounded-full bg-gradient-to-r from-emerald-50 to-green-50 border border-emerald-200 font-medium text-emerald-700">
                        <span className="text-xs font-bold">Status:</span> {onlineStatus ? "🟢 Online" : "🔴 Offline"}
                    </li>
                    <li className="nav-link">
                        <Link to="/" className="px-4 py-2 rounded-lg font-semibold text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-emerald-500 hover:to-green-600 transition-all duration-300 hover:shadow-lg transform hover:scale-105">🏠 Home</Link>
                    </li>
                    <li className="nav-link">
                        <Link to="/about" className="px-4 py-2 rounded-lg font-semibold text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-emerald-500 hover:to-green-600 transition-all duration-300 hover:shadow-lg transform hover:scale-105">ℹ️ About</Link>
                    </li>
                    <li className="nav-link">
                        <Link to="/contact" className="px-4 py-2 rounded-lg font-semibold text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-emerald-500 hover:to-green-600 transition-all duration-300 hover:shadow-lg transform hover:scale-105">📞 Contact</Link>
                    </li>
                    <li className="nav-link">
                        <Link to="/grocery" className="px-4 py-2 rounded-lg font-semibold text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-emerald-500 hover:to-green-600 transition-all duration-300 hover:shadow-lg transform hover:scale-105">🛒 Grocery</Link>
                    </li>
                    <li className="nav-link relative">
                        <Link to="/cart" className="flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-600 transition-all duration-300 hover:shadow-lg transform hover:scale-105">
                            🛍️ Cart
                            {carditems.length > 0 && (
                                <span className="bg-gradient-to-r from-red-500 to-pink-600 text-white text-xs font-black px-2 py-1 rounded-full min-w-[1.5rem] h-6 flex items-center justify-center shadow-lg">
                                    {carditems.length}
                                </span>
                            )}
                        </Link>
                    </li>
                    <button className="login-logout-btn w-32 px-4 py-2 bg-white border-2 border-emerald-200 text-emerald-600 font-bold rounded-lg cursor-pointer hover:bg-emerald-50 hover:border-emerald-400 hover:text-emerald-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105 active:scale-95 flex items-center justify-center" onClick={() => { setBtnName(btnName === "Login" ? "Logout" : "Login"); }}>
                        {btnName === "Login" ? "🔐 Login" : "🚪 Logout"}
                    </button>
                    <li className="user-info hidden lg:flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-100 to-green-100 rounded-full border border-emerald-200">
                        <span className="text-2xl">👤</span>
                        <span className="text-emerald-700 font-bold text-sm">{data.loggedInUSer}</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header;