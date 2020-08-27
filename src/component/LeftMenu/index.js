import React from 'react'
import { Link } from 'react-router-dom';

const LeftMenu = () => {
    return (
        <aside className="main-sidebar">
            <section className="sidebar">
                <div className="user-panel">
                    <div className="ulogo">
                        <Link to="/">
                            <span><b>Online </b>Cloud</span>
                        </Link>
                    </div>
                    <div className="image">
                        <img src="/img/user2-160x160.jpg" className="rounded-circle" alt="User Image"/>
                    </div>
                </div>
                <ul className="sidebar-menu" data-widget="tree">
                    <li className="nav-devider"></li>
                    <li className="header nav-small-cap">PERSONAL</li>
                    <li className="active" to="/">
                        <Link to="/">
                            <i className="icon-loop"></i> <span>Device</span>
                            <span className="pull-right-container">
                                <i className="fa fa-angle-right pull-right"></i>
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <i className="fa fa-jsfiddle"></i> <span>Content</span>
                            <span className="pull-right-container">
                                <i className="fa fa-angle-right pull-right"></i>
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <i className="fa fa-jsfiddle"></i> <span>Playlist</span>
                            <span className="pull-right-container">
                                <i className="fa fa-angle-right pull-right"></i>
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <i className="fa fa-jsfiddle"></i> <span>Schedule</span>
                            <span className="pull-right-container">
                                <i className="fa fa-angle-right pull-right"></i>
                            </span>
                        </Link>
                    </li>
                </ul>
            </section>
        </aside>
    )
}

export default LeftMenu
