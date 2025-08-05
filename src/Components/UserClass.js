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
            <div className="user-card w-52 h-auto rounded-xl p-4 shadow-lg bg-gray-100 hover:scale-95 cursor-pointer transition-transform duration-300 hover:shadow-xl border border-gray-200">
                <h1 className="text-lg font-bold text-gray-800 mb-2">Name : {this.props.name}</h1>
                <h2 className="text-md text-gray-600 mb-2">Location : {this.props.location}</h2>
                <h3 className="text-sm text-blue-600 font-semibold mb-1">Count : {this.state.count}</h3>
                <h3 className="text-sm text-green-600 font-semibold mb-3">Count2 : {this.state.count2}</h3>
                <button className="state-btn px-4 py-2 bg-blue-600 text-white border-none rounded-md cursor-pointer hover:bg-blue-700 transition-colors duration-300 w-full" onClick={() =>
                    this.setState({
                        count: this.state.count + 1,
                        count2: this.state.count2 * 2
                    })
                }>Update State</button>
            </div>
        )
    }
}

export default UserClass;