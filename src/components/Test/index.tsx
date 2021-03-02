import React, {useState, useEffect} from 'react'

const Test:React.FC = () => {

  useEffect(() => {
    console.log("render")
  },[])

  return(
    <div>
      testaaaaaa
    </div>
  )
}

export default Test