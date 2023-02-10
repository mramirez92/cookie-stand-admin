import { createContext, useContext, useState } from "react";
import jwt from  'jsonwebtoken';
import axios from 'axios'

const baseUrl = process.env.NEXT_PUBLIC_API_URL;
const tokenUrl = baseUrl + '/api/token/';

const AuthContext = createContext();

// **hook is just function**
//  makes local variable that passes in auth context
export function useAuth(){
  const auth = useContext(AuthContext);
  if (!auth){
    throw new Error('you forgot AuthProvider!');
  }
  return auth;

}

// login, and login: login are the same thing.
export function AuthProvider(props){

  const[state, setState] = useState({
    tokens: null,
    user: null,
    login,
    logout,
  });

  async function login(username, password){
    const response = await axios.post(tokenUrl, {username, password});
    const decodedAccess = jwt.decode(response.data.access);

    const newState = {
      tokens: response.data,
      user:{
        username: decodedAccess.username,
        email: decodedAccess.email,
        id: decodedAccess.user_id
      },
    };
    setState(prevState => ({...prevState, ...newState}));

  }

  function logout() {
    const newState = {
      tokens: null,
      user: null
    };
    setState(prevState => ({...prevState, ...newState}));

  }
  return (<AuthContext.Provider value={state}>
    {props.children}
  </AuthContext.Provider>);
}