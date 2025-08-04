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
            <div className="status-body">
                <h1>Looks like you are offline!! Please check your internet connection!!</h1>
            </div>
        )
    }

    //Conditional Rendering by using Ternary Operator
    return (filteredRestaurants.length === 0) ? <Shimmer /> : (
        <div className="body">
            <div className="filter">
                <div className="Search">
                    <input type="text" className="search-box" value={searchText} onChange={(e) => {
                        setSearchText(e.target.value);
                    }}></input>
                    <button className="search-btn" onClick={() => {
                        const filtteredList = stateresList.filter((res) => (
                            res.info.name.toLowerCase().includes(searchText.toLowerCase())
                        ))
                        setFilteredRestaurants(filtteredList);
                        // console.log(filtteredList);
                    }}>Search</button>
                </div>

                <button className="filter-btn" onClick={() => {
                    const filteredList = filteredRestaurants.filter((res) => res.info.avgRating > 4.5)
                    setFilteredRestaurants(filteredList);
                }}> Top Rated Restaurants </button>

                <label className="p-5 font-bold">UserName : </label>
                <input className="search-box border border-black" type="text" value={loggedInUSer} onChange={(e) => {
                    setUserName(e.target.value);
                }}></input>
            </div>

            <div className="res-container">
                {/* {console.log(filteredRestaurants)} */}
                {filteredRestaurants.map((restaurant) => (
                    <Link key={restaurant.info.id} to={"/restaurant/" + restaurant.info.id}>
                        {/* Optional Chaining */}
                        {"promoted" in restaurant.info ?
                            restaurant.info.promoted === true ? <PromotedRestaurantCard swiggyRestaurant={restaurant} /> : <RestaurantCard swiggyRestaurant={restaurant} />
                            :
                            restaurant.info.sla.deliveryTime <= 30 ? <Within30minsRestaurantCard swiggyRestaurant={restaurant} /> : <RestaurantCard swiggyRestaurant={restaurant} />
                        };

                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Body;