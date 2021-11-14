import React from 'react'
import "./Online.scss" 

const Online = ({ user }) => {
    return (
        <li className="rightbarFriend">

            <div className="rightbarProfileImgContainer">
                <img className="rightbarProfileImg" src={user.profilePicture} alt="" />
                <span className="rightbarOnline"></span>
            </div>

            <span className="">{user.username}</span>
        </li>
    )
}

export default Online
