import Header from './Component/Header';
import Login from './pages/Login';
import Register from './pages/Register';
import AddProduct from './pages/AddProduct';
import UpdateProduct from './pages/UpdateProduct';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <h1>E-com project</h1>
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="add" element={<AddProduct />} />
          <Route path="update" element={<UpdateProduct />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
