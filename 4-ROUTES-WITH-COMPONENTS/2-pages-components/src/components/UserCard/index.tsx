type usercardProps = {
  name: string;
  email: string;
  isActive: boolean;
};

export function UserCard({ name, email, isActive }: usercardProps) {
  return (
    <>
      <div style={{
        border: '1px solid #cecece',
        padding:'.5rem',
        borderRadius: '5px',
      }} >
        <div>
          <p style={{textWrap:'nowrap'}}>Nome: {name}</p>
          <p style={{textWrap:'nowrap'}}>Email: {email}</p>
        </div>
        <div>
          <p
            style={
              isActive
                ? {
                    background: "#70f39c",
                    fontWeight: "bold",
                    padding: "1rem",
                    color: "#fff",
                  }
                : {
                    background: "#f08e8e",
                    fontWeight: "bold",
                    padding: "1rem",
                    color: "#fff",
                  }
            }
          >
            {" "}
            Está ativo: {isActive ? "Sim ✅" : "Não 🔴"}
          </p>
        </div>
      </div>
    </>
  );
}
