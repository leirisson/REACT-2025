import styles from './button.module.css'

interface ButtonProps extends React.ComponentProps<'button'>{
    texto:string
}


export function ButtonComponent({texto, onClick}: ButtonProps){
    return(
        <>
        <button 
        className={styles.button}
        onClick={onClick}
        >
            {texto}
        </button>
        </>
    )
}