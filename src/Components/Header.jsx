import { Link } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

const Header = () => {
  const {logout} = useAuth();
  return (
    <nav className="flex justify-center pb-2.5">
        <div className="hover:bg-neutral-200"><Link to="/">HOME</Link></div>
        
        <div className="w-6"></div>
        <button className="hover:bg-neutral-200" onClick={logout}>LOGOUT</button>
    </nav>
  )
}

export default Header