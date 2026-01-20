import { Inputcomponent } from "../components/InputComponte";
import { useState } from "react";


export function ComponentsButton() {
  const [name, setName] = useState<string>("");
  return (
    <>
      <div>
        <p>usando o component de input Personalizado</p>
        <Inputcomponent
          label="nome"
          value={name}
          onChange={setName}
          type="text"
        />
        <p>nome digitado: {name}</p>
      </div>
    </>
  );
}
