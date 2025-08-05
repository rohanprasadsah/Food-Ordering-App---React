import React from "react";

class UserCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {}
        }
    }
    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/rohanprasadsah");
        const jsondata = await data.json();
        this.setState({
            user: jsondata
        });
        console.log(jsondata);
        // this.timer = setInterval(() => {
        //     console.log("hello");

        // }, 1000)
    }
    componentDidUpdate() {

    }
    componentWillUnmount() {
        // clearInterval(this.timer);
    }
    render() {
        const { name, location, avatar_url } = this.state.user;
        return (
            <div className="user-card w-52 h-auto rounded-xl p-4 shadow-lg bg-gray-100 hover:scale-95 cursor-pointer transition-transform duration-300 hover:shadow-xl border border-gray-200">
                <img className="user-img w-full h-40 rounded-t-xl object-cover mb-3" src={avatar_url} alt="User Avatar" />
                <h1 className="text-lg font-bold text-gray-800 mb-2 truncate">Name : {name}</h1>
                <h2 className="text-md text-gray-600">Location : {location}</h2>
            </div>
        )
    }
}

export default UserCard;