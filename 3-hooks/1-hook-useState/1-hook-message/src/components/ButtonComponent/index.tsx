import styles from './button.module.css'

interface PropsButton extends React.ComponentProps<"button"> {
  texto: string;
}

export function ButtonComponent({ texto, onClick }: PropsButton) {
  return (
    <>
      <button onClick={onClick} className={styles.button}>{texto}</button>
    </>
  );
}
