import React from 'react'
import "./Rightbar.scss" 
import Online from '../online/Online'
import { Cake } from "@material-ui/icons"
import { Users } from "../../data/dummyData"

const Rightbar = ({profile}) => {

    const HomeRightbar = () => {
        return(
            <>
                <div className="birthdayContainer">
                    <Cake className="birthdayImg" htmlColor="tomato" />
                    <span className="birthdayText">
                        <b>Donald Trump</b> and <b>3 other friends</b> have a birthday today
                    </span>
                </div>

                <div className="rightbarAds">
                    <img className="rightbarAd" src="/assets/ads/curryads.jpg" alt="" />
                    <img className="rightbarAd" src="/assets/ads/dogetothemoon.jpg" alt="" />
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
                <h4 className="rightbarTitle">User information</h4>
                <div className="rightbarInfo">
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">City:</span>
                        <span className="rightbarInfoValue">New York</span>
                    </div>

                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">From:</span>
                        <span className="rightbarInfoValue">South Korea</span>
                    </div>

                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">Relationship:</span>
                        <span className="rightbarInfoValue">Single</span>
                    </div>
                </div>

                <h4 className="rightbarTitle">User friends</h4>
                <div className="rightbarFollowings">
                    <div className="rightbarFollowing">
                        <img className="rightbarFollowingImg" src="/assets/person/jaesoon_profile.jpg" alt="" />
                        <span className="rightbarFollowingName">이재순</span>                        
                    </div>

                    <div className="rightbarFollowing">
                        <img className="rightbarFollowingImg" src="/assets/person/koyj_profile.jpg" alt="" />
                        <span className="rightbarFollowingName">고윤정</span>                        
                    </div>

                    <div className="rightbarFollowing">
                        <img className="rightbarFollowingImg" src="/assets/person/teemo_profile.jpg" alt="" />
                        <span className="rightbarFollowingName">Teemo Captain</span>                        
                    </div>

                </div>
            </>
        )
    }

    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
                { profile ? <ProfileRightbar /> : <HomeRightbar />}
                
            </div>
        </div>
    )
}

export default Rightbar
