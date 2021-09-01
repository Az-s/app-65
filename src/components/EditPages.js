import React, { useState, useEffect } from 'react';
import { Container, Form, Button, Card } from 'react-bootstrap';

const EditPages = () => {
    return (
        <>
            <Container className='d-flex justify-content-center'>
                <Card style={{ width: '50%' }} className='mt-5'>
                    <Card.Body>
                        <Card.Title>Edit Pages</Card.Title>
                        <Form className='p-3'>
                            <Form.Label>Select page</Form.Label>
                            <Form.Select>
                                <option>Default select</option>
                                <option>Default select</option>
                                <option>Default select</option>
                                <option>Default select</option>
                                <option>Default select</option>
                            </Form.Select>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Title</Form.Label>
                                <Form.Control type="text"/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Content</Form.Label>
                                <Form.Control as="textarea" rows={3} type="text" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Save
                            </Button>
                        </Form>
                    </Card.Body>
                </Card>
            </Container>
        </>
    )
}

export default EditPages;
