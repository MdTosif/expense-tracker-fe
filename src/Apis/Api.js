import axios from 'axios';

export const Api = axios.create({
  baseURL: `http://expense-t-be.herokuapp.com`,
  headers:{
    Authorization: localStorage.getItem('token')
  }
});

export const loginApi = async ({username, password})=>{
    let res = await Api.post('/login',{
        username, password
    })
    return res.data;
}

export const signupApi = async ({username, password})=>{
  let res = await Api.post('/signup',{
      username, password
  })
  return res.data;
}

export const addExpense = async ({name, date, price})=>{
  let res = await Api.post('/expense',{
      name,date,price
  })
  return res.data;
}

export const listMyExpense = async ()=>{
  let res = await Api.get('/expense')
  console.log(res.data);
  return res.data;
}