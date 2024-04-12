
import { ReactNode, createContext, useState} from 'react'
import { SetStateAction, Dispatch } from 'react';


interface IMenuContext {
  isAuth: boolean,
  setIsAuth: Dispatch<SetStateAction<boolean>>
}

export const AuthContext = createContext<IMenuContext>({
  isAuth: false,
  setIsAuth: () => {},
})


export const AuthProvider = ({children}: {children: ReactNode }) => {
  const[isAuth, setIsAuth] = useState(false)

  return (
    <AuthContext.Provider value={{isAuth, setIsAuth}}>
        {children}
    </AuthContext.Provider>
  )
}