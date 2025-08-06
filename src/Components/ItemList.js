import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItems } from "../utils/cartSlice";

const ItemList = ({ items }) => {
    const dispatch = useDispatch();
    const handleAddItem = (item) => {
        dispatch(addItems(item));
    }

    return (
        <div>
            {items.map((i) => (
                <div key={i?.card?.info?.id} className="flex justify-between items-center border-gray-200 border-b-2 p-6 hover:bg-gray-50 transition-colors duration-300 hover:shadow-lg">
                    <div className="text-left py-4 w-9/12 font-semibold space-y-2">
                        <span className="text-lg font-bold text-gray-800">{i?.card?.info?.name} - </span>
                        <span className="text-lg font-extrabold text-green-600">₹ {i?.card?.info?.price / 100 || i?.card?.info?.defaultPrice / 100}</span>
                        <p className="text-sm font-medium text-gray-600 leading-relaxed">{i?.card?.info?.description}</p>
                    </div>
                    <div className="flex flex-col items-center gap-3">
                        <img className="rounded-2xl w-32 h-28 object-cover shadow-md hover:shadow-lg transition-shadow duration-300" src={CDN_URL + i?.card?.info?.imageId} />
                        <button className="px-6 py-2 shadow-lg bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white font-bold rounded-lg transform hover:scale-105 transition-all duration-200 active:scale-95"
                            onClick={() => handleAddItem(i?.card?.info)}
                        >ADD</button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ItemList;
