import "./App.css";

import { HashRouter, Switch, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import FAQ from "./pages/FAQ";
import Pricing from "./pages/Pricing";

function Pages() {
  const location = useLocation();
  console.log(location);

  return (
    <div className="App">
      <Header currentPath={location.pathname} />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/pricing">
          <Pricing />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/FAQ">
          <FAQ />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <HashRouter basename="/">
      <Pages />
    </HashRouter>
  );
}

export default App;
