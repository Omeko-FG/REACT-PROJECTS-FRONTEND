import data from "../src/helpers/data"
import './App.css';
import Accord from "./components/Accord";

function App() {
  return (
  <>
  <div className="header">
        <h2> Interview Ouestions And Answers</h2>
      </div>
      <div className="app">
        <div className="main">
          <Accord data={data} />
        </div>
      </div></>
  );
}

export default App;
