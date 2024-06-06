import { Pokemon } from './ApiConcept/Pokemon';
import './App.css';
import Calculator from './Calculator/Calculator';
import Concept from './Concept';
import FormPage from './FormPage';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Pokemon/>}/>
      <Route path='/formpage' element={<FormPage/>}/>
      <Route path='/concept' element={<Concept/>}/>
      <Route path='/calculator' element={<Calculator/>}/>

    </Routes>
    </>
  );
}

export default App;
