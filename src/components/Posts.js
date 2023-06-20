import React, { useState, useEffect } from 'react'

import axios from 'axios'

import PostsList from './PostsList'

export default function Posts() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
                console.log(response.data)
                setPosts(response.data)


            } catch (error) {
                console.log(error)
            }
        }

        fetchPosts()
    }, [])

    return (
        <div>
            <PostsList posts={posts} />
        </div>
    )
}
