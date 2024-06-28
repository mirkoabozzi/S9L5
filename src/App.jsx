import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./components/MyNav";
import Home from "./components/Home";
import MyFooter from "./components/MyFooter";

function App() {
  return (
    <div className="">
      <MyNav />
      <Home />
      <MyFooter />
    </div>
  );
}

export default App;
