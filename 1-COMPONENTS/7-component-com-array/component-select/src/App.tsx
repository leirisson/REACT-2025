import { useState } from 'react'
import './App.css'

interface Colaborador {
  matricula: string;
  nome: string;
  recesso: string;
  periodoEscalado: string;
  preferenciaFolga: string;
  preferenciaPgamento: string; 
}

const colaboradoresDate: Colaborador[] = [
{
    matricula: "am618ps",
    nome: "Leirisson Souza dos Santos",
    recesso: "Recesso 2025/2026",
    periodoEscalado: "20/12 a 31/12; 01/01 a 06/01",
    preferenciaFolga: "",
    preferenciaPgamento: "20/12 a 31/12; 01/01 a 06/01;"
  },
  {
    matricula: "br452xj",
    nome: "Ana Clara Ferreira",
    recesso: "Recesso 2025/2026",
    periodoEscalado: "20/12 a 31/12; 01/01 a 06/01",
    preferenciaFolga: "24/12 e 31/12",
    preferenciaPgamento: "20/12 a 31/12; 01/01 a 06/01;"
  },
  {
    matricula: "ct789kl",
    nome: "Carlos Eduardo Mendes",
    recesso: "Recesso 2025/2026",
    periodoEscalado: "20/12 a 31/12; 01/01 a 06/01",
    preferenciaFolga: "",
    preferenciaPgamento: "20/12 a 31/12; 01/01 a 06/01;"
  },
  {
    matricula: "dm203qr",
    nome: "Mariana Alves Rocha",
    recesso: "Recesso 2025/2026",
    periodoEscalado: "20/12 a 31/12; 01/01 a 06/01",
    preferenciaFolga: "25/12 e 01/01",
    preferenciaPgamento: "20/12 a 31/12; 01/01 a 06/01;"
  },
  {
    matricula: "ef910tz",
    nome: "Fernando Henrique Silva",
    recesso: "Recesso 2025/2026",
    periodoEscalado: "20/12 a 31/12; 01/01 a 06/01",
    preferenciaFolga: "",
    preferenciaPgamento: "20/12 a 31/12; 01/01 a 06/01;"
  }
  ]


function App() {
  const [searchTerm, setSearchTerm] = useState<string>('')


  //função para realizar o filtro
  const colaboradoresFiltrados = colaboradoresDate.filter((colab) => {
      return colab.nome.toLowerCase().includes(searchTerm.toLocaleLowerCase()) 
  })

  // Preenche o input com o nome
  // A lista continuará visível (pois searchTerm não está vazio)
  // Se quiser esconder automaticamente após seleção, veja nota abaixo 👇
  const handleSelect = (nome:string) => {
     setSearchTerm(nome);
  }

  const isSelecting = colaboradoresDate.some(
    colab => colab.nome.toLocaleLowerCase() === searchTerm.toLocaleLowerCase()
  )

  return (
    <>
      <div>
        <input 
        type="text"
        placeholder='Buscar por nome ou matricula'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          padding: "8px", 
          fontSize: "16px", 
          width:"100%",
          marginBottom:"10px"
         }}
        />
      </div>

      {/* Renderiza a lista apenas se houver termo de busca */}
      {
        searchTerm.trim() && !isSelecting && (
          <ul style={{listStyle:"none", padding:0}}>
            {
              colaboradoresFiltrados.map((colab, index) => (
                <li
                onClick={() => handleSelect(colab.nome)}
                key={index}
                style={{
                  border:'1px solid #ccc',
                  padding:"1rem",
                  marginBottom: ".5rem",
                  borderRadius: "4px",
                  color:"#fff"
                }}
                >
                  <strong>{colab.nome}</strong>
                </li>
              ))
            }
          </ul>
        )
      }
     
    </>
  )
}

export default App
