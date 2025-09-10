import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { useState } from "react";
import useFetchRestaurantMenu from "../utils/useFetchRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
    const { resId } = useParams();
    const resInfo = useFetchRestaurantMenu(resId);
    const [showItems, setShowItems] = useState(null);

    if (resInfo === null) {
        return <Shimmer />
    };

    const { name, avgRatingString, totalRatingsString } = resInfo?.data?.cards[2]?.card?.card?.info;
    const { itemCards } = resInfo?.data?.cards.find((c) => c?.groupedCard?.cardGroupMap?.REGULAR)?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    const categories = resInfo?.data?.cards.find((c) => c?.groupedCard?.cardGroupMap?.REGULAR)?.groupedCard?.cardGroupMap?.REGULAR?.cards
        .filter((c) => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
            // || c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
        );
    // console.log(categories);

    return (
        <div className="restaurant-menu-container py-4 sm:py-6 lg:py-8">
            <div className="max-w-4xl mx-auto px-4 sm:px-6">
                {/* Restaurant Header */}
                <div className="text-center mb-6 sm:mb-8">
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-2 sm:mb-3 leading-tight">{name}</h1>
                    <div className="flex items-center justify-center gap-2 text-base sm:text-lg text-yellow-600 font-semibold mb-4 sm:mb-6">
                        <span className="text-yellow-500">⭐</span>
                        <span>{avgRatingString}</span>
                        <span className="text-gray-500 text-sm sm:text-base">({totalRatingsString})</span>
                    </div>
                    <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-emerald-500 to-green-600 mx-auto rounded-full"></div>
                </div>
                
                {/* Menu Categories */}
                <div className="space-y-4 sm:space-y-6">
                    {categories.map((category, index) => (
                        <RestaurantCategory key={category?.card?.card?.categoryId}
                            data={category?.card?.card}
                            showItems={index === showItems ? true : false}
                            setShowItems={() => { setShowItems(index) }}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}
export default RestaurantMenu;