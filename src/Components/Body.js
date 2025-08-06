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
                <div className="flex flex-wrap justify-center items-center gap-4 p-6 bg-gradient-to-r from-white via-emerald-50 to-white">

                    <div className="Search flex items-center gap-3 bg-white p-2 rounded-2xl shadow-lg border border-emerald-100 hover:shadow-xl transition-all duration-300">
                        <div className="text-2xl px-2">🔍</div>
                        <input type="text" className="search-box px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 shadow-sm min-w-[200px] bg-gray-50 focus:bg-white transition-all duration-300" placeholder="🍽️ Search restaurants..." value={searchText} onChange={(e) => {
                            setSearchText(e.target.value);
                        }}></input>
                        <button className="search-btn px-6 py-3 bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white font-bold border-none rounded-lg cursor-pointer transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95" onClick={() => {
                            const filtteredList = stateresList.filter((res) => (
                                res.info.name.toLowerCase().includes(searchText.toLowerCase())
                            ))
                            setFilteredRestaurants(filtteredList);
                            // console.log(filtteredList);
                        }}>🔍 Search</button>
                    </div>

                    <div className="bg-white p-2 rounded-2xl shadow-lg border border-yellow-100 hover:shadow-xl transition-all duration-300">
                        <button className="px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white font-bold border-none rounded-lg cursor-pointer transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95" onClick={() => {
                            const filteredList = filteredRestaurants.filter((res) => res.info.avgRating > 4.5)
                            setFilteredRestaurants(filteredList);
                        }}>⭐ Top Rated Restaurants</button>
                    </div>

                    <div className="username-section flex items-center gap-3 bg-white p-2 rounded-2xl shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300">
                        <div className="text-2xl">👤</div>
                        <label className="font-bold text-gray-700 whitespace-nowrap">UserName :</label>
                        <input className="username-input px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm min-w-[150px] bg-gray-50 focus:bg-white transition-all duration-300" type="text" value={loggedInUSer} onChange={(e) => {
                            setUserName(e.target.value);
                        }}></input>
                    </div>
                </div>

                {/* Quick Stats Banner */}
                <div className="stats-banner bg-gradient-to-r from-emerald-100 to-green-100 py-4 px-6">
                    <div className="flex justify-center items-center gap-8 text-sm font-bold text-emerald-800">
                        <div className="flex items-center gap-2">
                            <span className="text-lg">🏪</span>
                            <span>{filteredRestaurants.length} Restaurants Available</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-lg">🚚</span>
                            <span>Free Delivery on Orders Above ₹299</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-lg">⏱️</span>
                            <span>Average Delivery: 25-35 mins</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Restaurant Cards Section with Enhanced Container */}
            <div className="restaurants-section py-8">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-black text-gray-800 mb-2">🍽️ Available Restaurants</h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-green-600 mx-auto rounded-full"></div>
                    </div>

                    <div className="flex flex-wrap justify-center gap-5 p-5">
                        {/* {console.log(filteredRestaurants)} */}
                        {filteredRestaurants.map((restaurant, index) => (
                            <div key={restaurant.info.id} className="restaurant-card-wrapper animate-fadeInUp" style={{ animationDelay: `${index * 0.1}s` }}>
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