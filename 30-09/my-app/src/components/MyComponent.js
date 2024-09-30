//  class component
// function component

import React from 'react'
class MyComponent extends React.Component {
    // JSX code html ben trong js

    state = {
        name: 'Huy',
        age: '22'
    }

    hanleClick() {
        console.log('Click me');

    }

    render() {
        return (
            <div>
                My name is {this.state.name} and I'm {this.state.age} years old
                {Math.random()}
                <button onClick={this.hanleClick} >Click me</button>
            </div>
        );
    }
}

export default MyComponent;