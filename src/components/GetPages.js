import React, { useState, useEffect, useCallback } from 'react';
import { Card, Container } from 'react-bootstrap';
import axiosApi from '../axiosApi';

const GetPages = ({ match }) => {
    const [pages, setPages] = useState([]);

    const fetchData = useCallback(async () => {
        let url = 'pages/'

        if (match.params.name) {
            url += `${match.params.name}.json`

        }
        const response = await axiosApi.get(url);
        const pages = Object.keys(response.data.title[0]).map(id => ({
            ...response.data,
            id,
        }))
        setPages(pages);

    }, [match.params.name]);

    useEffect(() => {
        fetchData().catch(console.error);
    }, [fetchData]);

    console.log(pages)

    return (
        <>
            {pages.map(page => (
                <Container className='d-flex justify-content-center' key={page.id}>
                    <Card className='my-5' style={{ width: '50%' }}>
                        <Card.Header>Page: {match.params.name}</Card.Header>
                        <Card.Body>
                            <blockquote className="blockquote mb-0">
                                <footer className="blockquote-footer pt-3">
                                    {page.title}
                                </footer>
                                <p>
                                    {' '}{page.content}{' '}
                                </p>
                            </blockquote>
                        </Card.Body>
                    </Card>
                </Container>
            ))}
        </>
    )
}

export default GetPages;
