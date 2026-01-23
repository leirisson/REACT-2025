import { useState } from "react";

type Usuario = {
    nome: string;
    email: string;
}


export function FormUsuario() {
    const [usuario, setUsuario] = useState<Usuario>({
        nome: "",
        email:""
    })

    function handleChange(campo: keyof Usuario, valor: string){
        setUsuario({...usuario, [campo]: valor})
    }

    function salvar(){
        alert(`Nome: ${usuario.nome} | email: ${usuario.email}`)
    }


  return (
    <>
      <h1>EXEMPLO 2 — Formulário com vários campos (objeto)</h1>
      <p>Agora vamos estruturar como projetos reais fazem.</p>
      <h2>🎯 Objetivo Cadastro de usuário (nome + email)</h2>



        <div>
            <h2>Cadastro de Usuário</h2>
            <input 
                type="text"  
                placeholder="Nome" 
                value={usuario.nome}
                onChange={(e) => handleChange("nome", e.target.value)}
            />

            <input
             type="text" 
             placeholder="E-mail" 
             value={usuario.email} 
             onChange={(e) => handleChange("email", e.target.value)} 
             />

             <button onClick={salvar}>Salvar</button>

        </div>
    </>
  );
}
