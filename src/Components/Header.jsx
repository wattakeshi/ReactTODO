import { Link } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

const Header = () => {
  const {logout} = useAuth();
  return (
    <nav>
        <Link to="/">Home</Link>
        <button onClick={logout}>SAIR</button>
    </nav>
  )
}

export default Header