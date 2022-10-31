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
      <section style={{ backgroundColor: "black", height: "50%", width: "50%", margin: "0px 0px 0px 350px"}}>
        <Nav />

        <Main />
      </section>

      <section style={{display: "flex", height: "50%", width: "50%", margin: "0px 0px 0px 350px"}}>
      
      <Components />
      <SingleWay />
      <Jsx />
      <Declarative />


      </section>
    </div>
  );
}

export default App;
