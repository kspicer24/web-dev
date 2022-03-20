import './App.css';
import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import {BrowserRouter, Redirect, Route} from "react-router-dom";
import HelloWorld from "./components";
import Labs from "./components/labs";
import Tuiter from "./components/tuiter";

function App() {
  return (
      <BrowserRouter>
          <Route exact path="/">
              <Redirect to="/labs"/>
          </Route>
          <div className="container">
              <Route path={["/", "/hello"]} exact={true}>
                  <HelloWorld/>
              </Route>
              <Route path={["/", "/labs"]} exact={true}>
                  <Labs/>
              </Route>
              <Route path={["/", "/tuiter"]} exact={true}>
                  <Tuiter/>
              </Route>
          </div>
      </BrowserRouter>
  );
}
export default App;

