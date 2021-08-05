import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Addition from "./pages/Addition/Addition";
import Substraction from './pages/Substraction/Substraction';
import Multiplication from "./pages/Multiplication/Multiplication";
import Division from "./pages/Division/Division";
import Home from "./pages/Home/Home";

function App(props) {
  return (
    <BrowserRouter>
      <div className="container">
        <Switch>
          <div className="app">
          <Route path="/" exact>
            <Home 
            name={props.name}
            setName={props.setName}/>

          </Route>
          <Route path="/Addition" exact>
            <Addition />
          </Route>

          <Route path="/Substraction" exact>
            <Substraction />
          </Route>

          <Route path="/Multiplication" exact>
            <Multiplication />
          </Route>

          <Route path="/Division" exact>
            <Division />
          </Route>
          </div>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
