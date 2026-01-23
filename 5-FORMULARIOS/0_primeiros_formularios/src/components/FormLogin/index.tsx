import { useState } from "react";

type FormaLogin = {
  email: string;
  password: string;
};

export function FormaLogin() {
  const [auth, setAuth] = useState<FormaLogin>({
    email: "",
    password: "",
  });

  function sing() {
    alert("Entrou no sistema com sucesso !!")
    console.log(auth);
  }

  return (
    <>
      <div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="write your self email here..."
            value={auth.email}
            onChange={(e) => setAuth({ ...auth, email: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="write your self password here..."
            value={auth.password}
            onChange={(e) => setAuth({ ...auth, password: e.target.value })}
          />
        </div>

        <div>
          <button onClick={sing}>to enter</button>
        </div>
      </div>
    </>
  );
}
