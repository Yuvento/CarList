import React from 'react';
import { Container, Card, Col, Row, Form, Button } from 'react-bootstrap';
import './FormCar.css'


const FormCar = ({ isFiltered, onSearchCar, setForm , resetForm , form}) => {

	return (
		<Container className="mt-3">
			<Card>
				<h6 className="ms-4 mt-2">Pencarianmu</h6>
				<Row>
					<Col>
						<Form>
							<Form.Group className="mb-3 ">
								<Form.Label className="ms-4">
									<small>Nama Mobil</small>
								</Form.Label>
								<Form.Control 
									size="sm"
									className="form-color ms-4"
									type="text"
									value={form.name}
									placeholder="Ketik nama/tipe mobil"
									onChange={(event) =>
										setForm((prev) => ({ ...prev, name: event.target.value }))
									}
								/>
							</Form.Group>
						</Form>
					</Col>
					<Col>
						<Form>
							<Form.Group className="mb-3">
								<Form.Label className="ms-4">
									<small>Kategori</small>
								</Form.Label>
								<Form.Select
									size="sm"
									className="form-color ms-4"
									value={form.category}
									onChange={(event) =>
										setForm((prev) => ({
											...prev,
											category: event.target.value,
										}))
									}
								>
										<option> Masukan Kapasitas Mobil</option>
										<option value="small">4-6 orang</option>
										<option value="medium">6-8 orang</option>
										<option value="large">8-10 orang</option>
									
								</Form.Select>
							</Form.Group>
						</Form>
					</Col>
					<Col>
						<Form>
							<Form.Group className="mb-3">
								<Form.Label className="ms-4">
									<small>Harga</small>
								</Form.Label>
								<Form.Select
									size="sm"
									className="form-color ms-4"
									value={form.price}
									onChange={(event) =>
										setForm((prev) => ({ ...prev, price: event.target.value }))
									}
								>
									<option>Masukan Harga sewa per Hari</option>
									<option value="400000"> {"<"} Rp. 400.000 </option>
									<option value="600000"> Rp.400.000 - Rp.600.000</option>
									<option value="700000"> Rp.600.000 - Rp.700.000</option>
								</Form.Select>
							</Form.Group>
						</Form>
					</Col>
					<Col>
						<Form>
							<Form.Group className="mb-3">
								<Form.Label className="ms-4">
									<small>Status</small>
								</Form.Label>
								<Form.Select
									size="sm"
									className="form-color ms-4"
									value={form.status}
									onChange={(event) =>
										setForm((prev) => ({ ...prev, status: event.target.value }))
									}
								>
									<option>Pilih Status</option>
									<option value="true">Disewakan</option>
									<option value="false">tidak disewa</option>
								</Form.Select>
							</Form.Group>
						</Form>
					</Col>
					<Col>
						<Button
							className="mt-4 ms-5"
							variant={isFiltered ? 'outline-primary' : 'success'}
							onClick={isFiltered ? resetForm : onSearchCar }
						>
							{isFiltered ? 'Edit' : 'Cari Mobil' }
						</Button>
					</Col>
				</Row>
			</Card>
		</Container>
	);
};

export default FormCar;
