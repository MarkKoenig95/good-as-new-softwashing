import "./App.css";

import { HashRouter, Switch, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";

function Pages() {
  const location = useLocation();

  return (
    <div className="App">
      <Header currentPath={location.pathname} />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/services">
          <Services />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <HashRouter basename="{process.env.PUBLIC_URL}">
      <Pages />
    </HashRouter>
  );
}

export default App;
