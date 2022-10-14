import React from 'react'
import { Container , Card , Col , Row , Form , Button} from 'react-bootstrap'

const FormCar = ({handleSearch,setForm}) => {
  return (
    <Container className="mt-3">
      <Card>
          <Row >
            <Col>
                <Form>
                  <Form.Group className="mb-3">
                      <Form.Label className='ms-4'><small>Nama Mobil</small></Form.Label>
                      <Form.Control size= "sm" className="Form-Control ms-4" type="text" placeholder="Ketik nama/tipe mobil" onChange={(event) => setForm(prev => ({...prev, name: event.target.value}))} />
                  </Form.Group>
                </Form>
            </Col>
            <Col>
                <Form>
                  <Form.Group className="mb-3">
                          <Form.Label className='ms-4' ><small>Kategori</small></Form.Label>
                          <Form.Select size= "sm" className="Form-Control ms-4"  onChange={(event) => setForm(prev => ({...prev, category: event.target.value}))}>
                            <option> Masukan Kapasitas Mobil</option>
                            <option value="4 - 6 orang">4-6 orang</option>
                            <option value="6 - 8 orang">6-8 orang</option>
                          </Form.Select>
                    </Form.Group>
                </Form>
            </Col>
            <Col>
                <Form>
                  <Form.Group className="mb-3" >
                          <Form.Label className='ms-4' ><small>Harga</small></Form.Label>
                          <Form.Select size= "sm" className="Form-Control ms-4" onChange={(event) => setForm(prev => ({...prev, price: event.target.value}))}>
                            <option>Masukan Harga sewa per Hari</option>
                            <option value={25000}>Rp. 2.000.000.000</option>
                            <option value="5000000000">Rp. 5.000.000.000</option>
                          </Form.Select>
                    </Form.Group>
                </Form>
            </Col>
            <Col>
                <Form>
                  <Form.Group className="mb-3" >
                  <Form.Label className='ms-4' ><small>Status</small></Form.Label>
                  <Form.Select size= "sm" className="Form-Control ms-4" onChange={(event) => setForm(prev => ({...prev, status: event.target.value}))}>
                      <option >Pilih Status</option>
                      <option value={true}>Disewa</option>
                      <option value={false}>tidak disewa</option>
                  </Form.Select>
                  </Form.Group>
                </Form>
            </Col>
              <Col >
                  <Button  className=" mt-4 ms-5 " variant="success" type="submit" onClick={handleSearch}>Cari Mobil</Button>
              </Col>
          </Row>
      </Card>
    </Container>
  )
}

export default FormCar