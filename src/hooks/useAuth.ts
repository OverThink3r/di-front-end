import {diAPI} from "../api/di-api";


export const useAuth = () => {

  const startLogin = async (credentials: {email: string, password: string}) => {
    const {data} = await diAPI.post('/auth/login', credentials)
    const {ok, token} = data
    if (ok) {
      localStorage.setItem('token', token)
    }
  }

  return {
    startLogin

  }
}

