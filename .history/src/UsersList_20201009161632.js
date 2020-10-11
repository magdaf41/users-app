import React from 'react';
import './UsersList.css'


function UsersList(props) {
    return (
        <ul className="the-list">
            <li>Hans <span>X</span></li>
            <li>Marcin <span>X</span></li>
        </ul>
    )
}

export default UsersList;