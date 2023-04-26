import './css/index.css';
import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import Login from './components/login/login';
import Register from './components/login/register';
import Menu from './components/menu/menu';
import Business from './components/business/business';
import { Provider, useDispatch, useSelector } from 'react-redux';
import JDS from './components/jsd/jds';
import Home from './components/home/home';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

function App() {
      // Recursos para conectar con el nde
      const dispatch = useDispatch();
      const usuario = useSelector(store => store.usuario);
  
  return (
      <div className="app">
        <Router>
            <Routes>

              <Route path="/*" element={<Home usuario={usuario} />} />
              { /* ABOUT US */}
              <Route path="/jds/*" element={<JDS />} /> 
              { /* Login */}
              <Route exact path="logins" 
              element={ usuario != null ? <Navigate to="/business" /> : <Login />} />
              { /* Register*/}
              <Route exact path="/register" element={<Register />} />
              { /* Menu*/}
              <Route exact path="/menu/:business*" element={<Menu />} />
              { /* Business */}
              <Route path="/business/*" element={<Business />}/>
            </Routes>
        </Router>

      </div>
  )
}

export default App
