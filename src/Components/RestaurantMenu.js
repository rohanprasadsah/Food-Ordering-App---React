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
        <div className="my-8 text-center w-1/2 mx-auto px-4">
            <h1 className="text-3xl font-bold text-gray-800 mb-3">{name}</h1>
            <h4 className="text-lg text-yellow-600 font-semibold mb-6">{"☆ " + avgRatingString + " (" + totalRatingsString + ")"}</h4>
            {categories.map((category, index) => (
                <RestaurantCategory key={category?.card?.card?.categoryId}
                    data={category?.card?.card}
                    showItems={index === showItems ? true : false}
                    setShowItems={() => { setShowItems(index) }}
                />
            ))}
        </div>
    )
}
export default RestaurantMenu;