import { Route, Router, Routes, BrowserRouter } from 'react-router-dom';
import Login from './Components/Login/login'
import Signup from './Components/Signup/signup'
import AddExpense from './Components/AddExpense'
import ListExpense from './Components/ListExpense';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='signup' element={<Signup/>} />
        <Route path='login' element={<Login/>}/>
        <Route path='add' element={<AddExpense/>}/>
        <Route path='list' element={<ListExpense/>}/>
        <Route path='*' element={<Login/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
