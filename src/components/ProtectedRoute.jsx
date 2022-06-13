import { Navigate } from 'react-router-dom';
import { UserAuth } from '../context/Auth';

const ProtectedRoute = ({ children }) => {
  const { user } = UserAuth();

  if (!user) return <Navigate to="/" />;
  else return children;
};

export default ProtectedRoute;
