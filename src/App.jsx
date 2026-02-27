import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./features/auth/Login";
import Register from "./features/auth/Register";
import Dashboard from "./layouts/Dashboard";
import ForgotPassword from "./features/auth/ForgotPassword";

function App() {
  return (
    <Router>
      <Routes>
        {/* Si el usuario entra a la raíz, lo mandamos al login */}
        <Route path="/" element={<Navigate to="/login" replace />} />

        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        {/* Ruta para Crear Cuenta */}
        <Route path="/register" element={<Register />} />

        {/* Manejo de 404 - opcional */}
        <Route path="*" element={<Navigate to="/login" replace />} />
        
      </Routes>
    </Router>
  );
}

export default App;
