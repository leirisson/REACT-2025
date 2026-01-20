import { UserCard } from "../components/UserCard";
type usersTypes = {
  id: string;
  name: string;
  email: string;
  isActive: boolean;
};

export function Exercisetwo() {
  const users: usersTypes[] = [
    {
      id: "1red1",
      name: "Leirison Souza",
      email: "Leirisson.example@gtc.com.br",
      isActive: true,
    },
    {
      id: "2blu3",
      name: "Ana Clara Mendes",
      email: "ana.mendes@gtc.com.br",
      isActive: false,
    },
    {
      id: "3grn5",
      name: "Carlos Eduardo Silva",
      email: "carlos.silva@gtc.com.br",
      isActive: true,
    },
    {
      id: "4yel7",
      name: "Fernanda Almeida",
      email: "fernanda.almeida@gtc.com.br",
      isActive: true,
    },
    {
      id: "5pur9",
      name: "Rafael Costa",
      email: "rafael.costa@gtc.com.br",
      isActive: false,
    },
    {
      id: "6orn2",
      name: "Juliana Pereira",
      email: "juliana.pereira@gtc.com.br",
      isActive: true,
    },
    {
      id: "7pnk4",
      name: "Lucas Oliveira",
      email: "lucas.oliveira@gtc.com.br",
      isActive: false,
    },
    {
      id: "8cyn6",
      name: "Mariana Santos",
      email: "mariana.santos@gtc.com.br",
      isActive: true,
    },
    {
      id: "9blk8",
      name: "Diego Ferreira",
      email: "diego.ferreira@gtc.com.br",
      isActive: true,
    },
    {
      id: "10wht0",
      name: "Camila Rocha",
      email: "camila.rocha@gtc.com.br",
      isActive: false,
    },
  ];

  return (
    <>
      <div
        style={{ display: "flex", flexDirection: "column", flexWrap: "wrap" }}
      >
        <div>
          <p>Descrição: 🎯 Objetivo Exibir informações de um usuário.</p>
          <p>
            📌 Requisitos Props: name, email, isActive Mostrar status: ✅ Ativo
            ❌ Inativo Usar Card internamente
          </p>
        </div>

        <div style={{ marginTop: "1.5rem" }}>
          <p>users</p>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap", // permite quebra de linha
              gap: "1.5rem", // espaçamento entre cards
              justifyContent: "flex-start",
            }}
          >
            {users.map((user) => (
              <UserCard
                key={user.id}
                email={user.email}
                name={user.name}
                isActive={user.isActive}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
