import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Login from './Components/Login/login'
import Signup from './Components/Signup/signup'
import AddExpense from './Components/AddExpense'
import ListExpense from './Components/ListExpense';
import { createContext, useReducer } from 'react';
import Charts from './Components/Charts';

export const GlobalContext = createContext();

const initState = {
  updated: 0,
}

const reducer = (state, action) => {
  switch (action.type) {
    case "updated":
      return {...state, updated : state.updated++};
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initState);
  return (
    <GlobalContext.Provider value={{ state, dispatch }}> 
      <BrowserRouter>
      <Routes>
        <Route path='signup' element={<Signup />} />
        <Route path='login' element={<Login />} />
        <Route path='add' element={<AddExpense />} />
        <Route path='list' element={<ListExpense />} />
        <Route path='charts' element={<Charts />} />
        <Route path='*' element={<Login />} />
      </Routes>
    </BrowserRouter>
    </GlobalContext.Provider>
  );
}

export default App;
