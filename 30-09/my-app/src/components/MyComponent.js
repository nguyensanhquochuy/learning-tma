//  class component
// function component

import React, { useState } from 'react'
import AddUserInfor from './AddUserInfor';
import DisplayInfor from './DisplayInfor';
// class MyComponent extends React.Component {
//     // JSX code html ben trong js
//     state = {
//         listUsers: [
//             { id: 1, name: 'Huy', age: '16' },
//             { id: 2, name: 'Hao', age: '21' },
//             { id: 3, name: 'Han', age: '22' },
//         ]
//     }

//     handleAddNewUser = (userObj) => {
//         console.log(">> check data from parent: ", userObj)
//         this.setState({
//             listUsers: [...this.state.listUsers, userObj]
//         })
//     }

//     handleDeleteUser = (userId) => {

//         let listUsersClone = [...this.state.listUsers];
//         listUsersClone = listUsersClone.filter((item => item.id !== userId));
//         this.setState({
//             listUsers: listUsersClone
//         })
//     }


//     render() {
//         // DRY : Don't repeat yourself
//         // const myArr = ['abc', 'a', 60]
//         // khong dung this.handleAddNewUser() vi no chi la tham chieu thoi, neu them () thi no se thuc thi ngay tai day va ko truyen dc xuong thang con duoc
//         return (
//             <div>
//                 <AddUserInfor handleAddNewUser={this.handleAddNewUser} />
//                 <br />
//                 {/* <DisplayInfor name='def' age='25' myArr={myArr} /> */}
//                 <DisplayInfor
//                     listUsers={this.state.listUsers}
//                     handleDeleteUser={this.handleDeleteUser}
//                 />
//             </div>
//         );
//     }
// }

const MyComponent = () => {
    const [listUsers, setListUsers] = useState([
        { id: 1, name: 'Huy', age: '16' },
        { id: 2, name: 'Hao', age: '21' },
        { id: 3, name: 'Han', age: '22' }
    ])

    const handleAddNewUser = (userObj) => {
        setListUsers([...listUsers, userObj])
    }

    const handleDeleteUser = (userId) => {
        let listUsersClone = [...listUsers]
        listUsersClone = listUsersClone.filter(item => item.id !== userId)
        setListUsers(listUsersClone)
    }
    return (
        <div>
            <AddUserInfor handleAddNewUser={handleAddNewUser} />
            <br />
            {/* <DisplayInfor name='def' age='25' myArr={myArr} /> */}
            <DisplayInfor
                listUsers={listUsers}
                handleDeleteUser={handleDeleteUser}
            />
        </div>
    );

}



export default MyComponent;