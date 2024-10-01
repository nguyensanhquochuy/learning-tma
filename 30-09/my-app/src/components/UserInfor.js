import React from "react";

class UserInfor extends React.Component {
    state = {
        name: 'Huy',
        age: '22'
    }

    // handleClick(event) {
    //     console.log('Click me');
    //     this.setState({
    //         name: 'Hao'
    //     })

    // }
    // handleOnMouseOver(event) {
    //     console.log(event);
    //     console.log(this.state.name);

    // }

    handleOnChangeInput(event) {
        console.log(event.target.value)
        this.setState({
            name: event.target.value
        })
    }
    handleOnChangeAge(event) {
        this.setState({
            age: event.target.value
        })
    }

    handleOnSubmit(event) {
        event.preventDefault()
        console.log(this.state)
    }

    render() {
        return (
            <div>
                My name is {this.state.name} and I'm {this.state.age} years old
                {/* {Math.random()} */}
                {/* <button onClick={(event) => { this.handleClick(event) }} >Click me</button> */}
                {/* <button onMouseOver={(event) => { this.handleOnMouseOver(event) }}>Hover me</button> */}
                <form onSubmit={(event) => { this.handleOnSubmit(event) }}>
                    <input
                        value={this.state.name}
                        type='text'
                        onChange={(event) => { this.handleOnChangeInput(event) }}
                    />
                    <input
                        value={this.state.age}
                        type='text'
                        onChange={(event) => { this.handleOnChangeAge(event) }}
                    />
                    <button>Submit</button>
                </form>
            </div>
        );

    }
}

export default UserInfor;