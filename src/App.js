import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Component/Home/Home';
import Nav from './Component/Share/Nav/Nav';

function App() {
  return (
    <>
      <Nav></Nav>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
      </Routes>
    </>
  );
}

export default App;
