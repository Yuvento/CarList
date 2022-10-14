import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Card, Container, Row , Col} from 'react-bootstrap'

const CarList = () => {
    const [cars,setCars] = useState([])
    const [loading,setLoading] = useState(true)

   const getCars = async() => {
    try{
        setLoading(true)
        const response = await axios.get('https://bootcamp-rent-car.herokuapp.com/admin/car')
        const data = response.data;
        console.log(data)
        setCars(data);
        setLoading(false)

    }catch (err){
        console.log(err)
    }
   } 

    useEffect(()=>{
       getCars()
    },[])

  return (
    <Container>
        <Row xs={1} md={4} className="g-4">
            {loading?<div>Loading Please Wait!</div>:cars.map(car=>(
                <Col>
                    <Card className='mt-5' >
                    <Card.Img  src={car.image}/>
                    <Card.Body>
                        <h1>{car.Name}</h1>
                        <Card.Text className='fw-bold'>Rp. {car.price}</Card.Text>
                        <p className='fw-bold'>Bom Bom Bakudan !</p>
                    </Card.Body>
                    </Card>
                </Col>
            ))}

        </Row>
   </Container>
  )
}

export default CarList