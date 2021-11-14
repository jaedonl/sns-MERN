import React from 'react'
import "./Profile.scss" 
import Topbar from '../../components/topbar/Topbar'
import Rightbar from '../../components/rightbar/Rightbar'
import Feed from '../../components/feed/Feed'
import Sidebar from '../../components/sidebar/Sidebar'
import {} from "@material-ui/icons"


const Profile = () => {
    const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER

    console.log(publicFolder)
    return (
        <>
            <Topbar />
            <div className="profile">
                <Sidebar />
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                            <img className="profileCoverImg" src={`${publicFolder}profilecover/cover1.jpg`} alt="" />
                            <img className="profileUserImg" src={`${publicFolder}/person/jaedon_profile.jpg`} alt="" />
                        </div>                
                        <div className="profileInfo">
                            <h4 className="profileInfoName">Jaedon Lee</h4>
                            <span className="profileInfoDesc">이직이 목표!</span>
                        </div>                                
                    </div>
                    <div className="profileRightBottom">
                        <Feed />
                        <Rightbar profile />
                    </div>                    
                </div>                
            </div>
        </>            
    )
}

export default Profile
