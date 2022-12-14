import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import PlaceholderImage from '../assets/image/no-image.png';
import FormCar from '../component/FormCar/FormCar';
import {useNavigate } from 'react-router-dom';


const CarList = () => {
	const [cars, setCars] = useState([]);
	const [filteredCars, setFilteredCars] = useState([]);
	const [isFiltered, setIsFiltered] = useState(false);
	const [form, setForm] = useState({
		name: '',
		category: '',
		price: '',
		status: '',
	});

	useEffect(() => {
		getCars();
	}, []);

	const getCars = async () => {
		try {
			const response = await axios.get(
				'https://bootcamp-rent-cars.herokuapp.com/customer/v2/car?pageSize=10'
			);
			const data = response.data;
			setCars(data.cars);
            console.log(data)
		} catch (err) {
			console.log(err);
		}
	};

	const filterCar = () => {
		setIsFiltered(true);
		let isRented = form.status === 'true' ? true : false;
		let data = cars
		let isPrice = form.price === '200000' ? data.price < 200000 : data.price > 70000
		console.log(cars.data)
        if(form.name !== ""){
            data = data.filter(item =>
				item.name?.toLowerCase().includes(form.name.toLowerCase()) 
			)
        }
        if(form.category !== ""){
            data = data.filter(item => item.category === form.category)
        }
		if(form.price !== ""){
            data = data.filter(item => item.price === isPrice)
        }
        if(form.status !== ""){
            data = data.filter(item => item.status === isRented)
        }

		setFilteredCars(data);
	};

	let navigate = useNavigate()

	const handleViewDetail = (id)=>{
        navigate(`/cars/${id}`)
    }

	return (
		<Container>
			<FormCar isFiltered={isFiltered} onSearchCar={filterCar} setForm={setForm} />
			<Row xs={1} md={4} className="g-4">
				{filteredCars.map((car) => (
					<Col key={car.id}>
						<Card className="mt-5" >
							{car.image != null ? (
								<Card.Img src={car.image} />
							) : (
								<Card.Img src={PlaceholderImage} />
							)}
							<Card.Body>
								{car.name != null ? (
									<Card.Text className="fw-bold">{car.name}</Card.Text>
								) : (
									<Card.Text className="fw-bold">name not exist</Card.Text>
								)}
								<Card.Text className="fw-bold">Rp.{car.price}/Hari</Card.Text>
								<p className="fw-bold">Mobil impian tapi tidak mampu beli</p>
								<div className="d-grid gap-2">
									<Button className="fw-bold" variant="success" size="sm"
										onClick={()=> handleViewDetail(car.id)}
									>
										Pilih Mobil
									</Button>
								</div>
							</Card.Body>
						</Card>
					</Col>
				))}
			</Row>
		</Container>
	);
};

export default CarList;
