import {Navbar} from "../share";
import {Navigate, Route, Routes} from "react-router-dom";
import {BooksPage, UsersPage} from "../pages";

export const UsersBooksRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/users' element={<UsersPage />} />
        <Route path='/books' element={<BooksPage />} />
        <Route path='/*' element={<Navigate to="/users" />} />
      </Routes>
    </>
  );
};