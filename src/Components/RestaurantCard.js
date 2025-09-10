import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const { name, cuisines, cloudinaryImageId, avgRating, sla, aggregatedDiscountInfoV3 } = props?.swiggyRestaurant?.info;
    return (
        <div className="res-card w-full sm:w-64 md:w-60 lg:w-64 xl:w-72 max-w-sm mx-auto rounded-xl p-3 shadow-lg bg-gray-100 hover:scale-95 cursor-pointer transition-transform duration-300 hover:shadow-xl">
            <div className="relative">
                <img className="res-logo w-full h-36 sm:h-40 md:h-36 lg:h-40 rounded-lg object-cover" src={CDN_URL + cloudinaryImageId} alt="res-logo" />
                {/* Discount overlay if available */}
                {aggregatedDiscountInfoV3?.subHeader && (
                    <div className="absolute bottom-2 left-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-2 py-1 rounded-md text-xs font-bold shadow-lg">
                        {aggregatedDiscountInfoV3.subHeader}
                    </div>
                )}
            </div>
            
            {/* Restaurant Info */}
            <div className="mt-3 space-y-2">
                <h3 className="text-base sm:text-lg font-bold text-gray-800 truncate" title={name}>{name}</h3>
                
                {/* Cuisines with better mobile handling */}
                <h4 className="text-xs sm:text-sm text-gray-600 leading-tight line-clamp-2" title={cuisines.join(", ")}>
                    {cuisines.slice(0, 3).join(", ")}{cuisines.length > 3 ? "..." : ""}
                </h4>
                
                {/* Rating and Delivery Time */}
                <div className="flex justify-between items-center mt-2">
                    <div className="flex items-center gap-1">
                        <span className="text-yellow-500 text-sm">⭐</span>
                        <span className="text-sm font-semibold text-gray-700">{avgRating}</span>
                    </div>
                    <div className="text-xs sm:text-sm text-gray-600 font-medium">
                        {sla.slaString}
                    </div>
                </div>
            </div>
        </div>
    )
};

// Higher Function
// it takes RestaurantCard component as an input andd enhances it by adding a label of prmoted to the RestaurantCard component but without changing the original RestaurantCard
export const withPromotedLabel = (RestaurantCard) => {
    return (props) => {
        return (
            <div className="relative">
                <label className="absolute top-2 right-2 bg-gradient-to-r from-purple-500 to-pink-600 text-white px-2 py-1 rounded-full text-xs font-bold z-10 shadow-lg">🌟 Promoted</label>
                <RestaurantCard {...props} />
            </div>
        )
    }
};
export const withWithin30minsabel = (RestaurantCard) => {
    return (props) => {
        return (
            <div className="relative">
                <label className="absolute top-2 right-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-2 py-1 rounded-full text-xs font-bold z-10 shadow-lg">⚡ 30 mins</label>
                <RestaurantCard {...props} />
            </div>
        )
    }
};

export default RestaurantCard;