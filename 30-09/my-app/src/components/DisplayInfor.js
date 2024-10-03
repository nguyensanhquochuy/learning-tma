import React, { useEffect, useState } from "react";

// class DisplayInfor extends React.Component {

//     constructor(props) {
//         super(props)
//         this.state = {
//             isShowHideListUser: true
//         }
//         console.log(">>> call me constructor");

//     }

//     componentDidMount() {
//         console.log(">>> call me componentDidMount");
//     }

//     componentDidUpdate(prevProps, prevState, snapshot) {
//         console.log(">>> call me componentDidUpdate");
//         console.log(this.props, prevProps)
//         if (this.props.listUsers !== prevProps.listUsers) {
//             if (this.props.listUsers.length == 5) {
//                 alert("You got 5 users")
//             }
//         }

//     }



//     handleShowHide = () => {
//         this.setState({
//             isShowHideListUser: !this.state.isShowHideListUser
//         })
//     }

//     render() {
//         console.log(">>> call me render");

//         // const { name, age, myArr } = this.props
//         const { listUsers } = this.props

//         return (
//             /* syntax: <> </> (Fragment) khong tao ra tag cha, dung de thay the cho <div></div> 
//                         vi khi dung div se tao ra 1 tag div ko can thiet
//                     ex:
//                         return (
//                             <div>
//                                 <div>a</div>
//                                 <div>b</div>
//                             </div>

//                         // Fragment
//                             <>
//                                 <div>a</div>
//                                 <div>b</div>
//                             </>
//                         )  
//             */
//             <div>
//                 <div>
//                     <span className="pointer" onClick={() => { this.handleShowHide() }} >
//                         {this.state.isShowHideListUser ? "Hide" : "Show"} list users
//                     </span>
//                 </div>

//                 {
//                     this.state.isShowHideListUser &&
//                     <>
//                         {console.log(this.props)}
//                         {/* My name is {name} and I'am {age} year old My array: {myArr} */}
//                         {
//                             listUsers.map((user, index) => {
//                                 console.log(user)
//                                 return (
//                                     <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
//                                         <div>My name: {user.name}</div>
//                                         <div>My age: {user.age}</div>
//                                         <button onClick={() => this.props.handleDeleteUser(user.id)} className="px-6 py-1 border rounded-sm cursor-pointer hover:bg-neutral-400" >Delete</button>
//                                         <hr />
//                                     </div>
//                                 )
//                             })
//                         }
//                     </ >
//                 }
//             </div >
//         )
//     }
// }
// Stateless : ko co state/ Stateful: co state

// function component, dung hook giup fc co the su dung state, 

const DisplayInfor = (props) => {
    const { listUsers } = props
    const [isShowHideListUser, setIsShowHideListUser] = useState(true)
    const handleShowHide = () => {
        setIsShowHideListUser(!isShowHideListUser)
    }

    console.log('>>>call me render')
    useEffect(() => {
        if (listUsers.length == 0) {
            alert('You deleted all users')
        }
        console.log('>>>call me useEffect')
    }, [listUsers]
    )

    return (
        <div>
            <div>
                <span className="pointer" onClick={() => { handleShowHide() }} >
                    {isShowHideListUser ? "Hide" : "Show"} list users
                </span>
            </div>
            {
                isShowHideListUser &&
                <>
                    {console.log('>>props: ', props)}
                    {/* My name is {name} and I'am {age} year old My array: {myArr} */}
                    {
                        listUsers.map((user, index) => {
                            console.log('>>user: ', user)
                            return (
                                <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                                    <div>My name: {user.name}</div>
                                    <div>My age: {user.age}</div>
                                    <button onClick={() => props.handleDeleteUser(user.id)} className="px-6 py-1 border rounded-sm cursor-pointer hover:bg-neutral-400" >Delete</button>
                                    <hr />
                                </div>
                            )
                        })
                    }
                </ >
            }
        </div >
    )

}

export default DisplayInfor