import React from 'react'


/**Bootstrap Imports */
import { Container, Row, Col, FormControl, Form } from 'react-bootstrap';

/**
 ** CSS imports
 */
import './FormSection.css'

const FormSection = () => {
    return (
        <div className="form-section">
            <h1 className="form-section__heading">Farmer Info</h1>
            <div className="form-section__one-container">
                <Container fluid='xs' className='p-6'>
                    <Form>
                        <Row>
                            <Col md={{ span: 4, offset: 2 }} xs={12}>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="Name" placeholder="Enter Name" />

                                </Form.Group>
                            </Col>
                            <Col md={4} xs={12}>
                                <Form.Group controlId="exampleForm.ControlSelect1">
                                    <Form.Label>Area</Form.Label>
                                    <Form.Control as="select">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Form.Control>
                                </Form.Group>
                            </Col>
                        </Row>
                    </Form>
                </Container>
            </div>
        </div>
    )
}

export default FormSection
