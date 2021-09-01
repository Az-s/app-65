import React, { useState, useEffect ,useCallback } from 'react';
import { Card, Container } from 'react-bootstrap';
import axiosApi from '../axiosApi';

const GetPages = ({match}) => {
    const [pages, setPages] = useState([]);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         const response = await axiosApi.get('pages.json');
    //         const pages = Object.keys(response.data).map(id => ({
    //             ...response.data[id],
    //             id,
    //         }))
    //         setPages(pages);
    //     };

    //     fetchData().catch(console.error);
    // }, []);

    const fetchData = useCallback(async () => {
        let url = 'pages/'

        if (match.params.name) {
            url += `${match.params.name} + ".json"`
        }

        const response = await axiosApi.get(url);
        const pages = Object.keys(response.data).map(id => ({
            ...response.data[id],
            id,
        }))
        setPages(pages);
    }, [match.params.name]);

    useEffect(() => {
        fetchData().catch(console.error);
    }, [fetchData]);
    console.log(match.params.name)

    return (
        <>
            {pages.map(page => (
                <Container className='d-flex justify-content-center'>
                    <Card className='my-5' style={{ width: '50%' }}>
                        <Card.Header>Page: {page.id}</Card.Header>
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
