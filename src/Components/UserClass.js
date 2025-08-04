import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            count2: 2
        }
    }
    render() {
        return (
            <div className="user-card">
                <h1>Name : {this.props.name}</h1>
                <h2>Location : {this.props.location}</h2>
                <h3>Count : {this.state.count}</h3>
                <h3>Count2 : {this.state.count2}</h3>
                <button className="state-btn" onClick={() =>
                    this.setState({
                        count: this.state.count + 1,
                        count2: this.state.count2 * 2
                    })
                }>Update State</button>
                <h3></h3>
            </div>
        )
    }
}

export default UserClass;