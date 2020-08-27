import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="main-footer">
            <div className="pull-right d-none d-sm-inline-block">
                <ul className="nav nav-primary nav-dotted nav-dot-separated justify-content-center justify-content-md-end">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">FAQ</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/" className="nav-link">Purchase Now</Link>
                    </li>
                </ul>
            </div>
            &copy; 2020 <Link to="/"> Copyright &copy; rxtione</Link>. Service All Rights Reserved.
        </footer>
    )
}

export default Footer
