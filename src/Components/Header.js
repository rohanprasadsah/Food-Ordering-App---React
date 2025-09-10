import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useInternetStatus from "../utils/useInternetStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
    const data = useContext(UserContext);
    let [btnName, setBtnName] = useState("Login");
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const onlineStatus = useInternetStatus();

    const carditems = useSelector((store) => store.cart.Items);

    return (
        <div className="header bg-gradient-to-r from-white via-gray-50 to-white shadow-xl sticky top-0 z-50 border-b border-gray-100">
            {/* Main Header Bar */}
            <div className="flex justify-between items-center px-4 sm:px-6 lg:px-8 py-3 lg:py-4">
                {/* Logo Section */}
                <div className="logo-section flex items-center gap-2 sm:gap-3">
                    <img className="logo w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 rounded-full cursor-pointer hover:scale-110 hover:rotate-12 transition-all duration-300" src={LOGO_URL} alt="logo" />
                    <div className="brand-name">
                        <h1 className="text-lg sm:text-xl lg:text-2xl font-black text-gray-800 tracking-wide">FusionBowl</h1>
                        <p className="text-xs text-gray-500 font-medium hidden sm:block">Fusion of Flavors</p>
                    </div>
                </div>

                {/* Desktop Navigation */}
                <div className="nav-items hidden lg:block">
                    <ul className="flex list-none gap-4 xl:gap-6 m-0 p-0 text-sm xl:text-base items-center">
                        <li className="flex items-center gap-2 px-3 py-2 rounded-full bg-gradient-to-r from-emerald-50 to-green-50 border border-emerald-200 font-medium text-emerald-700">
                            <span className="text-xs font-bold">Status:</span> {onlineStatus ? "🟢 Online" : "🔴 Offline"}
                        </li>
                        <li className="nav-link">
                            <Link to="/" className="px-3 py-2 rounded-lg font-semibold text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-emerald-500 hover:to-green-600 transition-all duration-300 hover:shadow-lg transform hover:scale-105">🏠 Home</Link>
                        </li>
                        <li className="nav-link">
                            <Link to="/about" className="px-3 py-2 rounded-lg font-semibold text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-emerald-500 hover:to-green-600 transition-all duration-300 hover:shadow-lg transform hover:scale-105">ℹ️ About</Link>
                        </li>
                        <li className="nav-link">
                            <Link to="/contact" className="px-3 py-2 rounded-lg font-semibold text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-emerald-500 hover:to-green-600 transition-all duration-300 hover:shadow-lg transform hover:scale-105">📞 Contact</Link>
                        </li>
                        <li className="nav-link">
                            <Link to="/grocery" className="px-3 py-2 rounded-lg font-semibold text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-emerald-500 hover:to-green-600 transition-all duration-300 hover:shadow-lg transform hover:scale-105">🛒 Grocery</Link>
                        </li>
                        <li className="nav-link relative">
                            <Link to="/cart" className="flex items-center gap-2 px-3 py-2 rounded-lg font-semibold text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-600 transition-all duration-300 hover:shadow-lg transform hover:scale-105">
                                🛍️ Cart
                                {carditems.length > 0 && (
                                    <span className="bg-gradient-to-r from-red-500 to-pink-600 text-white text-xs font-black px-2 py-1 rounded-full min-w-[1.5rem] h-6 flex items-center justify-center shadow-lg">
                                        {carditems.length}
                                    </span>
                                )}
                            </Link>
                        </li>
                        <button className="login-logout-btn px-4 py-2 bg-white border-2 border-emerald-200 text-emerald-600 font-bold rounded-lg cursor-pointer hover:bg-emerald-50 hover:border-emerald-400 hover:text-emerald-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105 active:scale-95 flex items-center justify-center" onClick={() => { setBtnName(btnName === "Login" ? "Logout" : "Login"); }}>
                            {btnName === "Login" ? "🔐 Login" : "🚪 Logout"}
                        </button>
                        <li className="user-info flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-emerald-100 to-green-100 rounded-full border border-emerald-200">
                            <span className="text-lg">👤</span>
                            <span className="text-emerald-700 font-bold text-sm truncate max-w-24">{data.loggedInUSer}</span>
                        </li>
                    </ul>
                </div>

                {/* Mobile Menu Button & Cart */}
                <div className="lg:hidden flex items-center gap-2">
                    {/* Mobile Cart */}
                    <Link to="/cart" className="relative p-2 rounded-lg bg-orange-100 hover:bg-orange-200 transition-all duration-300">
                        <span className="text-xl">🛍️</span>
                        {carditems.length > 0 && (
                            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full min-w-[1.25rem] h-5 flex items-center justify-center">
                                {carditems.length}
                            </span>
                        )}
                    </Link>
                    
                    {/* Hamburger Menu */}
                    <button 
                        className="p-2 rounded-lg hover:bg-gray-100 transition-all duration-300"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <div className="space-y-1">
                            <div className={`w-6 h-0.5 bg-gray-700 transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
                            <div className={`w-6 h-0.5 bg-gray-700 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></div>
                            <div className={`w-6 h-0.5 bg-gray-700 transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
                        </div>
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Menu */}
            <div className={`lg:hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                <div className="px-4 pb-4 bg-gray-50 border-t border-gray-200">
                    {/* Online Status */}
                    <div className="flex items-center justify-center gap-2 px-3 py-2 mb-3 rounded-lg bg-gradient-to-r from-emerald-50 to-green-50 border border-emerald-200">
                        <span className="text-xs font-bold text-emerald-700">Status:</span>
                        <span className="text-emerald-700 font-medium">{onlineStatus ? "🟢 Online" : "🔴 Offline"}</span>
                    </div>
                    
                    {/* Navigation Links */}
                    <div className="space-y-2">
                        <Link to="/" className="flex items-center gap-3 px-4 py-3 rounded-lg font-semibold text-gray-700 hover:bg-emerald-100 hover:text-emerald-700 transition-all duration-300" onClick={() => setIsMobileMenuOpen(false)}>
                            <span className="text-lg">🏠</span> Home
                        </Link>
                        <Link to="/about" className="flex items-center gap-3 px-4 py-3 rounded-lg font-semibold text-gray-700 hover:bg-emerald-100 hover:text-emerald-700 transition-all duration-300" onClick={() => setIsMobileMenuOpen(false)}>
                            <span className="text-lg">ℹ️</span> About
                        </Link>
                        <Link to="/contact" className="flex items-center gap-3 px-4 py-3 rounded-lg font-semibold text-gray-700 hover:bg-emerald-100 hover:text-emerald-700 transition-all duration-300" onClick={() => setIsMobileMenuOpen(false)}>
                            <span className="text-lg">📞</span> Contact
                        </Link>
                        <Link to="/grocery" className="flex items-center gap-3 px-4 py-3 rounded-lg font-semibold text-gray-700 hover:bg-emerald-100 hover:text-emerald-700 transition-all duration-300" onClick={() => setIsMobileMenuOpen(false)}>
                            <span className="text-lg">🛒</span> Grocery
                        </Link>
                    </div>
                    
                    {/* User Info & Login Button */}
                    <div className="mt-4 pt-4 border-t border-gray-300 space-y-3">
                        <div className="flex items-center justify-center gap-2 px-3 py-2 bg-emerald-100 rounded-lg">
                            <span className="text-lg">👤</span>
                            <span className="text-emerald-700 font-bold text-sm">{data.loggedInUSer}</span>
                        </div>
                        <button className="w-full px-4 py-3 bg-white border-2 border-emerald-200 text-emerald-600 font-bold rounded-lg hover:bg-emerald-50 hover:border-emerald-400 hover:text-emerald-700 transition-all duration-300 shadow-md" onClick={() => { setBtnName(btnName === "Login" ? "Logout" : "Login"); setIsMobileMenuOpen(false); }}>
                            {btnName === "Login" ? "🔐 Login" : "🚪 Logout"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;