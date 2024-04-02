
import {createContext} from 'react'

// type AuthContextType = boolean | string

type AuthContextType = {
  setIsAuth: (i: boolean) => void;
  isAuth: boolean
}

export const AuthContext = createContext<AuthContextType | null>(null)