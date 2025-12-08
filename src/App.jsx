import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import LoginPage from './Pages/LoginPage';
import PrivateRoute from './Components/PrivateRoute';
import { AuthProvider } from './Context/AuthContext';
import "./App.css"

function App() {
  return (
    <BrowserRouter>
    <AuthProvider>
           <Routes>    
 
          <Route path="/" element={
          <PrivateRoute>
            <HomePage />
          </PrivateRoute>
          } />

        <Route path="/login" element={<LoginPage />} />
     
      </Routes>
    </AuthProvider>
    </BrowserRouter>
  );
}

export default App
