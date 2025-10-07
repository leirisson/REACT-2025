import './App.css'
import { ButtonComponent } from './components/ButtonComponent/ButtonComponent'

function App() {

  return (
    <>

    <ButtonComponent name='Criar' onClick={() => alert("Criando objeto.")}/>

    </>
  )
}

export default App
