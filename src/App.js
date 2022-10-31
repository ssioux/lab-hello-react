import "./App.css";

import Nav from "./components/Nav";
import Main from "./components/Main";
import Components from "./components/Components"
import SingleWay from "./components/Singleway"
import Jsx from "./components/Jsx"
import Declarative from "./components/Declarative"


function App() {
  return (
    <div className="App">
      <section style={{ backgroundColor: "black" }}>
        <Nav />

        <Main />
      </section>

      <section style={{display: "flex"}}>
      
      <Components />
      <SingleWay />
      <Jsx />
      <Declarative />


      </section>
    </div>
  );
}

export default App;
