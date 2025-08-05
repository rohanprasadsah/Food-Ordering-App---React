import { useState, useEffect, useContext } from "react";
import RestaurantCard, { withPromotedLabel, withWithin30minsabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useInternetStatus from "../utils/useInternetStatus";
import { RESTAURANT_URL } from "../utils/constants";
import useFetchRestaurant from "../utils/useFetchRestaurant";
import UserContext from "../utils/UserContext";

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
        <div className="body">
            <div className="filter flex flex-wrap justify-center items-center gap-4 p-6 bg-white">
                <div className="Search flex items-center gap-3">
                    <input type="text" className="search-box px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm min-w-[200px]" placeholder="Search restaurants..." value={searchText} onChange={(e) => {
                        setSearchText(e.target.value);
                    }}></input>
                    <button className="search-btn px-6 py-3 bg-blue-600 text-white font-medium border-none rounded-lg cursor-pointer hover:bg-blue-700 transition-colors duration-300 shadow-sm" onClick={() => {
                        const filtteredList = stateresList.filter((res) => (
                            res.info.name.toLowerCase().includes(searchText.toLowerCase())
                        ))
                        setFilteredRestaurants(filtteredList);
                        // console.log(filtteredList);
                    }}>Search</button>
                </div>

                <button className="filter-btn px-6 py-3 bg-blue-600 text-white font-medium border-none rounded-lg cursor-pointer hover:bg-blue-700 transition-colors duration-300 shadow-sm" onClick={() => {
                    const filteredList = filteredRestaurants.filter((res) => res.info.avgRating > 4.5)
                    setFilteredRestaurants(filteredList);
                }}>Top Rated Restaurants</button>

                <div className="username-section flex items-center gap-3">
                    <label className="font-bold text-gray-700 whitespace-nowrap">UserName :</label>
                    <input className="username-input px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm min-w-[150px]" type="text" value={loggedInUSer} onChange={(e) => {
                        setUserName(e.target.value);
                    }}></input>
                </div>
            </div>

            <div className="flex flex-wrap justify-center gap-5 p-5">
                {/* {console.log(filteredRestaurants)} */}
                {filteredRestaurants.map((restaurant) => (
                    <Link key={restaurant.info.id} to={"/restaurant/" + restaurant.info.id}>
                        {/* Optional Chaining */}
                        {"promoted" in restaurant.info ?
                            restaurant.info.promoted === true ? <PromotedRestaurantCard swiggyRestaurant={restaurant} /> : <RestaurantCard swiggyRestaurant={restaurant} />
                            :
                            restaurant.info.sla.deliveryTime <= 30 ? <Within30minsRestaurantCard swiggyRestaurant={restaurant} /> : <RestaurantCard swiggyRestaurant={restaurant} />
                        }

                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Body;