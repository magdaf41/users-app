const { Component } = require("react")

import React, { Component } from 'react';
import './Users.css'

class Users extends Component {

    render() {
        return (
            <div className="users-main">
                <h1>User's List</h1>
                <form>
                    <input type="text" placeholder="Enter name" />
                    <ul>
                        <li>Hans</li>
                        <li>MArcin</li>
                    </ul>
                </form>
            </div>
        )
    }
}

export default Users;