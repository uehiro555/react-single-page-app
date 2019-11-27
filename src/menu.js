import React from 'react';
import { ListGroup } from 'react-bootstrap';
import './menu.css';

function handleClick(e) {
    e.preventDefault();
    console.log('The link was clicked.');
}

const Menu = () => {
    return <div className="menu">
        <div>Menuです</div>
        <ListGroup>
            <ListGroup.Item onClick={handleClick}>Cras justo odio</ListGroup.Item>
            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item>Morbi leo risus</ListGroup.Item>
            <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        </ListGroup>
    </div>

};

export default Menu;