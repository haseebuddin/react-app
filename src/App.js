import React, {Component} from 'react';
import {Container} from 'react-bootstrap';
import {BrowserRouter as Router, Route} from "react-router-dom";
import store from "./store"
import {Provider} from "react-redux";

import Header from './Header'
import Home from './Home'
import About from './About'
import Products from './Products'
import Product from './ProductView'
import Login from './Login'
import Register from './Register'


class App extends Component {
    constructor(props) {
        super(props);
        this.title = 'My app'
    }

    render() {
        return (
            <Provider store={store}>
                <Container>
                    <Router>
                        <Header/>

                        <Route exact path='/' component={Home}/>
                        <Route path='/about' component={About}/>
                        <Route path='/products' component={Products}/>
                        <Route path='/login' component={Login}/>
                        <Route path='/signup' component={Register}/>

                        <Route path='/product/:id' component={Product}/>
                    </Router>
                </Container>
            </Provider>
        )
    }
}

export default App;