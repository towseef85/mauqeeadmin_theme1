import React, {createContext, useContext, useEffect, useState} from 'react';
import httpApi,{setAuthToken} from '../../Utilities/api';
import { message } from 'antd';


const AppContext = createContext();
const AppActionsContext = createContext();

export const useAppContext = () => useContext(AppContext);

export const useAppActionsContext = () => useContext(AppActionsContext);

const AppContextProvider = ({children}) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [userData, setUserData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [token, setToken] = useState(localStorage.getItem('token_ecom') || null)

 

  
 
    useEffect(() => {

        const getAuthUser = async () => {
          setLoading(true)
          if (!token) {
            setLoading(false)
          return  message.warning("Please login again") 
          }
          setAuthToken(token);
          setToken(token)
         await httpApi
            .get('Users/CurrentUser')
            .then(({data}) =>
            {
                setIsAuthenticated(true)
                setUserData(data)
                setLoading(false)
            }
            
            )
            .catch(err =>
              {
               message.error(err.code)
              localStorage.removeItem('token_ecom')
              setIsAuthenticated(false)
              setToken(null)
              setLoading(false)
            }
            );
        };
    
        getAuthUser();
      }, [token]);

      const signInUser = async ({username, password}) => {
        try {
            setLoading(true)
          const {data} = await httpApi.post('Users/Login', {username, password});
          localStorage.setItem('token_ecom', data.token);
          setAuthToken(data.token);
          setToken(data.token)
          setIsAuthenticated(true)
          setUserData(data)
          setLoading(false)
        } catch (error) {
            console.log("error", error)
            setError(error)
            setLoading(false)
            setIsAuthenticated(true)
        }
      };

      const logout = async () => {
        localStorage.removeItem('token_ecom');
        setAuthToken();
       setIsAuthenticated(false)
       setUserData(null)
        setToken()
        setLoading(false)
      };
    

    return(
        <AppContext.Provider
        value={{
            isAuthenticated,
            userData,
            loading,
            token,
            error
        }}
        >
            <AppActionsContext.Provider
                value={{
                    setIsAuthenticated,
                    setUserData,
                    signInUser,
                    logout,
                    setLoading,
                    setError
                }}
            >
            {children}
            </AppActionsContext.Provider>
        </AppContext.Provider>
    )

}

export default AppContextProvider;