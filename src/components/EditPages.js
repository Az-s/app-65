import React, { useState, useEffect, useCallback } from 'react';
import { Container, Form, Button, Card } from 'react-bootstrap';
// import { NavLink, Switch } from "react-router-dom";
import axiosApi from '../axiosApi';

const CATEGORIES = [
    'about',
    'contacts',
    'content',
    'projects',
    'services',
];

const EditPages = ({ history }) => {

    const [editPage, setEditPage] = useState({
        category: '',
        title: '',
        content: '',
    });

    const [pageInfo, setPageInfo] = useState({});

    const onInputChange = (e) => {
        const { name, value } = e.target;
        setEditPage(prev => ({
            ...prev,
            [name]: value,
        }))

        if (name === 'category') {

            const response = axiosApi.get('pages/' + value + '.json');
            
            // const pageInfo = Object.keys(response.data).map(id => ({
            //     ...response.data[id],
            //     id,
            // }))

            const pageInfo = response.data;

            setPageInfo(pageInfo);
        }

    };

    const createPage = async (e) => {
        e.preventDefault();

        try {
            await axiosApi.post('/pages/' + editPage.category +'.json', editPage);
            // await axiosApi.put('/pages/' + editPage.category +'.json', editPage); скрыл в комменте так как put запрос заменял все а не менял нужный
        } finally {
            history.replace('/pages/' + editPage.category);
        }
    };

    console.log(pageInfo);

    return (
        <>
            <Container className='d-flex justify-content-center'>
                <Card style={{ width: '50%' }} className='mt-5'>
                    <Card.Body>
                        <Card.Title>Edit Pages</Card.Title>
                        <Form className='p-3' onSubmit={createPage}>
                            <Form.Label>Select page</Form.Label>
                            <Form.Select
                                id="category"
                                name='category'
                                value={editPage.category}
                                onChange={onInputChange}
                            >
                                <option>Open this select menu</option>
                                {CATEGORIES.map((item, index) => (
                                    <option value={item} key={index}>{item}</option>
                                ))}
                            </Form.Select>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Title</Form.Label>
                                <Form.Control
                                    type="text"
                                    name='title'
                                    value={editPage.title}
                                    onChange={onInputChange}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Content</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={3}
                                    type="text"
                                    name='content'
                                    value={editPage.content}
                                    onChange={onInputChange}
                                />
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
