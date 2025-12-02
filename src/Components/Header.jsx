import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav>
        <Link to="/">Home</Link>
        <Link to="/Login">Entrar</Link>
    </nav>
  )
}

export default Header