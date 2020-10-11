import React from 'react';
import './UsersList.css'



function UsersList(props) {

    let usersList = props.usersList;
    let usersLiElements = usersList.map(user => <li key={user.id} {user.name}<span>X</span></li>

    );

console.log(usersList)

return (
    <ul className="the-list">
        {usersLiElements}
    </ul>
)

}
export default UsersList;