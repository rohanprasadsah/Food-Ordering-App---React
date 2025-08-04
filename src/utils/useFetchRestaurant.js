import { useState, useEffect } from "react";

const useFetchRestaurant = (RESTAURANT_URL) => {
    const [stateresList, setStateresList] = useState([]);

    useEffect(() => {
        const swiggyApiData = async () => {
            const data = await fetch(RESTAURANT_URL);
            const jsonData = await data.json();

            const restaurants =
                jsonData?.data?.cards?.find((card) =>
                    card?.card?.card?.gridElements?.infoWithStyle?.restaurants
                )?.card?.card?.gridElements?.infoWithStyle?.restaurants;

            setStateresList(restaurants);
        };
        swiggyApiData();
    }, []);


    return stateresList
}

export default useFetchRestaurant;