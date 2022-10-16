import React from 'react';
import { Container, Card, Col, Row, Form} from 'react-bootstrap';


const BlankFormCar = () => {
	return (
		<Container className="mt-3">
			<Card>
				<h6 className="ms-1">Pencarianmu</h6>
				<Row>
					<Col>
						<Form>
							<Form.Group className="mb-3 ps-3">
                            <Form.Label >
									<small>Nama Mobil</small>
							</Form.Label>
                                <Form.Control size="sm"disabled />
							</Form.Group>
						</Form>
					</Col>
					<Col>
						<Form>
							<Form.Group className="mb-3 ps-2">
								<Form.Label>
									<small>Kategori</small>
								</Form.Label>								
                                <Form.Control size="sm" disabled />
							</Form.Group>
						</Form>
					</Col>
					<Col>
						<Form>
							<Form.Group className="mb-3 pe-2">
								<Form.Label>
									<small>Harga</small>
								</Form.Label>
                                <Form.Control size="sm" disabled />
							</Form.Group>
						</Form>
					</Col>
					<Col>
						<Form>
							<Form.Group className="mb-3 pe-3">
								<Form.Label>
									<small>Status</small>
								</Form.Label>
                                <Form.Control size="sm" disabled />
							</Form.Group>
						</Form>
					</Col>
				</Row>
			</Card>
		</Container>
	);
};

export default BlankFormCar;
