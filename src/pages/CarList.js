import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import PlaceholderImage from '../assets/image/no-image.png';
import FormCar from '../component/searchCar/FormCar';

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
				'https://bootcamp-rent-cars.herokuapp.com/customer/v2/car?pageSize=100'
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
		// let isNumber = Number(form.price)
	
		const filteredData = cars.filter((car) => {
			if (
				car.name?.toLowerCase().includes(form.name.toLowerCase()) &&
				car.category === form.category &&
				// car.price <= isNumber &&
				car.status === isRented 				
			) {
				return car;
			}
			

		});

		setFilteredCars(filteredData);
	};

	return (
		<Container>
			<FormCar isFiltered={isFiltered} onSearchCar={filterCar} setForm={setForm} />

			<Row xs={1} md={4} className="g-4">
				{filteredCars.map((car) => (
					<Col>
						<Card className="mt-5" key={car.id}>
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
									<Button className="fw-bold" variant="success" size="sm">
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
