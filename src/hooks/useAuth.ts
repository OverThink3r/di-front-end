import {diAPI} from "../api/di-api";
import {useDispatch, useSelector} from "react-redux";
import {checkingCredentials, login, logout} from "../store/auth/authSlice";


export const useAuth = () => {

  const { status, userName } = useSelector((state: any) => state.auth)
  const dispatch = useDispatch()

  const startLogin = async (credentials: {email: string, password: string}) => {
    try{
      dispatch(checkingCredentials())
      const {data} = await diAPI.post('/auth/login', credentials)
      const {ok, token, userName} = data
      if (ok) {
        localStorage.setItem('token', token)
        dispatch(login(userName))
      } else {
        dispatch(logout())
      }
    } catch (e) {
      dispatch(logout())
    }
  }

  const startRegister = async (credentials: { email: string, password: string, name: string }) => {
    try {
      dispatch(checkingCredentials())
      const {data} = await diAPI.post('/auth/register', credentials)
      dispatch(logout())
      return data.ok
    } catch (e) {
      dispatch(logout())
      return false
    }
  }

  const startLogout = () => {
    localStorage.clear()
    dispatch(logout())
  }

  const checkAuthToken = async () => {
    const token = localStorage.getItem('token')
    if (!token) return dispatch(logout())
    try {
      const {data} = await diAPI.post('/auth/checktoken')
      dispatch(login(data.username))
    } catch (e) {
      localStorage.clear()
      dispatch(logout())
    }
  }



  return {
    startLogin,
    startLogout,
    startRegister,
    checkAuthToken,
    status,
    userName

  }
}

