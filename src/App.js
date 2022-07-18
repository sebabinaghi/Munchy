import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Gustos from './components/Gustos';
import Presentaciones from './components/Presentaciones';
import Inicio from './components/Inicio';
import ItemDetailContainer from './components/ItemDetailContainer';


function App() {
  return (
        <>
        <BrowserRouter>
          <Navbar></Navbar>
          <Routes>
            <Route path='/' element={<Inicio/>}/>
              <Route path='/categoria/gustos' element={<Gustos/>}/>
              <Route path='/categoria/presentaciones' element={<Presentaciones/>}/>
              <Route path='/presentaciones/:id' element={<ItemDetailContainer/>}/>
              <Route path='*' element={<div>404 NOT FOUND</div>}/>
            </Routes>
        </BrowserRouter>
          <Footer></Footer>
        </>
      
  );
}

export default App;
