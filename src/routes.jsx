import React from 'react';
import { Route, Switch, withRouter  }  from 'react-router';
// import App from 'components/App';
import Form from './Components/Form/form.js';
import General from './Components/General';
import Personal from './Components/Personal/personal.js';
// import General from "./Components/General";

const MainRouter = () => (
    <Switch>
        <Route exact path='/index.js' component={General}/>
        <Route exact path='/' component={General}/>
        <Route component={Form} path='/form' />
        <Route component={Personal} path='/personal' />
    </Switch>
);

export default withRouter(MainRouter);

// export default (
//     <Route exact path='/' component={General}/>
//     // <Route component={General} path='/'>
//     //     <Route exact path="/" component={General} />
//     <Route component={Form} path='/form' />
//     <Route component={Personal} path='/personal' />
//     // </Route>
// );