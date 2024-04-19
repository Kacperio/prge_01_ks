import "./App.css";
import Home from "./componets/home/Home";

function App() {
  const imie = "WOOOORLDD";

  return (
    <div className="App">
      <Home text={imie} />
    </div>
  );
}

export default App;
