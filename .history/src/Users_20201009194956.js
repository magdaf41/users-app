import React, {Component} from 'react';
import './Users.css';
import UsersList from './UsersList'

class Users extends Component {

    constructor(props) {
        super(props);

        this.state = {
            users: []
        };
    }

    addUser = (event) => {
        event.preventDefault();
        console.log("this.addUser")
    }

    render() {
        return (
            <div className="users-main">
                <h1>User's List</h1>
                <form onSubmit={this.addUser}>
                    <input ref={(element) => {this._inputName = element}} type="text" placeholder="Enter name" />
                    <button type="submit">Add user</button>
                    <UsersList usersList={[{id: 123, name: "Hans"}, {id: 897, name: "Julia"}]}/>

                </form>
            </div>
        );
    }
}

export default Users;