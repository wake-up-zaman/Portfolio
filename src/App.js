import './App.css';
import Header from './Portfolio/Home/Header';
import app from './firebase.init';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import HomePage from './Portfolio/Home/HomePage';


function App() {
  return (
    <>
    <Router>
    <Header></Header>
    {/* <Switch>
      <Route path='/' exact component={HomePage} />
    </Switch> */}
    <HomePage></HomePage>
    </Router>

    </>


  );
}

export default App;
