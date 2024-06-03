import './App.css';
import Calculator from './Calculator/Calculator';
import Concept from './Concept';
import FormPage from './FormPage';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Calculator/>}/>
      <Route path='/formpage' element={<FormPage/>}/>
      <Route path='/concept' element={<Concept/>}/>

    </Routes>
    </>
  );
}

export default App;
