import React, { useState, useEffect } from 'react'
import "./Feed.scss" 
import Share from '../share/Share'
import Post from '../post/Post'
import axios from 'axios'


const Feed = ({username}) => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        const fetchPosts = async () => {
            const res = username ? await axios.get('/posts/profile/'+username) 
                                : await axios.get('/posts/timeline/618d78f3ec3816fcd220fa02')
            setPosts(res.data)
        }
        fetchPosts()
    }, [username])
    
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
