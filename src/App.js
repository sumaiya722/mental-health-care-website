
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer/Footer';
import Detail from './Components/Home/Detail/Detail';
import Home from './Components/Home/Home/Home';
import NotFound from './Components/Home/NotFound/NotFound';
import Login from './Components/Login/Login/Login';
import PrivateRoute from './Components/Login/Login/PrivateRoute/PrivateRoute';
import Header from './Components/Shared/Header/Header';
import AuthProvider from './contexts/AuthProvider';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/detail/:serviceId">
              <Detail></Detail>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
