import User from "./User";
import UserClass from "./UserClass";
import React from "react";
import UserCard from "./UserCard";
import UserContext from "../utils/UserContext";

class About extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
    }
    render() {
        return (
            <div className="text-center m-4 p-8 bg-gradient-to-br from-gray-50 via-white to-gray-100 min-h-screen">
                <div className="max-w-6xl mx-auto">
                    <div className="bg-gradient-to-r from-emerald-500 to-green-600 text-white py-6 px-8 rounded-3xl shadow-2xl mb-10">
                        <h1 className="text-5xl font-black tracking-wider drop-shadow-lg">🍽️ About FusionBowl</h1>
                        <p className="text-emerald-100 mt-2 text-lg font-medium">Learn more about our delicious journey</p>
                    </div>

                    <div className="rounded-3xl border-gray-200 border-2 shadow-2xl w-full max-w-3xl px-8 py-8 mx-auto my-12 bg-white">
                        <h3 className="text-2xl font-black text-gray-800 mb-4">This is About Page (Class component)</h3>
                        
                        <UserContext.Consumer>
                            {({ loggedInUSer }) => (
                                <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-2xl p-4 mb-6">
                                    <h1 className="text-2xl font-extrabold text-emerald-600">Welcome, {loggedInUSer}!</h1>
                                </div>
                            )}
                        </UserContext.Consumer>
                    </div>

                    <div className="rounded-3xl border-gray-200 border-2 shadow-2xl w-full max-w-5xl px-8 py-10 mx-auto my-12 bg-white">
                        <h2 className="text-3xl font-black text-gray-800 mb-8">👥 Meet Our Team</h2>
                        <div className="flex flex-wrap justify-center gap-8 p-5">
                            <User name={"Rohan (Function)"} location={"Kolkata"} />
                            <UserClass name={"Karan (class)"} location={"Bihar"} />
                            <UserCard />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                        <div className="group rounded-3xl border-gray-200 border-2 shadow-2xl hover:shadow-3xl px-8 py-10 bg-white transition-all duration-500 hover:border-emerald-300 hover:-translate-y-1">
                            <div className="text-4xl mb-4">🎆</div>
                            <h3 className="text-xl font-black text-gray-800 group-hover:text-emerald-600 transition-colors duration-300 mb-2">Our Mission</h3>
                            <p className="text-sm font-medium text-gray-600 leading-relaxed">To deliver the finest fusion cuisine right to your doorstep with exceptional quality and service.</p>
                        </div>

                        <div className="group rounded-3xl border-gray-200 border-2 shadow-2xl hover:shadow-3xl px-8 py-10 bg-white transition-all duration-500 hover:border-emerald-300 hover:-translate-y-1">
                            <div className="text-4xl mb-4">🍽️</div>
                            <h3 className="text-xl font-black text-gray-800 group-hover:text-emerald-600 transition-colors duration-300 mb-2">Our Story</h3>
                            <p className="text-sm font-medium text-gray-600 leading-relaxed">Founded in 2024, we blend traditional flavors with modern innovation to create unforgettable dining experiences.</p>
                        </div>

                        <div className="group rounded-3xl border-gray-200 border-2 shadow-2xl hover:shadow-3xl px-8 py-10 bg-white transition-all duration-500 hover:border-emerald-300 hover:-translate-y-1">
                            <div className="text-4xl mb-4">⭐</div>
                            <h3 className="text-xl font-black text-gray-800 group-hover:text-emerald-600 transition-colors duration-300 mb-2">Our Values</h3>
                            <p className="text-sm font-medium text-gray-600 leading-relaxed">Quality ingredients, sustainable practices, and customer satisfaction are at the heart of everything we do.</p>
                        </div>
                    </div>

                    <div className="rounded-3xl border-emerald-200 border-2 shadow-2xl w-full max-w-2xl px-8 py-8 mx-auto my-12 bg-gradient-to-br from-emerald-50 via-white to-green-50">
                        <div className="font-bold text-center space-y-3">
                            <div className="text-3xl mb-2">📊</div>
                            <h2 className="text-2xl text-gray-800 font-black tracking-wide">Our Achievements</h2>
                            <p className="text-gray-600 font-medium">10,000+ Happy Customers<br/>500+ Five-Star Reviews<br/>25+ Partner Restaurants</p>
                        </div>
                    </div>

                    <div className="flex justify-center gap-6 mt-12">
                        <button className="px-12 py-4 shadow-2xl bg-white hover:bg-emerald-50 text-emerald-600 hover:text-emerald-700 font-black text-lg rounded-2xl transform hover:scale-105 transition-all duration-300 active:scale-95 border-2 border-emerald-200 hover:border-emerald-400">
                            👤 Join Our Team</button>
                        <button className="px-12 py-4 shadow-2xl bg-white hover:bg-orange-50 text-orange-600 hover:text-orange-700 font-black text-lg rounded-2xl transform hover:scale-105 transition-all duration-300 active:scale-95 border-2 border-orange-200 hover:border-orange-400">
                            🎆 Our Story</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default About;