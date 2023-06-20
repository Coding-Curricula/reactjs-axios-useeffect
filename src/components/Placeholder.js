import React, { useState, useEffect } from 'react'

import axios from 'axios'

export default function Placeholder() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        try {
            const getUsers = async () => {
                const response = await axios.get('https://jsonplaceholder.typicode.com/users')
                setUsers(response.data)
                console.log(response.data)
            }
            getUsers()

        } catch (error) {
            console.log(error)
        }
    }, [users])

    return (
        <div>
            <h1>Placeholder</h1>
            <h2>Users</h2>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        <h3>{user.name}</h3>
                        <h4>{user.email}</h4>
                        <h4>{user.address.city}</h4>
                    </li>
                ))}
            </ul>
        </div>
    )
}
