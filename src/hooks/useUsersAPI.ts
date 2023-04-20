import {useState} from "react";
import {diAPI} from "../api/di-api";
import {UserInterface} from "../interfaces";

export const useUsersAPI = () => {
  const [isLoadingUsers, setIsLoadingUsers] = useState<boolean>(false)
  const [users, setUsers] = useState<UserInterface[]>([])

  const getUsers = async () => {
    setIsLoadingUsers(true)
    const {data: {users}} = await diAPI.get('/users')
    setUsers(users)
    setIsLoadingUsers(false)
  }

  return {
    isLoadingUsers,
    users,
    getUsers
  }
}