import logo from "./logo.svg";
import "./App.css";

function App() {
  const style = {
    backgroundColor: "black",
    color: "aqua",
    fontSize: "48px",
    fontWeight: "bold",
    padding: 16,
  };
  const name = "리액트";
  return (
    <div>
      {name === "리액트" ? (
        <h1 className="react">리액트입니다</h1>
      ) : (
        <h1 style={style}>리액트가 아닙니다.</h1>
      )}
    </div>
  );
}

export default App;
