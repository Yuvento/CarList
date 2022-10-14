import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Card, Container, Row , Col , Button} from 'react-bootstrap'
import PlaceholderImage from '../assets/image/no-image.png'
import FormCar from '../component/searchCar/FormCar'

const CarList = () => {
    const [cars,setCars] = useState([])
    const [loading,setLoading] = useState(true)
    const [form,setForm] = useState ({
        name:'',
        category : '',
        price : '',
        status : ''

    })

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

    const handleSearch = ()=>{
        let data = cars
        if(form.name !== ""){
            data = data.filter(item => item.name === form.name)
            console.log( data.filter(item => item.name === form.name))
        }
        if(form.status !== ""){
            data = data.filter(item => item.category === form.category)
            console.log( data.filter(item => item.category === form.category))
        }
        if(form.status !== ""){
            data = data.filter(item => item.price === form.price)
            console.log( data.filter(item => item.price === form.price))
        }
        if(form.status !== ""){
            data = data.filter(item => item.status === form.status)
            console.log( data.filter(item => item.status === form.status))
        }
       
       

        setCars(data)
    }

return (
    <Container>
        <FormCar  handleSearch={handleSearch} setForm={setForm} />
        <Row xs={1} md={4} className="g-4">
            {loading?<div>Loading Please Wait!</div>:
            cars.filter((car,index)=>{
                        if(index<=3) return car
                }).map(car=>(
                <Col>
                    <Card className='mt-5' key={car.id}>
                    {car.image != null ?<Card.Img  src={car.image}/>:<Card.Img  src={PlaceholderImage}/>}
                    <Card.Body>
                    {car.name != null ?  <Card.Text className='fw-bold'>{car.name}</Card.Text>:  <Card.Text className='fw-bold'>name not exist</Card.Text>}
                        <Card.Text className='fw-bold'>Rp.{car.price}/Hari</Card.Text>
                        <p className='fw-bold'>Mobil impian tapi tidak mampu beli</p>
                        <div className="d-grid gap-2">
                            <Button className="fw-bold"  variant="success"  size="sm">Pilih Mobil</Button>
                        </div>
                    </Card.Body>
                    </Card>
                </Col>
            ))}

        </Row>
   </Container>
  )
}

export default CarList