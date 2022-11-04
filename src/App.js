
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './Component/Home';
import LoginForm from './Component/LoginForm';
import "../src/Assets/Style/common.css";
function App() {
  return (
   <>
   <Switch>
    <Route exact path="/" component={LoginForm} />
    <Route  path="/home" component={Home} />

   </Switch>
   </>
  );
}

export default App;
