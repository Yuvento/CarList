import axios from "axios";
import { useEffect, useState } from "react";
import { useParams} from "react-router-dom";
import BlankFormCar from "../component/BlankFormCar/BlankFormCar"
import { Card, Container, Row, Col, Accordion  } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";


const CarDetail = () => {
    const [cars, setCars] = useState([]);
    const {id}= useParams();

    const getCars = async () => {
		try {
            //id gadapat
			const response = await axios.get(`https://bootcamp-rent-cars.herokuapp.com/customer/v2/car?pageSize=100/${id}`)
			const data = response.data;
			setCars(data.cars);
            console.log(data)
		} catch (err) {
			console.log(err);
		}
	}

    useEffect(()=>{
        getCars()
    },[]) 
    //warning disini

    return (
        <Container>
            <BlankFormCar/>
            <Row className="pt-4 ps-3" >
                <Col>
                    <Card>
                        <Card.Body >
                            <h2>Tentang Paket</h2>
                            <ul>
                                <li><h4>Apa saja yang termasuk dalam paket misal durasi max 12 jam</h4></li>
                                <li><h4>Sudah termasuk bensin selama 12 jam</h4></li>
                                <li><h4>Sudah termasuk Tiket Wisata</h4></li>
                                <li><h4>Sudah termasuk pajak</h4></li>
                            </ul>
                            <h2>Exclude</h2>
                            <ul>
                                <li><h4>Tidak termasuk biaya makan sopir Rp 75000/hari</h4></li>
                                <li><h4>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</h4></li>
                                <li><h4>Tidak termasuk okomodasi penginapan</h4></li>
                            </ul>
                            <Accordion defaultActiveKey="0" >
                                    <Accordion eventKey="0" >
                                        <Accordion.Header >
                                            <h2>Refund, Reschedule, Overtime</h2>
                                        </Accordion.Header>
                                        <Accordion.Body >
                                            <ul>
                                                <li> <h4>Tidak termasuk biaya makan sopir Rp 75.000/hari</h4></li>
                                                <li> <h4>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</h4></li>
                                                <li> <h4>Tidak termasuk akomodasi penginapan</h4></li>
                                                <li> <h4>Tidak termasuk biaya makan sopir Rp 75.000/hari</h4></li>
                                                <li> <h4>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</h4></li>
                                                <li> <h4>Tidak termasuk akomodasi penginapan</h4></li>
                                                <li> <h4>Tidak termasuk biaya makan sopir Rp 75.000/hari</h4></li>
                                                <li> <h4>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</h4></li>
                                                <li> <h4>Tidak termasuk akomodasi penginapan</h4></li>
                                            </ul>
                                        </Accordion.Body>
                                    </Accordion>
                                </Accordion>
                        </Card.Body>
                    </Card>
                </Col>
            
                <Col>
                    <Card style={{ width: '50rem' }}>
                            <Card.Img variant="top"  src={cars.image} />
                            <Card.Body>
                                <Card.Title>
                                    <h1>{cars.name}</h1>
                                    <FontAwesomeIcon icon={faUser}/> {cars.category}
                                </Card.Title>
                                <Card.Text >
                                    <Row className="Total">
                                        <Col  xs={9} md={9} ><h2>Total</h2></Col>
                                        <Col xs={3} md={3} ><h2>Rp.{cars.price}</h2></Col>
                                    </Row>
                                </Card.Text>
                            </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
  }

  export default CarDetail
  