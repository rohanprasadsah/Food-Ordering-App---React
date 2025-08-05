import ItemList from "./ItemList";
import { useState } from "react";

const RestaurantCategory = ({ data, showItems, setShowItems }) => {
    // console.log(data.itemCards)
    const handleClick = () => {
        setShowItems();
    }

    return <div className="bg-gray-100 my-4 shadow-lg font-bold text-l p-4 rounded-lg">
        <div className="flex justify-between cursor-pointer" onClick={handleClick}>
            <span>{data?.title}({data?.itemCards?.length})</span>
            <span className="font-bold">↓</span>
        </div>
        <>
            {showItems && <ItemList items={data?.itemCards} />}
        </>
    </div>
}

export default RestaurantCategory;