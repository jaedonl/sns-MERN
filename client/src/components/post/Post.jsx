import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import "./Post.scss" 
import { MoreVert, ThumbUp, Favorite } from "@material-ui/icons"
import axios from 'axios';
import {format} from 'timeago.js'
import { AuthContext } from '../../context/AuthContext';

const Post = ({ post }) => {
    const [like, setLike] = useState(post.likes.length)
    const [isLike, setIsLike] = useState(false)
    const [user, setUser] = useState({})
    const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER
    const { user: currentUser } = useContext(AuthContext)
    
    useEffect(() => {
        setIsLike(post.likes.includes(currentUser._id))
    }, [currentUser._id, post.likes])
    
    useEffect(() => {        
        const fetchUser = async () => {
            const res = await axios.get(`/users?userId=${post.userId}`)
            setUser(res.data)            
        }
        fetchUser()
        
    }, [post.userId])
    
    const likeHandler = () => {
        try {
            axios.put("/posts/"+post._id+"/like", {userId: currentUser._id})
        } catch(err) {
            console.log(err)
        }
        setIsLike(!isLike)
        isLike ? setLike(like-1) : setLike(like+1)        
    }
    
    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <Link to={`profile/${user.username}`}>
                            <img className="postProfileImg" src={user.profilePicture ? publicFolder + user.profilePicture : publicFolder + "person/noAvatar.png"} />
                        </Link>                        
                        <span className="postUsername">
                            { user.username}
                        </span>
                        <span className="postDate">{format(post.createdAt)}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert />
                    </div>
                </div>
                
                <div className="postCenter">
                    { post.desc ? <span className="postText">{post.desc}</span> : null}                    
                    { post.img ? <img className="postImg" src={publicFolder + post.img} alt="" /> : null }                     
                </div>
                
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <ThumbUp className="likeIcon" htmlColor="gold" onClick={likeHandler} />
                        <Favorite className="likeIcon" htmlColor="tomato" onClick={likeHandler} />
                        <span className="postLikeCounter">
                            {isLike ? <span>you and {like-1} people like it</span> : <span>{like} people like it </span>} 
                        </span>
                    </div>

                    <div className="postBottomRight">
                        <span className="postCommentText">{post.comment} comments</span>            
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post
