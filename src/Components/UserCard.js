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
            <div className="user-card">
                <img className="user-img" src={avatar_url} />
                <h1>Name : {name}</h1>
                <h2>Location : {location}</h2>
            </div>
        )
    }
}

export default UserCard;