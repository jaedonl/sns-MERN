import React, { useState } from 'react';
import "./Post.scss" 
import { MoreVert, ThumbUp, Favorite } from "@material-ui/icons"
import { Users } from "../../data/dummyData"

const Post = ({ post }) => {
    const [like, setLike] = useState(post.like)
    const [isLike, setIsLike] = useState(false)
    const [comment, setComment] = useState(post.comment)
    
    const likeHandler = () => {
        setIsLike(!isLike)
        isLike ? setLike(like-1) : setLike(like+1)        
    }
    
    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img className="postProfileImg" src=
                            { Users.filter((u) => u.id === post.userId)[0].profilePicture }
                        />
                        <span className="postUsername">
                            { Users.filter((u) => u.id === post.userId)[0].username }
                        </span>
                        <span className="postDate">{post.date}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert />
                    </div>
                </div>
                
                <div className="postCenter">
                    { post.desc ? <span className="postText">{post.desc}</span> : null}                    
                    { post.photo ? <img className="postImg" src={post.photo} alt="" /> : null }                    
                </div>
                
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <ThumbUp className="likeIcon" htmlColor="gold" onClick={likeHandler} />
                        <Favorite className="likeIcon" htmlColor="tomato" onClick={likeHandler} />
                        <span className="postLikeCounter">{isLike ? <span>you and</span> : null} {like} people like it</span>
                    </div>

                    <div className="postBottomRight">
                        <span className="postCommentText">{comment} comments</span>            
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post
