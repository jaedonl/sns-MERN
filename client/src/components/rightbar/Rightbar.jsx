import React, { useContext, useEffect, useState } from 'react'
import { Users } from "../../data/dummyData"
import axios from "axios";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./Rightbar.scss" 
import Online from '../online/Online'
import { Cake, Add, Remove } from "@material-ui/icons"


const Rightbar = ({ user }) => {
    const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER
    const [friends, setFriends] = useState([]);
    const {user:currentUser, dispatch} = useContext(AuthContext);
    const [followed, setFollowed] = useState(currentUser.followings.includes(user?.id));
    // const [followed, setFollowed] = useState(false);


    useEffect(() => {
        const getFriends = async () => {
            try {
                const friendList = await axios.get("/users/friends/" + user._id);
                setFriends(friendList.data);
            } catch (err) {
            }
        };
        getFriends()
    }, [user])

    const handleClick = async () => {
        try {
            if (followed) {
                await axios.put(`/users/${user._id}/unfollow`, {
                    userId: currentUser._id,
                });
                dispatch({ type: "UNFOLLOW", payload: user._id });
            } else {
                await axios.put(`/users/${user._id}/follow`, {
                    userId: currentUser._id,
                });
                dispatch({ type: "FOLLOW", payload: user._id });
            }
            setFollowed(!followed);
        } catch (err) {
        }
    };

    const HomeRightbar = () => {
        return(
            <>
                <div className="birthdayContainer">
                    <Cake className="birthdayImg" htmlColor="tomato" />
                    <span className="birthdayText">
                        <b>Yoonjung Ko</b> and <b>3 other friends</b> have a birthday today
                    </span>
                </div>

                <div className="rightbarAds">
                    <img className="rightbarAd" src={`${publicFolder}ads/curryads.jpg`} alt="" />
                    <img className="rightbarAd" src={`${publicFolder}ads/dogetothemoon.jpg`} alt="" />
                </div>                

                <h4 className="rightbarTitle">Online Friends</h4>

                
                <ul className="rightbarFrinedList">
                    { Users.map((user, idx) => {
                        return <Online user={user} key={idx} />
                    })}
                </ul>
            </>
        )
    }

    const ProfileRightbar = () => {
        return (
            <>
                {user.username !== currentUser.username && (
                    <button className="rightbarFollowButton" onClick={handleClick}>
                        {followed ? "Unfollow" : "Follow"}
                        {followed ? <Remove /> : <Add />}
                    </button>
                )}
                <h4 className="rightbarTitle">User information</h4>
                <div className="rightbarInfo">
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">City:</span>
                        <span className="rightbarInfoValue">{user.city}</span>
                    </div>

                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">From:</span>
                        <span className="rightbarInfoValue">{user.from}</span>
                    </div>

                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">Relationship:</span>
                        <span className="rightbarInfoValue">{user.relationship === 1 ? "Single" : user.relationship === 2 ? "In a relationship" : "-"}</span>
                    </div>
                </div>

                <h4 className="rightbarTitle">User friends</h4>
                <div className="rightbarFollowings">

                    {friends.map((friend) => (
                        <Link to={"/profile/"+friend.username} style={{textDecoration: "none", color: "#000"}}>
                            <div className="rightbarFollowing">
                                <img className="rightbarFollowingImg" 
                                    src={friend.profilePicture  ? publicFolder + friend.profilePicture 
                                                                : publicFolder + "person/noAvatar.png"} 
                                    alt="" 
                                />
                                <span className="rightbarFollowingName">{friend.username}</span>
                            </div>
                        </Link>
                    ))}
                    

                </div>
            </>
        )
    }

    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
                { user ? <ProfileRightbar /> : <HomeRightbar />}
                
            </div>
        </div>
    )
}

export default Rightbar
