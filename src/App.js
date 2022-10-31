import "./App.css";
import Nav from "./components/Nav";
import Main from "./components/Main";

function App() {
  return (
    <div className="App">
      <section style={{ backgroundColor: "black" }}>
        <Nav />

        <Main />
      </section>

      <section style={{display: "flexRow"}}>



      </section>
    </div>
  );
}

export default App;
