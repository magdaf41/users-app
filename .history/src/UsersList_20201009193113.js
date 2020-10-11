import React from 'react';
import './UsersList.css'



function UsersList(props) {

    let usersList = props.usersList;
    let usersLiElements = usersList.map((user) => {
        return <li>user<span>X</span></li>
    });

    console.log(usersList)

    return (
        <ul className="the-list">
            <li>Hans <span>X</span></li>
            <li>Marcin <span>X</span></li>
        </ul>
    )
}

export default UsersList;