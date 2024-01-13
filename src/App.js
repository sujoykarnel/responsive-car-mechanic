import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import Booking from './Pages/Booking/Booking/Booking';
import Header from './Pages/Shared/Header/Header';
import Login from './Pages/Login/Login/Login';
import AuthProvider from './contexts/AuthProvider';
import PrivateRoutes from './Pages/Login/PrivateRoute/PrivateRoutes';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <HashRouter>
          <Header></Header>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route element={<PrivateRoutes />}>
              <Route path='/booking/:serviceId' element={<Booking />} />
            </Route>
            <Route path='*' element={<NotFound />} />
          </Routes>
        </HashRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
