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
        <div className="text-center mx-auto p-3 sm:p-6 lg:p-8 bg-gradient-to-br from-gray-50 via-white to-gray-100 min-h-screen">
            <div className="max-w-6xl mx-auto">
                <div className="bg-gradient-to-r from-emerald-500 to-green-600 text-white py-4 sm:py-6 px-4 sm:px-8 rounded-2xl sm:rounded-3xl shadow-2xl mb-6 sm:mb-10">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-wider drop-shadow-lg">🛒 Cart</h1>
                    <p className="text-emerald-100 mt-1 sm:mt-2 text-sm sm:text-lg font-medium">Review your delicious selections</p>
                </div>

                {cartItems.map((i) => {
                    return (
                        <div key={i?.id} className="w-full max-w-4xl mx-auto my-4 sm:my-6 lg:my-8">
                            <div className="group rounded-2xl sm:rounded-3xl flex flex-col sm:flex-row justify-between items-start sm:items-center border-gray-200 border-2 shadow-2xl hover:shadow-3xl px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8 bg-white transition-all duration-500 hover:border-emerald-300 hover:-translate-y-1">
                                <div className="text-left w-full sm:w-9/12 font-semibold space-y-2 sm:space-y-3">
                                    <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
                                        <span className="text-lg sm:text-xl font-black text-gray-800 group-hover:text-emerald-600 transition-colors duration-300">{i?.name}</span>
                                        <span className="text-lg sm:text-xl font-extrabold text-emerald-600 drop-shadow-sm">₹ {i?.price / 100 || i?.defaultPrice / 100}</span>
                                    </div>
                                    <p className="text-xs sm:text-sm font-medium text-gray-600 leading-relaxed mt-2 sm:mt-3 pr-0 sm:pr-4 line-clamp-3">{i?.description}</p>
                                </div>
                                <div className="flex flex-row sm:flex-col items-center justify-between sm:justify-center gap-3 mt-4 sm:mt-0 w-full sm:w-auto">
                                    <img className="rounded-xl sm:rounded-2xl w-20 h-16 sm:w-32 sm:h-28 object-cover shadow-lg hover:shadow-xl transition-shadow duration-300" src={CDN_URL + i?.imageId} alt={i?.name} />
                                    <button className="px-4 py-2 sm:px-6 sm:py-2 shadow-lg bg-white hover:bg-red-50 text-red-600 hover:text-red-700 font-bold text-xs sm:text-sm rounded-lg transform hover:scale-105 transition-all duration-200 active:scale-95 border-2 border-red-200 hover:border-red-400"
                                        onClick={() => handleRemove(i.id)}>🗑️ Remove</button>
                                </div>
                            </div>
                        </div>
                    )
                })}

                {cartItems.length === 0 &&
                    <div className="rounded-2xl sm:rounded-3xl flex flex-col justify-center text-center border-gray-200 border-2 shadow-2xl w-full max-w-2xl px-6 sm:px-12 py-8 sm:py-16 mx-auto my-6 sm:my-12 bg-gradient-to-br from-white to-gray-50">
                        <div className="text-4xl sm:text-6xl mb-3 sm:mb-4">🛒</div>
                        <h1 className="text-xl sm:text-2xl font-black text-gray-700 mb-1 sm:mb-2">Your Cart is Empty!</h1>
                        <p className="text-sm sm:text-base text-gray-500 font-medium">Add some delicious items to get started</p>
                    </div>}

                {/* Total Amount Section */}
                <div className="rounded-2xl sm:rounded-3xl border-emerald-200 border-2 sm:border-3 shadow-2xl w-full max-w-md px-4 sm:px-8 py-6 sm:py-8 mx-auto my-6 sm:my-12 bg-gradient-to-br from-emerald-50 via-white to-green-50">
                    <div className="font-bold text-center space-y-2 sm:space-y-3">
                        <div className="text-xl sm:text-2xl mb-1 sm:mb-2">💰</div>
                        <span className="text-lg sm:text-xl text-gray-800 font-black block tracking-wide">Total Amount</span>
                        <div className="bg-gradient-to-r from-emerald-500 to-green-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-xl sm:rounded-2xl shadow-xl">
                            <span className="text-2xl sm:text-3xl font-black drop-shadow-lg">₹ {cartItems.reduce((a, c) => (a + c.price / 100 || a + c.defaultPrice / 100), 0)}</span>
                        </div>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mt-6 sm:mt-12 px-4">
                    <button className="w-full sm:w-auto px-8 sm:px-12 py-3 sm:py-4 shadow-2xl bg-white hover:bg-red-50 text-red-600 hover:text-red-700 font-black text-base sm:text-lg rounded-xl sm:rounded-2xl transform hover:scale-105 sm:hover:scale-110 transition-all duration-300 active:scale-95 border-2 border-red-200 hover:border-red-400 hover:shadow-red-200" onClick={handleClearCart}>
                        🗑️ Clear Cart</button>
                    <button className="w-full sm:w-auto px-8 sm:px-12 py-3 sm:py-4 shadow-2xl bg-white hover:bg-emerald-50 text-emerald-600 hover:text-emerald-700 font-black text-base sm:text-lg rounded-xl sm:rounded-2xl transform hover:scale-105 sm:hover:scale-110 transition-all duration-300 active:scale-95 border-2 border-emerald-200 hover:border-emerald-400 hover:shadow-emerald-200">
                        💳 Checkout</button>
                </div>
            </div>
        </div>
    )
}

export default Cart;