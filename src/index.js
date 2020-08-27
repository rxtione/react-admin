import React, { Fragment,useState,useEffect } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import store from './store'
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension'; // 리덕스 개발자 도구
import {routes} from './route';
import {BrowserRouter,Switch,Route,Redirect} from 'react-router-dom'
import { CSSTransition,TransitionGroup } from 'react-transition-group'
import ScrollToTop from "./layout/scroll_to_top";

import './index.scss';

// Error page
import Error400 from "./pages/errors/error400";
import Error401 from "./pages/errors/error401";
import Error403 from "./pages/errors/error403";
import Error404 from "./pages/errors/error404";
import Error500 from "./pages/errors/error500";
import Error503 from "./pages/errors/error503";

const Root = (props) => {
    const [anim, setAnim] = useState("");
    const animation = localStorage.getItem("animation") || 'fade'
    const [currentUser, setCurrentUser] = useState(true);

    useEffect(() => {

        setAnim(animation)
        return function cleanup() {
            //abortController.abort();
        }
    }, []);

    return(
        <Fragment>
            <Provider store={store}>
                <BrowserRouter>
                    <ScrollToTop />
                    <Switch>
                        <Route  path={`${process.env.PUBLIC_URL}/pages/errors/error400`} component={Error400}></Route>
                        <Route  path={`${process.env.PUBLIC_URL}/pages/errors/error401`} component={Error401}></Route>
                        <Route  path={`${process.env.PUBLIC_URL}/pages/errors/error403`} component={Error403}></Route>
                        <Route  path={`${process.env.PUBLIC_URL}/pages/errors/error404`} component={Error404}></Route>
                        <Route  path={`${process.env.PUBLIC_URL}/pages/errors/error500`} component={Error500}></Route>
                        <Route  path={`${process.env.PUBLIC_URL}/pages/errors/error503`} component={Error503}></Route>

                        { currentUser !== null ?
                            <App>
                                <Route exact path={`${process.env.PUBLIC_URL}/`} render={() => {
                                    return (<Redirect to={`${process.env.PUBLIC_URL}/home`} />)
                                }} />
                                { routes.map(({ path, Component }) => (
                                    <Route key={path} exact   path={`${process.env.PUBLIC_URL}${path}`} component={Component}/>
                                ))}
                            </App>
                            :
                            <Redirect to={`${process.env.PUBLIC_URL}/login`} />
                        }
                    </Switch>
                </BrowserRouter>
            </Provider>
        </Fragment>
    )
}

ReactDOM.render(
    <Root/>,
    document.getElementById('root')
);
