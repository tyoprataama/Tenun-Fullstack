import Home from '../src/page/main/Home';
import Cart from './page/main/Cart';
import Login from './page/main/Login';
import Product from './page/main/Product';
import Productitem from './page/main/Productitem';
import Register from './page/main/Register';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from 'react-router-dom';

const App = () => {
    const user = true;
    return (
        <Router>
            <Switch>
                <Route exact path='/'>
                    <Home/>
                </Route>

                <Route path='/products/:category'>
                    <Productitem/>
                </Route>

                <Route path='/product/:id'>
                    <Product/>
                </Route>

                <Route path='/cart'>
                    <Cart/>
                </Route>

                <Route path='/login'>
                    {user ? <Redirect to='/' /> : <Login/>}
                </Route>

                <Route path='/signup'>
                    {user ? <Redirect to='/' /> : <Register/>}
                </Route>

            </Switch>
        </Router>
    )
};

export default App;