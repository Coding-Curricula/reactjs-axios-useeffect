import React, { useState, useEffect } from 'react'

export default function Practice() {

    const [count, setCount] = useState(0)
    const [toggle, setToggle] = useState(true)
    const [size, setSize] = useState(window.innerWidth)

    useEffect(() => {
        console.log(`Count: ${count} and Toggle: ${toggle}`)

        const handleResize = () => {
            setSize(window.innerWidth)
        }

        window.addEventListener('resize', handleResize)

        // cleanup function
        return () => {
            window.removeEventListener('resize', handleResize)
        }

    }, [count, toggle])

    return (
        <div>
            <h1>useEffect Practice</h1>
            <h2>Window Size: {size}</h2>
            <h2>Count: {count}</h2>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
            <h2>Toggle: {toggle ? 'true' : 'false'}</h2>
            <button onClick={() => setToggle(!toggle)}>Toggle</button>
        </div>
    )
}
