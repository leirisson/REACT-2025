import './App.css'
import { ButtonComponent } from './components/ButtonComponent'

function App() {
  
  return (
    <>
        <ButtonComponent name='Criar'  onClick={() => alert("Clicou")} />
    </>
  )
}

export default App
