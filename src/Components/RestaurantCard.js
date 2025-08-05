import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const { name, cuisines, cloudinaryImageId, avgRating, sla, aggregatedDiscountInfoV3 } = props?.swiggyRestaurant?.info;
    return (
        <div className="res-card w-52 h-[350px] rounded-xl p-3 shadow-lg bg-gray-100 hover:scale-95 cursor-pointer transition-transform duration-300 hover:shadow-xl">
            <img className="res-logo w-full h-40 rounded-t-xl object-cover" src={CDN_URL + cloudinaryImageId} alt="res-logo" />
            {console.log(CDN_URL)
            }
            <h3 className="text-lg font-bold mt-2 text-gray-800 truncate">{name}</h3>
            <h4 className="text-sm text-green-600 font-semibold">{aggregatedDiscountInfoV3?.subHeader}</h4>
            <h4 className="text-sm text-gray-600 mt-1 leading-tight">{cuisines.join(", ")}</h4>
            <h4 className="text-sm text-gray-700 mt-2">{sla.slaString}</h4>
            <h4 className="text-sm font-semibold text-yellow-600 mt-1">{avgRating} ☆</h4>
        </div>
    )
};

// Higher Function
// it takes RestaurantCard component as an input andd enhances it by adding a label of prmoted to the RestaurantCard component but without changing the original RestaurantCard
export const withPromotedLabel = (RestaurantCard) => {
    return (props) => {
        return (
            <>
                <label className="absolute bg-black text-white px-3 py-1 rounded-md text-xs font-semibold z-10">Promoted</label>
                <RestaurantCard {...props} />
            </>
        )
    }
};
export const withWithin30minsabel = (RestaurantCard) => {
    return (props) => {
        return (
            <>
                <label className="absolute bg-green-600 text-white px-3 py-1 rounded-md text-xs font-semibold z-10">Within 30 mins</label>
                <RestaurantCard {...props} />
            </>
        )
    }
};

export default RestaurantCard;