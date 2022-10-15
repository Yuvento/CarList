import React, {useState } from 'react'
import axios from 'axios'
import { Card, Container, Row , Col , Button} from 'react-bootstrap'
import PlaceholderImage from '../assets/image/no-image.png'
import FormCar from '../component/searchCar/FormCar'

const CarList = () => {
    const [cars,setCars] = useState([])
    const [filteredCars, setFilteredCars]= useState([])
    const [isFiltered,setIsFiltered] =useState(true)
    const [form,setForm] = useState ({
        name:'',
        category : '',
        price : '',
        status : ''

    })

   const getCars = async() => {
    try{
        const response = await axios.get('https://bootcamp-rent-cars.herokuapp.com/customer/v2/car')
        const data = response.data;
        console.log(data)
        setCars(data);
        handleSearch()
    }catch (err){
        console.log(err)
    }
   } 

   //handlesearch ganti nama filtercar
    const handleSearch = ()=>{
        setIsFiltered(true)
        let data = cars
        let check = form.status === "true" ? true:false
        //check ganti isRendted
        //price ganti range

        const filteredData = cars.filter(car=>{
            if (car.name?.toLowerCase().includes(form.name) && car.category===form.category){
                return car
            }
        })

        if(form.name !== ""){
            data = data.filter(item => item.name === form.name)
            console.log( data.filter(item => item.name === form.name))
        }
        if(form.category !== ""){
            data = data.filter(item => item.category === form.category)
            console.log( data.filter(item => item.category === form.category))
        }
        if(form.price !== ""){
            data = data.filter(item => item.price === +form.price)
            console.log( data.filter(item => item.price === +form.price))
        }
        if(form.status !== ""){
            data = data.filter(item => item.status === check)
            console.log( data.filter(item => item.status === check))          
        }
        

        setFilteredCars(filteredData)
        console.log(data)
    }

return (
    <Container>
        <FormCar isFiltered={sFiltered} getCars={getCars} setForm={setForm} />
        <Row xs={1} md={4} className="g-4">
            {filteredCars.map(car=>(
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