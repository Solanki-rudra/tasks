import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './components/landingPage';
import Home from './components/home/home';
import Dashboard from './components/dashboard/dashboard';
import UsersLists from './components/users-lists/usersLists';
import Profile from './components/profile/profile';
import Signout from './components/signout';
import AuthProvider from './contexts/auth';
import RequireAuth from './components/requireAuth';
import Login from './components/login';

function App() {
  return (
    <AuthProvider>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/' element={<RequireAuth><LandingPage /></RequireAuth>} >
            <Route index element={<Home />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/users-list' element={<UsersLists />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/signout' element={<Signout />} />
          </Route>
        </Routes>
    </AuthProvider>
  );
}

export default App;
