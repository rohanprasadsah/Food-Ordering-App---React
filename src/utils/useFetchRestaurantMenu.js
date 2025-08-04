import { useEffect, useState } from "react";
import { Menu_URL } from "./constants";

const useFetchRestaurantMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const data = await fetch(Menu_URL + resId);
        const jsonData = await data.json();
        setResInfo(jsonData)
    }

    return resInfo;
}

export default useFetchRestaurantMenu;