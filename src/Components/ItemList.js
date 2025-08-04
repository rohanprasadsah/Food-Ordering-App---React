import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
    // console.log(items);

    return (
        <div>
            {items.map((i) => (
                <div key={i?.card?.info?.id} className="flex justify-between items-center border-gray-300 border-b-2">
                    <div className=" text-left py-10 w-9/12 h-44 font-semibold">
                        <span>{i?.card?.info?.name} - </span>
                        <span>₹ {i?.card?.info?.price / 100 || i?.card?.info?.defaultPrice / 100}</span>
                        <p className="text-xs font-medium">{i?.card?.info?.description}</p>
                    </div>
                    <div >
                        <img className=" rounded-2xl w-28 h-24" src={CDN_URL + i?.card?.info?.imageId} />
                        <button className="px-5 py-1 shadow-gray-500 shadow-md bg-white text-emerald-600 rounded-lg">ADD</button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ItemList;