import "./App.css";
import { ButtonComponent } from "./ButtonComponent";

function App() {


  return (
    <>
      <ButtonComponent name="criar" onClick={() => alert("CRIOU")}/>
    </>
  );
}

export default App;
