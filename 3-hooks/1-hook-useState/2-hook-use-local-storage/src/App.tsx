import "./App.css";
import { useLocalStorage } from "./hooks/useLocalStorage";

function App() {
  const [nome, setNome] = useLocalStorage("nomeUsuario", "Visitante");

  return (
    <>
      <div className="">
        <p>olá: {nome} !</p>
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
      </div>
    </>
  );
}

export default App;
