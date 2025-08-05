import { useState, useEffect } from "react";

const User = (props) => {
    const [state, setState] = useState(0);
    useEffect(() => {
        const timer = setInterval(() => {
            console.log("hello");
        }, 1000);
        return () => {
            clearInterval(timer)
        };
    }, [])
    return (
        <div className="user-card w-52 h-auto rounded-xl p-4 shadow-lg bg-gray-100 hover:scale-95 cursor-pointer transition-transform duration-300 hover:shadow-xl border border-gray-200">
            <h1 className="text-lg font-bold text-gray-800 mb-2">Name : {props.name}</h1>
            <h2 className="text-md text-gray-600 mb-2">Location : {props.location}</h2>
            <h3 className="text-sm text-blue-600 font-semibold mb-3">State : {state}</h3>
            <button className="state-btn px-4 py-2 bg-blue-600 text-white border-none rounded-md cursor-pointer hover:bg-blue-700 transition-colors duration-300 w-full" onClick={() => setState(state + 1)}>Update State</button>
        </div>
    )
}
export default User;