import React from 'react';
import './content.css';
import Menu from './menu.js';
import Pickup from './pickup.js';

const Content = () => {
    return <div className="content">
        <Menu/>
        <Pickup/>
    </div>
};

export default Content;