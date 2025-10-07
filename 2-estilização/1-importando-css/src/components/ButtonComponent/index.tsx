import  './styles.css'

type Props = React.ComponentProps<"button"> & {
    name : string
}
export function ButtonComponent({name}: Props){
    return(
        <>

        <button className="btn">{name}</button>
        </>
    )
}