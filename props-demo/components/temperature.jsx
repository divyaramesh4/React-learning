import React from 'react'

const Temperature = () => {
  let temp = 27
  if (temp < 15) {
        return <h1>It's cold Outside</h1>
      }
      else if( temp<30){
        return <h1>It's Nice outside</h1>
      }
      else{
        return <h1>It's Hot Outside</h1>
      }
}

export default Temperature