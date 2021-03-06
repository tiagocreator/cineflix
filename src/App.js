import { Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/Auth';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';
import Account from './pages/Account';

import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <>
      <AuthProvider>
        <Header />
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />

          <Route
            path="/account"
            element={
              <ProtectedRoute>
                <Account />
              </ProtectedRoute>
            }
          />
        </Routes>
        <Footer />
      </AuthProvider>
    </>
  );
}

export default App;
