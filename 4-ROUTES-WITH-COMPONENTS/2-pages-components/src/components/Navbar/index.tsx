import { Link } from "react-router-dom";

export function Navbar() {
  const optionsOfNavbar = [
    { link: "/", text: "Home" },
    { link: "/buttons", text: "Buttons" },
    { link: "/cards", text: "Cards" },
    {link: '/exerciciosOne', text: "exercicio 1"},
    {link: '/exercise-two', text: "exercicio2"},
    {link: '/search', text: 'Pesquisar'}
  ];
  return (
    <>
      <nav style={{
        display:'flex', 
        padding: '.5rem', 
        marginBottom:'1rem',
        justifyContent:'space-evenly', 
        alignItems:'center',
        background: '#000'
        }}>
        {optionsOfNavbar.map((op) => (
          <Link style={{textDecoration:'none', color:"#fff", background:"blue", padding:'.5rem'}} to={op.link} key={`id-${op.text}`}>
            {op.text}
          </Link>
        ))}
      </nav>
    </>
  );
}
