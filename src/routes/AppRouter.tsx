import {Navigate, Route, Routes} from "react-router-dom";
import {BooksPage, LoginPage, UsersPage} from "../pages";
import {LoadingSection, Navbar} from "../share";
import {AuthRoutes} from "./AuthRoutes";
import {UsersBooksRoutes} from "./UsersBooksRoutes";
import {useAuth} from "../hooks";
import {useEffect} from "react";

export const AppRouter = () => {

  const {status, checkAuthToken} = useAuth()

  useEffect(() => {
    checkAuthToken()
  }, []);

  if (status == 'checking'){
    return (
      <div className="flex justify-center items-center h-screen">
        <LoadingSection />
      </div>
    )
  }

  return (
    <>
      {
        (status === 'authenticated')
        ? (
            <UsersBooksRoutes />
        )
        : (
          <AuthRoutes />
          )
      }
    </>
  );
};