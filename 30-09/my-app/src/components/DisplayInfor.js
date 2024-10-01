import React from "react";

class DisplayInfor extends React.Component {

    state = {
        isShowHideListUser: true
    }

    handleShowHide = () => {
        this.setState({
            isShowHideListUser: !this.state.isShowHideListUser
        })
    }

    render() {
        // const { name, age, myArr } = this.props
        const { listUsers } = this.props

        return (
            <div>
                <div>
                    <span onClick={(event) => { this.handleShowHide(event) }} >Hide list users</span>
                </div>

                {this.state.isShowHideListUser && <div>
                    {console.log(this.props)}
                    {/* My name is {name} and I'am {age} year old
                My array: {myArr} */}
                    {listUsers.map((user, index) => {
                        console.log(user)
                        return (
                            <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                                <div>My name: {user.name}</div>
                                <div>My age: {user.age}</div>
                                <hr />
                            </div>
                        )



                    })
                    }
                </div >
                }
            </div>
        )
    }
}

export default DisplayInfor