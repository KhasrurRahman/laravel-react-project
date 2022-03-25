import Login from './pages/Login';
import Register from './pages/Register';
import AddProduct from './pages/AddProduct';
import UpdateProduct from './pages/UpdateProduct';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Protected from './Component/Protected';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="login" element={<Protected Cmp={Login}/>} />
          <Route path="register" element={<Protected Cmp={Register}/>} />
          <Route path="add" element={<Protected Cmp={AddProduct}/>} />
          <Route path="update" element={<Protected Cmp={UpdateProduct}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
