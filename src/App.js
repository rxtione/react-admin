import React, { Fragment } from 'react';
import './App.css';

import Loader from "./layout/loader";
import Header from './layout/header'
import Footer from './layout/footer'
import Sidebar from './layout/sidebar'

import {ToastContainer} from 'react-toastify'

const App = ({children}) => {
    document.body.className = 'dark-sidebar'

    return (
        <Fragment>
            <Loader/>
            <div className="page-wrapper compact-wrapper" id="pageWrapper">
                <Header/>
                <div className="page-body-wrapper sidebar-icon">
                    <Sidebar/>
                        <div className="page-body">
                            {children}
                        </div>
                    <Footer/>
                </div>
            </div>
            <ToastContainer/>
        </Fragment>
    );
}

export default App;
