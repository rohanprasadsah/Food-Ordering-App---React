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
        <div className="user-card">
            <h1>Name : {props.name}</h1>
            <h2>Location : {props.location}</h2>
            <h3>State : {state}</h3>
            <button className="state-btn" onClick={() => setState(state + 1)}>Update State</button>
        </div>
    )
}
export default User;