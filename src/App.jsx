import { BrowserRouter } from "react-router-dom";
import JLCHeader from "./Header/JLCHeader";
import JLCFooter from "./Footer/JLCFooter";
import JLCBody from "./Body/JLCBody";

function App() {
  return (
    <BrowserRouter>
      <div>
        <JLCHeader />
        <br />
        <JLCBody />
        <br />
        <JLCFooter />
      </div>
    </BrowserRouter>
  );
}

export default App;