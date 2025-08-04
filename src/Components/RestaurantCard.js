import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const { name, cuisines, cloudinaryImageId, avgRating, sla, aggregatedDiscountInfoV3 } = props?.swiggyRestaurant?.info;
    return (
        <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
            <img className="res-logo" src={CDN_URL + cloudinaryImageId} alt="res-logo" />
            {console.log(CDN_URL)
            }
            <h3>{name}</h3>
            <h4>{aggregatedDiscountInfoV3?.subHeader}</h4>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{sla.slaString}</h4>
            <h4>{avgRating} ☆</h4>
        </div>
    )
};

// Higher Function
// it takes RestaurantCard component as an input andd enhances it by adding a label of prmoted to the RestaurantCard component but without changing the original RestaurantCard
export const withPromotedLabel = (RestaurantCard) => {
    return (props) => {
        return (
            <>
                <label className="tag">Promoted</label>
                <RestaurantCard {...props} />
            </>
        )
    }
};
export const withWithin30minsabel = (RestaurantCard) => {
    return (props) => {
        return (
            <>
                <label className="tag">Within 30 mins</label>
                <RestaurantCard {...props} />
            </>
        )
    }
};

export default RestaurantCard;