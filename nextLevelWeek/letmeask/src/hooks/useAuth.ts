import { AuthContext } from '../contexts/AuthContext'
import { useContext } from 'react'


export function useAuth() {
    const value = useContext(AuthContext)
    return value
}