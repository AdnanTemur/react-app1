import React, { useState } from "react";

const ContainerF = (props) => {

    const [count, setCount] = useState(1);

    const changeCount = () => {
        setCount(count + 1);
    }
    return (
        <div className="w-full mb-5 flex flex-col items-center justify-center border-red-500 border-b-2">
            <h1 style={{ color: props.color }}>This is a Functional Component</h1>
            <button className="bg-blue-400 p-1 text-white rounded-md" onClick={changeCount}>Click 1</button>
            <h1>{count}</h1>
        </div>
    );
}

class ContainerC extends React.Component {
    constructor() {
        super();
        this.state = {
            color: "yellow",
            count: 1

        }

        this.changeCount = this.changeCount.bind(this);
    }

    changeCount() {
        this.setState({ count: this.state.count + 1 });
    }


    render() {
        return (
            <div className="w-full mb-5 flex flex-col items-center justify-center">
                <h1 style={{ color: this.props.color }}>This is a Class Component</h1>
                <button onClick={this.changeCount} className="bg-green-400 p-1 text-white rounded-md">Click 2</button>
                <h1>{this.state.count}</h1>

            </div>

        );
    }
}


export { ContainerF, ContainerC };