//  class component
// function component

import React from 'react'
import UserInfor from './UserInfor';
import DisplayInfor from './DisplayInfor';
class MyComponent extends React.Component {
    // JSX code html ben trong js
    state = {
        listUsers: [
            { id: 1, name: 'Huy', age: '16' },
            { id: 2, name: 'Hao', age: '21' },
            { id: 3, name: 'Han', age: '22' },
        ]
    }

    render() {
        // DRY : Don't repeat yourself
        // const myArr = ['abc', 'a', 60]
        return (
            <div>
                <UserInfor />
                <br />
                {/* <DisplayInfor name='def' age='25' myArr={myArr} /> */}
                <DisplayInfor listUsers={this.state.listUsers} />
            </div>
        );
    }
}

export default MyComponent;