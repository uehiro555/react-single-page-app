import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './header.js';
import Content from './content.js';
import Footer from './footer.js';
import {Button} from 'react-bootstrap';
import {Container,Row,Col} from 'react-bootstrap';

//classNameでcssを指定
class Index extends React.Component{
    render(){
        return (
            <div>
                <Header/>
                    <Content/>
                <Footer/>
            </div>
        );
    }
}

ReactDOM.render(
    <Index />,
    document.getElementById('root')
);