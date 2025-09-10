import { useState, useEffect, useContext } from "react";
import RestaurantCard, { withPromotedLabel, withWithin30minsabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useInternetStatus from "../utils/useInternetStatus";
import { RESTAURANT_URL } from "../utils/constants";
import useFetchRestaurant from "../utils/useFetchRestaurant";
import UserContext from "../utils/UserContext";
import Footer from "./Footer";

const Body = () => {
    const { loggedInUSer, setUserName } = useContext(UserContext);

    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");

    const stateresList = useFetchRestaurant(RESTAURANT_URL);
    useEffect(() => {
        setFilteredRestaurants(stateresList);
    }, [stateresList])

    // console.log("stateresList" + stateresList);

    const PromotedRestaurantCard = withPromotedLabel(RestaurantCard);
    const Within30minsRestaurantCard = withWithin30minsabel(RestaurantCard);

    const internetStatus = useInternetStatus();
    if (internetStatus === false) {
        return (
            <div className="status-body flex flex-col items-center justify-center h-screen">
                <h1>Looks like you are offline!! Please check your internet connection!!</h1>
            </div>
        )
    }

    //Conditional Rendering by using Ternary Operator
    return (filteredRestaurants.length === 0) ? <Shimmer /> : (
        <div className="body bg-gradient-to-br from-gray-50 via-white to-gray-100 min-h-screen">

            <div className="control-panel bg-white border-b-4 border-emerald-100 shadow-xl">
                <div className="flex flex-col lg:flex-row lg:flex-wrap justify-center items-stretch lg:items-center gap-4 p-4 sm:p-6 bg-gradient-to-r from-white via-emerald-50 to-white">

                    {/* Search Section - Full width on mobile */}
                    <div className="Search flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3 bg-white p-3 sm:p-2 rounded-2xl shadow-lg border border-emerald-100 hover:shadow-xl transition-all duration-300 w-full lg:w-auto">
                        <div className="flex items-center gap-2 sm:gap-3">
                            <div className="text-xl sm:text-2xl px-1 sm:px-2">🔍</div>
                            <input 
                                type="text" 
                                className="search-box flex-1 px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 shadow-sm bg-gray-50 focus:bg-white transition-all duration-300 text-sm sm:text-base" 
                                placeholder="🍽️ Search restaurants..." 
                                value={searchText} 
                                onChange={(e) => setSearchText(e.target.value)}
                            />
                        </div>
                        <button 
                            className="search-btn w-full sm:w-auto px-4 py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white font-bold border-none rounded-lg cursor-pointer transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 text-sm sm:text-base" 
                            onClick={() => {
                                const filteredList = stateresList.filter((res) => (
                                    res.info.name.toLowerCase().includes(searchText.toLowerCase())
                                ))
                                setFilteredRestaurants(filteredList);
                            }}
                        >
                            🔍 Search
                        </button>
                    </div>

                    {/* Filter Buttons - Stack on mobile */}
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full lg:w-auto">
                        <div className="bg-white p-2 rounded-2xl shadow-lg border border-yellow-100 hover:shadow-xl transition-all duration-300">
                            <button className="w-full px-4 py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white font-bold border-none rounded-lg cursor-pointer transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 text-sm sm:text-base" onClick={() => {
                                const filteredList = filteredRestaurants.filter((res) => res.info.avgRating > 4.5)
                                setFilteredRestaurants(filteredList);
                            }}>⭐ Top Rated</button>
                        </div>

                        {/* Username section - Hidden on small mobile, visible on sm+ */}
                        <div className="username-section hidden sm:flex items-center gap-2 lg:gap-3 bg-white p-2 rounded-2xl shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300">
                            <div className="text-lg sm:text-2xl">👤</div>
                            <label className="font-bold text-gray-700 text-sm lg:text-base whitespace-nowrap">User:</label>
                            <input 
                                className="username-input px-2 py-2 lg:px-4 lg:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm w-24 lg:w-32 bg-gray-50 focus:bg-white transition-all duration-300 text-sm lg:text-base" 
                                type="text" 
                                value={loggedInUSer} 
                                onChange={(e) => setUserName(e.target.value)}
                            />
                        </div>
                    </div>
                </div>

                {/* Quick Stats Banner */}
                <div className="stats-banner bg-gradient-to-r from-emerald-100 to-green-100 py-3 sm:py-4 px-3 sm:px-6">
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-6 lg:gap-8 text-xs sm:text-sm font-bold text-emerald-800">
                        <div className="flex items-center gap-2">
                            <span className="text-base sm:text-lg">🏦</span>
                            <span className="text-center sm:text-left">{filteredRestaurants.length} Restaurants</span>
                        </div>
                        <div className="hidden sm:flex items-center gap-2">
                            <span className="text-base sm:text-lg">🚚</span>
                            <span>Free Delivery Above ₹299</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-base sm:text-lg">⏱️</span>
                            <span className="text-center sm:text-left">Avg: 25-35 mins</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Restaurant Cards Section with Enhanced Container */}
            <div className="restaurants-section py-6 sm:py-8">
                <div className="max-w-7xl mx-auto px-3 sm:px-4">
                    <div className="text-center mb-6 sm:mb-8">
                        <h2 className="text-2xl sm:text-3xl font-black text-gray-800 mb-2">🍽️ Available Restaurants</h2>
                        <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-emerald-500 to-green-600 mx-auto rounded-full"></div>
                    </div>

                    {/* Responsive grid for cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 p-3 sm:p-5">
                        {/* {console.log(filteredRestaurants)} */}
                        {filteredRestaurants.map((restaurant, index) => (
                            <div key={restaurant.info.id} className="restaurant-card-wrapper animate-fadeInUp" style={{ animationDelay: `${index * 0.05}s` }}>
                                <Link to={"/restaurant/" + restaurant.info.id}>
                                    {/* Optional Chaining */}
                                    {"promoted" in restaurant.info ?
                                        restaurant.info.promoted === true ? <PromotedRestaurantCard swiggyRestaurant={restaurant} /> : <RestaurantCard swiggyRestaurant={restaurant} />
                                        :
                                        restaurant.info.sla.deliveryTime <= 30 ? <Within30minsRestaurantCard swiggyRestaurant={restaurant} /> : <RestaurantCard swiggyRestaurant={restaurant} />
                                    }
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Body;