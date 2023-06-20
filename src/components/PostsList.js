import React from 'react'

export default function PostsList({ posts }) {
    return (
        <div className="posts">
            <h1>Posts</h1>
            <ol>
                {posts.map(post =>
                    <li key={post.id}>
                        <p>{post.body}</p>
                    </li>)}
            </ol>
        </div>
    )
}
