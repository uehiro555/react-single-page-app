import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './header.js';
import Body from './content.js';
import Footer from './footer.js';
import {Button} from 'react-bootstrap';
import {Container,Row,Col} from 'react-bootstrap';

//classNameでcssを指定
class Index extends React.Component{
    render(){
        return (
            <div>
                <Header/>
                <div className="main">
                    <Button>Danger</Button>
                    <Container>
                        <Row className="justify-content-md-center">
                            <Col xs lg="2">
                                1 of 3
                            </Col>
                            <Col md="auto">Variable width content</Col>
                            <Col xs lg="2">
                                3 of 3
                            </Col>
                        </Row>
                        <Row>
                            <Col xs lg="2">1 of 3</Col>
                            <Col xs lg="2">Variable width content</Col>
                            <Col xs lg="6">
                                3 of 3
                            </Col>
                        </Row>
                    </Container>
                    <Body/>
                </div>
                <Footer/>
            </div>
        );
    }
}

ReactDOM.render(
    <Index />,
    document.getElementById('root')
);