import React, { useState } from "react";

// class AddUserInfor extends React.Component {
//     state = {
//         name: '',
//         age: ''
//     }

//     // handleClick(event) {
//     //     console.log('Click me');
//     //     this.setState({
//     //         name: 'Hao'
//     //     })

//     // }
//     // handleOnMouseOver(event) {
//     //     console.log(event);
//     //     console.log(this.state.name);

//     // }

//     handleOnChangeInput(event) {
//         console.log(event.target.value)
//         this.setState({
//             name: event.target.value
//         })
//     }
//     handleOnChangeAge(event) {
//         this.setState({
//             age: event.target.value
//         })
//     }

//     handleOnSubmit(event) {
//         event.preventDefault()
//         console.log(this.state)
//         this.props.handleAddNewUser({
//             //userObj
//             id: Math.floor(Math.random() * 100) + '-random',
//             name: this.state.name,
//             age: this.state.age
//         })

//     }

//     render() {
//         return (
//             <div >
//                 <h3 className="font-bold">My name is {this.state.name} and I'm {this.state.age} years old</h3>
//                 {/* {Math.random()} */}
//                 {/* <button onClick={(event) => { this.handleClick(event) }} >Click me</button> */}
//                 {/* <button onMouseOver={(event) => { this.handleOnMouseOver(event) }}>Hover me</button> */}
//                 <form className="w-30 block" onSubmit={(event) => { this.handleOnSubmit(event) }}>
//                     <input
//                         className="p-2 mr-2 border rounded-md focus:outline-none focus:border-sky-500 focus:ring-1 "
//                         value={this.state.name}
//                         type='text'
//                         placeholder="Enter your name"
//                         onChange={(event) => { this.handleOnChangeInput(event) }}
//                     />
//                     <input
//                         className="p-2 mr-2 border rounded-md focus:outline-none focus:border-sky-500 focus:ring-1"
//                         value={this.state.age}
//                         type='text'
//                         placeholder="Enter your age"
//                         onChange={(event) => { this.handleOnChangeAge(event) }}
//                     />
//                     <br />
//                     <input
//                         className="block px-6 py-2 border rounded-sm cursor-pointer hover:bg-violet-400"
//                         type="submit"
//                         value="Add"
//                     />


//                 </form>
//             </div >
//         );

//     }
// }

const AddUserInfor = (props) => {
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const handleOnChangeInput = (event) => {
        setName(event.target.value)
    }

    const handleOnChangeAge = (event) => {
        setAge(event.target.value)
    }

    const handleOnSubmit = (event) => {
        event.preventDefault()
        props.handleAddNewUser({
            id: Math.floor(Math.random() * 100) + '-random',
            name: name,
            age: age
        })
    }

    return (
        <div >
            <h3 className="font-bold">My name is {name} and I'm {age} years old</h3>
            <form className="w-30 block" onSubmit={(event) => { handleOnSubmit(event) }}>
                <input
                    className="p-2 mr-2 border rounded-md focus:outline-none focus:border-sky-500 focus:ring-1 "
                    value={name}
                    type='text'
                    placeholder="Enter your name"
                    onChange={(event) => { handleOnChangeInput(event) }}
                />
                <input
                    className="p-2 mr-2 border rounded-md focus:outline-none focus:border-sky-500 focus:ring-1"
                    value={age}
                    type='text'
                    placeholder="Enter your age"
                    onChange={(event) => { handleOnChangeAge(event) }}
                />
                <br />
                <input
                    className="block px-6 py-2 border rounded-sm cursor-pointer hover:bg-violet-400"
                    type="submit"
                    value="Add"
                />
            </form>
        </div >
    );


}


export default AddUserInfor;