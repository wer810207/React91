import routes from "./routes";
import "tailwindcss/tailwind.css"
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

function App() {
    function RouteWithSubRoutes(route) {
        return (
            <Route
                path={route.path}
                render={props => (
                    // pass the sub-routes down to keep nesting
                    <route.component {...props} routes={route.routes} />
                )}
            />
        );
    }
  return (
      <div className="app">
          <Router>
              <div>
                  {/*<ul>*/}
                  {/*    <li>*/}
                  {/*        <Link to="/">首頁</Link>*/}
                  {/*    </li>*/}
                  {/*    <li>*/}
                  {/*        <Link to="/login">登入</Link>*/}
                  {/*    </li>*/}
                  {/*    <li>*/}
                  {/*        <Link to="/register">註冊頁</Link>*/}
                  {/*    </li>*/}
                  {/*</ul>*/}
                  <Switch>
                      {routes.map((route, i) => (
                          <RouteWithSubRoutes key={i} {...route} />
                      ))}
                  </Switch>
              </div>
          </Router>
      </div>

  );
}

export default App;
