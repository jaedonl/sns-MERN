import React, { useState, useEffect, useContext } from 'react'
import "./Feed.scss" 
import Share from '../share/Share'
import Post from '../post/Post'
import axios from 'axios'
import { AuthContext } from '../../context/AuthContext';


const Feed = ({username}) => {
    const [posts, setPosts] = useState([])  
    const { user } = useContext(AuthContext)


    useEffect(() => {
        const fetchPosts = async () => {
            const res = username    ? await axios.get('/posts/profile/' + username) 
                                    : await axios.get('/posts/timeline/' + user._id)
            setPosts(res.data)
        }
        fetchPosts()
    }, [username, user._id])
    
    return (
        <div className="feed">
            <div className="feedWrapper">
                <Share />
                { posts.map((post, idx) => {
                   return <Post post={post} key={idx} /> 
                })}
            </div>
        </div>
    )
}

export default Feed
