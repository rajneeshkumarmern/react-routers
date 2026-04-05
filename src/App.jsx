import { BrowserRouter } from "react-router-dom";
import JLCHeader from "./Header/JLCHeader";
import JLCBody from "./Body/JLCBody";

function App() {
  return (
    <BrowserRouter>
      <div>
        <JLCHeader />
        <JLCBody />
      </div>
    </BrowserRouter>
  );
}

export default App;