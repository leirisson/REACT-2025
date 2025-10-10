import "./global.css";
import "./App.css";


import { useContador } from "./hooks/useContador";
import styles from "./app.module.css";
import { ButtonComponent } from "./components/ButtonComponent";

function App() {
const {incrementar, remover, resetar, valor} = useContador()

  return (
    <>
      <div className={styles.container}>
        <ButtonComponent onClick={() => incrementar()} texto="Adicionar" />
        <span>{valor}</span>
        <ButtonComponent onClick={() => remover()} texto="Remover" />
        <ButtonComponent onClick={() => resetar()} texto="Resetar"/>
      </div>
    </>
  );
}

export default App;
