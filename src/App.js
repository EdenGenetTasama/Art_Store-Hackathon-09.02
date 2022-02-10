import logo from "./logo.svg";
import "./App.css";
import Router from "./Router";
import SculpturesProvider from "./Context/sculptures-context";
import GetAllData from "./Components/checkalldata";

function App() {
  return (
    <div className="App">
      <Router />
    </div>
  );
}

export default App;
