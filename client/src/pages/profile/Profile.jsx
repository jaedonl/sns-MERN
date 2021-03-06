import React, { useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import "./Profile.scss" 
import Topbar from '../../components/topbar/Topbar'
import Rightbar from '../../components/rightbar/Rightbar'
import Feed from '../../components/feed/Feed'
import Sidebar from '../../components/sidebar/Sidebar'
import axios from 'axios'


const Profile = () => {
    const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER
    const [user, setUser] = useState({})
    const [test, setTest] = useState({})
    const username = useParams().username

    useEffect(() => {
        const fetchUser = async () => {
            const res = await axios.get(`/users?username=${username}`);
            setUser(res.data);
            
        };
        fetchUser();
      }, [username]);

    return (
        <>
            <Topbar />
            <div className="profile">
                <Sidebar />
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
        
                            <img className="profileCoverImg" 
                                src={user.coverPicture  ? publicFolder + user.coverPicture 
                                                        : publicFolder + 'profilecover/skyblue.jpg' } 
                                alt="" />
                            <img className="profileUserImg" 
                                src={user.profilePicture    ? publicFolder + user.profilePicture 
                                                            : publicFolder + 'person/noAvatar.png' } 
                                
                                alt="" />
                        </div>                
                        <div className="profileInfo">
                            <h4 className="profileInfoName">{user.username}</h4>
                            <span className="profileInfoDesc">{user.desc}</span>
                        </div>                                
                    </div>
                    <div className="profileRightBottom">
                        <Feed username={username} />
                        <Rightbar user={user} />
                    </div>                    
                </div>                
            </div>
        </>            
    )
}

export default Profile
