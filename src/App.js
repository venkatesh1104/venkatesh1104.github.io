import "./App.css";
import Home from "./Portfolio Container/Home/Home";

import ListGroup from "./Portfolio Container/Resume/ListGroup"
import Cards from "./Portfolio Container/Home/Cards/Cards"
import Bottom from "./Bottom/Bottom";
function App() {
    return (
        <div className="App">
          <Home />
       <Cards />
   <ListGroup />
    <Bottom />  
    </div>

    );
}
 export default App;