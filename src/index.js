import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import Header from "./Components/Header";
// import Main from "./Components/Main";
// import Footer from "./Components/Footer";
import * as serviceWorker from './serviceWorker';
// import Form from "./Components/Form/form.js";
// import Personal from "./Components/Personal/personal";
import {Router} from 'react-router';
import MainRouter from './routes';
import createHistory from "history/createBrowserHistory"
import { BrowserRouter } from 'react-router-dom';
import General from "./Components/General";

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

    ReactDOM.render(
        <React.Fragment>
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
