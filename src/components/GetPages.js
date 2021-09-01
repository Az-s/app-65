import React, { useState, useEffect } from 'react';
import { Card, Container } from 'react-bootstrap';

const GetPages = () => {
    const [pages, setPages] = useState();

    useEffect(() => {
        
    }, [])
    return (
        <>
            <Container className='d-flex justify-content-center'>
                <Card className='mt-5'>
                    <Card.Header>Quote</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <footer className="blockquote-footer pt-3">
                                Someone famous in Source Title
                            </footer>
                            <p>
                                {' '}
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                                erat a ante.{' '}
                            </p>
                        </blockquote>
                    </Card.Body>
                </Card>
            </Container>
        </>
    )
}

export default GetPages;
