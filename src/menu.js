import React from 'react';
import {ListGroup} from 'react-bootstrap';
import './menu.css';
import ReactDOM from "react-dom";
import Pickup from "./pickup";

function handleClick(e) {
    e.preventDefault();
    console.log('The link was clicked.');
}

function onClick() {
    ReactDOM.render(
        <Content2/>,
        document.querySelector('.content')
    );
}

const Menu2 = () => {
    return <div className="menu">
        <div>Menu2です</div>
        <ListGroup>
            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        </ListGroup>
    </div>
};

const Content2 = () => {
    return <div className="content">
        <Menu2/>
        <Pickup/>
    </div>
};

class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            renderChild: true,
        }
        this.handleUnmount = this.handleUnmount.bind(this);
        console.log('コンストラクター 今!');
    }

    handleUnmount() {
        this.setState({
            renderChild: false,
        });
    }

    componentWillUnmount() {
        console.log("コンポーネントがアンマウントされた後")
    }

    render() {
        return <div className="menu">
            <div>Menuです</div>
            <ListGroup>
                <ListGroup.Item onClick={handleClick}>Cras justo odio</ListGroup.Item>
                <ListGroup.Item onClick={onClick}>Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
            </ListGroup>
        </div>
    }
}

export default Menu;