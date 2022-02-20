import {BrowserRouter, Route, Switch} from 'react-router-dom';
import MainPage from './pages/MainPage'
import './App.css';
import AllDetails from './pages/AllDetails';
import AllServices from './pages/AllServices';
import LogIn from './pages/LogIn';
import SignIn from './pages/SignIn'
import InfoPage from './pages/InfoPage';
import 'bootstrap/dist/css/bootstrap.min.css'
import Cabinet from './pages/Cabinet';
function App() {
  return (
    <BrowserRouter basename="/auto-project">
        <Switch>
          <Route path="/" component={MainPage} exact/> 
          <Route path="/AllDetails" component={AllDetails} exact/> 
          <Route path="/AllServices" component={AllServices} exact/> 
          <Route path="/LogIn" component={LogIn} exact/> 
          <Route path="/SignIn" component={SignIn} exact/> 
          <Route path="/InfoPage" component={InfoPage} exact/> 
          <Route path="/Cabinet" component={Cabinet} exact/> 
        </Switch>
    </BrowserRouter>
  );
}

export default App;
