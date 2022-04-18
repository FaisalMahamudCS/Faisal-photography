import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login'
import Register from './Components/Register/Register';
import RequireAuth from './Components/RequireAuth/RequireAuth';
import Checkout from './Components/Checkout/Checkout';
import NotFound from './Components/NotFound/NotFound';
import About from './Components/About/About';
import Blog from './Components/Blog/Blog';
import Service from './Components/Service/Service';

function App() {
  return (
    <div className="App" >
       <Header></Header>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
      <Route path='/checkout' element={
        <RequireAuth>
          <Checkout></Checkout>
        </RequireAuth>
      }
     > </Route>
     <Route path='*' element={<NotFound></NotFound>}></Route>
     <Route path='/about' element={<About></About>}></Route>
    <Route path='/blog' element={<Blog></Blog>}></Route>
    <Route path='/service' element={<Service></Service>}></Route>
      </Routes>

    </div>
  );
}

export default App;
