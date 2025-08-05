import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Contact from "./Components/Contact";
import Error from "./Components/Error";
import RestaurantMenu from "./Components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

// import Grocery from './Components/Grocery';
const Grocery = lazy(() => import("./Components/Grocery"));

// import About from "./Components/About";
const About = lazy(() => import("./Components/About"));

const Cart = lazy(() => import("./Components/Cart"));

import Shimmer from "./Components/Shimmer";
import UserContext from "./utils/UserContext";

const AppLayout = () => {
    const [userName, setUserName] = useState();

    //Authentication logic for userinfo
    useEffect(() => {
        //Made an Api call and got the userinfo in data object
        const data = {
            name: "Rohan"
        }
        setUserName(data.name);
    }, []);

    return (
        <div className="app">
            <Provider store={appStore}>
                <UserContext.Provider value={{ loggedInUSer: userName, setUserName }}>
                    <Header />
                    {/* <UserContext.Provider value={{ loggedInUSer: "Karan" }}> */}
                    <Outlet />
                    {/* </UserContext.Provider> */}
                </UserContext.Provider>
            </Provider>
        </div>
    );
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: (<Suspense fallback={<Shimmer />}><About /></Suspense>)
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/grocery",
                element: (<Suspense fallback={<h1>Loading........</h1>}><Grocery /></Suspense>)
            },
            {
                path: "/cart",
                element: (<Suspense fallback={<h1>Loading........</h1>}><Cart /></Suspense>)
            },
            {
                path: "/restaurant/:resId",
                element: <RestaurantMenu />
            }
        ],
        errorElement: <Error />
    }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);