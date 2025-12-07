
import { Navigate } from 'react-router-dom'
import { useAuth } from '../Context/AuthContext'

const PrivateRoute = ({children}) => {
    const {isLoggedIn} = useAuth()
    if (isLoggedIn){
        return children;
    } return   <Navigate to="/login" replace />
}

export default PrivateRoute
