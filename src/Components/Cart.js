import { useDispatch, useSelector } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { clearCart } from "../utils/cartSlice";
import { removeItems } from "../utils/cartSlice";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.Items);
    console.log(cartItems);
    // let x = 0;
    // cartItems.map((i) => (x = x + i?.price / 100 || x + i?.defaultPrice / 100))

    const dispatch = useDispatch();

    const handleClearCart = () => {
        // cartItems.length === 0 ? alert("Cart is empty") :
        dispatch(clearCart())
    }

    const handleRemove = (id) => {
        const index = cartItems.findIndex((c) => c.id === id);
        dispatch(removeItems(index));
    }

    return (
        <div className="text-center m-4 p-4">
            <h1 className="text-2xl font-bold">Cart</h1>
            {cartItems.map((i) => {
                return (
                    <div key={i?.id} className="flex justify-between items-center">
                        <div className="rounded-2xl flex justify-between items-center border-gray-300 border-b-2 shadow-lg w-6/12 px-5 mx-auto my-5">
                            <div className=" text-left py-10 w-9/12 h-40 font-semibold">
                                <span>{i?.name} - </span>
                                <span>₹ {i?.price / 100 || i?.defaultPrice / 100}</span>
                                <p className="text-xs font-medium">{i?.description}</p>
                            </div>
                            <div >
                                <img className=" rounded-2xl w-28 h-24" src={CDN_URL + i?.imageId} />
                                <button className="px-5 py-1 shadow-gray-500 shadow-md bg-white text-emerald-600 rounded-lg"
                                    onClick={() => handleRemove(i.id)}>Remove</button>
                            </div>
                        </div>
                    </div>
                )
            })}

            {cartItems.length === 0 &&
                <div className="rounded-2xl flex justify-center text-center border-gray-300 border-b-2 shadow-lg w-6/12 px-5 mx-auto my-5">
                    <h1 className=" font-bold">Cart is empty!!</h1>
                </div>}

            <div className="rounded-2xl border-gray-300 border-b-2 shadow-lg w-3/12 px-5 py-5 mx-auto my-5">
                <div className=" font-semibold">
                    <span >Total Price : </span>
                    <span>₹ {cartItems.reduce((a, c) => (a + c.price / 100 || a + c.defaultPrice / 100), 0)}</span>
                    {/* <span>₹ {x}</span> */}
                </div>
            </div>

            <button className="px-5 py-1 shadow-gray-500 shadow-md bg-white text-emerald-600 rounded-lg" onClick={handleClearCart}>
                Clear Cart</button>
        </div>
    )
}

export default Cart;