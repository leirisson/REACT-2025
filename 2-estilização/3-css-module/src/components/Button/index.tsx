import type React from "react";
import styles from './styles.module.css'

interface Props extends React.ComponentProps<"button"> {
  texto: string;
}

export function Button({ texto }: Props) {
  return (
    <>
      <button className={styles.button}>{texto}</button>
    </>
  );
}
