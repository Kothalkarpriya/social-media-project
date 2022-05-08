import "./App.css";
import { Navbar, Footer } from "./components/component";
import Route from "./Route/Route";

function App() {
  return <div className="App">
    <Navbar />
    <Route />
    <Footer />
  </div>;
}

export default App;
