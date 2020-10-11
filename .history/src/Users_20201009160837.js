import React, {Component} from 'react';
import './Users.css';
import UsersList from './UsersList'

class Users extends Component {

    render() {
        return (
            <div className="users-main">
                <h1>User's List</h1>
                <form>
                    <input type="text" placeholder="Enter name" />
                    <button type="submit">Add user</button>

                </form>
            </div>
        );
    }
}

export default Users;