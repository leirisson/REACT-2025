// import { useState } from "react";
import "./App.css";
import { ButtonComponent } from "./components/ButtonComponent";
import styles from "./app.module.css";
import { useMessage } from "./hooks/useMessage";



function App() {
  // const [count, setCount] = useState(0);

  const message = useMessage()

  return (
    <>
      <div className={styles.container}>
        <ButtonComponent onClick={() => message.show("Mensagem personalizada do meu hook")} texto="Adicionar" />
        <span>0</span>
        <ButtonComponent texto="Remover" />
      </div>
    </>
  );
}

export default App;
