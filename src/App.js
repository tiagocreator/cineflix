import { Route, Routes } from 'react-router-dom';

import { AuthProvider } from './context/Auth';
import { ToastProvider } from './context/ToastProvider';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';
import Account from './pages/Account';
import AllCategories from './pages/AllCategories';
import Category from './pages/Category';

import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <>
      <ToastProvider>
        <AuthProvider>
          <Header />
          <Routes>
            <Route path='' element={<Home />} />
            <Route path='/login' element={<LogIn />} />
            <Route path='/signup' element={<SignUp />} />

            <Route
              path='/account'
              element={
                <ProtectedRoute>
                  <Account />
                </ProtectedRoute>
              }
            />
            <Route path='/all-categories' element={<AllCategories />} />
            <Route path='/category/:id' element={<Category />} />
          </Routes>
          <Footer />
        </AuthProvider>
      </ToastProvider>
    </>
  );
}

export default App;
