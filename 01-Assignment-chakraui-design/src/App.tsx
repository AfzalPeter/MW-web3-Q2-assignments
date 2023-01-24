import "./App.css";

import Header from "./components/Header";
import {Pricing} from "./components/Pricing";
import { Features } from "./components/Features";

function App() {
  return (
    <div className="App">
      <Header />
      <Pricing />
      <Features />
    </div>
  );
}

export default App;
