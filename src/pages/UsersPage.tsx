import {useUsersAPI} from "../hooks";
import {useEffect} from "react";
import {UsersTable} from "../components/users";
import {LoadingSection} from "../share";

export const UsersPage = () => {

  const {getUsers, users, isLoadingUsers} = useUsersAPI()

  useEffect(() => {
    getUsers()
  }, []);

  if(isLoadingUsers) {
    return <LoadingSection />
  }

  return (
    <div className="container mx-auto">
      <h3 className="text-xl mb-4">Usuarios: ({users && users.length})</h3>
      <UsersTable users={users} />
    </div>
  );
};