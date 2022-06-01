
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from './signup/signup.comp.js';
import Detail from './list/list.comp';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Signup/>}/>
        <Route path='/list' element={<Detail/>}>
        </Route>
        </Routes>
        </BrowserRouter>
     
    </div>
  );
}

export default App;
