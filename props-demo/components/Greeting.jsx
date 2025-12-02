import React from 'react'

const Greeting = (props) => {
 return props.timeofDay === "morning" ? <h1>good Morning</h1> : <h1>Good Afternoon</h1>
}

export default Greeting