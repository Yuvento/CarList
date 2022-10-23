import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams} from 'react-router-dom';
import BlankFormCar from '../component/BlankFormCar/BlankFormCar';
import { Card, Container, Row, Col, Accordion ,Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import './CarDetail.css'


const CarDetail = () => {
    const [cars, setCars] = useState([]);
    const {id}= useParams();


    // eslint-disable-next-line react-hooks/exhaustive-deps
    const getCars = async () => {
		try {
			const response = await axios.get(`https://bootcamp-rent-cars.herokuapp.com/customer/car/${id}`)
			const data = response.data;
			setCars(data);
            console.log(data)
		} catch (err) {
			console.log(err);
		}
	}

    useEffect(()=>{
        getCars()
        console.log("test")
    },[getCars]) 


    return (
        <Container>
            <BlankFormCar/>
            <Row className="pt-4 ps-3" >
                <Col>
                    <Card>
                        <Card.Body >
                            <h5><strong>Tentang Paket</strong></h5>
                            <h5 className="mt-3"><strong>Includes</strong></h5>
                            <ul>
                                <li>Apa saja yang termasuk dalam paket misal durasi max 12 jam</li>
                                <li>Sudah termasuk bensin selama 12 jam</li>
                                <li>Sudah termasuk Tiket Wisata</li>
                                <li>Sudah termasuk pajak</li>
                            </ul>
                            <h5 className="mt-3"><strong>Excludes</strong></h5>
                            <ul>
                                <li>Tidak termasuk biaya makan sopir Rp 75000/hari</li>
                                <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                                <li>Tidak termasuk okomodasi penginapan</li>
                            </ul>
                            <Accordion >
                                <Accordion.Header>
                                    <h5 className="mt-3"><strong>Refund, Reschedule, Overtime</strong></h5>
                                </Accordion.Header>
                                <Accordion.Body >
                                    <ul>
                                        <li> Tidak termasuk biaya makan sopir Rp75.000/hari</li>
                                        <li> Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp20.000/jam</li>
                                        <li> Tidak termasuk akomodasi penginapan</li>
                                        <li> Tidak termasuk biaya makan sopir Rp75.000/hari</li>
                                        <li> Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp20.000/jam</li>
                                        <li> Tidak termasuk akomodasi penginapan</li>
                                        <li> Tidak termasuk biaya makan sopir Rp75.000/hari</li>
                                        <li> Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp20.000/jam</li>
                                        <li> Tidak termasuk akomodasi penginapan</li>
                                    </ul>
                                </Accordion.Body>
                                </Accordion>
                        </Card.Body>
                    </Card>
                </Col>
            
                <Col>
                    <Card >
                            <Card.Img variant="top"  src={cars.image} />
                            <Card.Body>
                                <Card.Title>
                                    <h5 className="mt-3"><strong>{cars.name}</strong></h5>
                                    {cars.category === "small" ? (
                                        <h5><small><FontAwesomeIcon icon={faUser}/> 4-6 orang</small></h5>
                                    )
                                    :cars.category === "medium" ? (
                                        <h5><small><FontAwesomeIcon icon={faUser}/> 6-8 orang</small></h5>
                                    )
                                    :   <h5><small><FontAwesomeIcon icon={faUser}/> 8-10 orang</small></h5>
                                    }
                                </Card.Title>
                                    <Row className='mt-5'>
                                        <Col  xs={9} md={9} > <h5 className="mt-3">Tentukan Lama Sewa Mobil (max. 7 hari)</h5></Col>
                                    </Row>
                                    <Row className='mt-1'>
                                        <Col  md={12} >
                                             <Form.Control type="date" placeholder='pilih tanggal mulai dan akhir sewa'/>
                                        </Col>
                                    </Row>
                                    <Row className='mt-5'>
                                        <Col xs={9} md={8} > <h5 className="mt-3"><strong>Total</strong></h5></Col>
                                        <Col xs={3} md={4} > <h5 className="mt-3"><strong>Rp.{cars.price}</strong></h5></Col>
                                    </Row>
                                    <Row className='mt-3'>
                                        <Button  variant="success" size='lg'>Lanjutkan Pembayaran</Button>
                                    </Row>
                            </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
  }

  export default CarDetail
  