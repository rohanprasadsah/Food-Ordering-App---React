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
            <>
                <h3>This is About Page (Class component)</h3>

                <UserContext.Consumer>
                    {({ loggedInUSer }) => (
                        <h1 className="text-emerald-500 font-bold">{loggedInUSer}</h1>
                    )}
                </UserContext.Consumer>

                <div className="flex flex-wrap justify-center gap-5 p-5">
                    <User name={"Rohan (Function)"} location={"Kolkata"} />
                    <UserClass name={"Karan (class)"} location={"Bihar"} />
                    <UserCard />
                </div>
            </>
        )
    }
}

export default About;