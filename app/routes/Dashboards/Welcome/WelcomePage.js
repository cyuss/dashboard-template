import React from 'react';
import faker from 'faker/locale/en_US';
import { Link } from 'react-router-dom';
import {
    Container,
    Row,
    Card,
    CardBody,
    Badge,
    Table,
    CardTitle,
    Button,
    InputGroup,
    InputGroupAddon,
    Input,
    ListGroup,
    ListGroupItem,
    Media,
    Col
} from './../../../components';
import { setupPage } from './../../../components/Layout/setupPage';

const WelcomePage = () => (
    <Container>
        <p>Hello World</p>
    </Container>
);

export default setupPage({
    pageTitle: 'Welcome Page'
})(WelcomePage);