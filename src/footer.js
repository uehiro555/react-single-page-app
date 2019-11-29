import React from 'react';
import './footer.css';
import {Navbar} from "react-bootstrap";

//Footerの定義
const Footer = () => {
    return <footer>
        <div className="container sectionBox copySection text-center">
            <p>Copyright © NavBar！ All Rights Reserved.</p><p>Powered by <a
            href="https://wordpress.org/">ReactJS</a> with <a href="https://lightning.nagoya/ja/" target="_blank"
                                                                title="Free WordPress Theme Lightning"> Lightning
            Theme</a> &amp; <a href="https://ex-unit.nagoya/ja/" target="_blank">VK All in One Expansion Unit</a> by <a
            href="//www.vektor-inc.co.jp" target="_blank">Vektor,Inc.</a> technology.</p></div>
    </footer>

};

export default Footer;
