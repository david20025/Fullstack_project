import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import Header from "./Components/Header";
// import Main from "./Components/Main";
// import Footer from "./Components/Footer";
import * as serviceWorker from './serviceWorker';
import Form from "./Components/Form/form";
// import Personal from "./Components/Personal/personal";
import {Router, Route} from 'react-router';
import { HashRouter } from 'react-router-dom';

import MainRouter from './routes';
import createHistory from "history/createBrowserHistory"
import { BrowserRouter } from 'react-router-dom';
import General from "./Components/General";
import Personal from "./Components/Personal/personal";
// import {app} from "./index.html"
// var Router = window.ReactRouter.Router;
// var Route = window.ReactRouter.Route;
// var hashHistory = window.ReactRouter.hashHistory;
// var Link = window.ReactRouter.Link;


const browserHistory = createHistory()
export {browserHistory};

// --- // ReactDOM.render(<App />, document.getElementById('react-view'));

// const component = (
//     <Router history={browserHistory}>
//         {routes}
//     </Router>);

// <React.Fragment>
//     <BrowserRouter>
//         <Provider store={store}>
//             <HeaderContainer/>
//             <MainRouter/>
//             <Footer/>
//         </Provider>
//     </BrowserRouter>
// </React.Fragment>,
//     <link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">


    ReactDOM.render(
        <React.Fragment>
            {/*<HashRouter>*/}
            {/*    <Route component={General} path="/"/>*/}
            {/*    <Route component={Personal} path="/personal"/>*/}
            {/*    <Route component={Form} path="/form"/>*/}
            {/*</HashRouter>,*/}
            <BrowserRouter>
                {/*<General/>*/}
                <MainRouter/>
            </BrowserRouter>
        </React.Fragment>,
        document.getElementById('root')
    )
;

// ReactDOM.render(
//     <React.Fragment>
//         <Personal/>
//         {/*<Header/>*/}
//         {/*<Main/>*/}
//         {/*<Footer/>*/}
//     </React.Fragment>,
//     document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

