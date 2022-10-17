import React from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    let navigate = useNavigate()

    const handlecarlist = () => {
        navigate('/cars')
    }
  return (
   
    <div>
        <Button onClick={handlecarlist}>
            Click Me
        </Button>
    </div>
  )
}

export default Home