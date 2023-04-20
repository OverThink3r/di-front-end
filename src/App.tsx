import {Navbar} from "./share";
import {BooksPage, LoginPage, UsersPage} from "./pages";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";

function App() {

  return (
    <>
      <BrowserRouter>
        {/*<Navbar />*/}
        {/*<UsersPage />*/}
        <Routes>
          <Route path='/users' element={<UsersPage />} />
          <Route path='/books' element={<BooksPage />} />
          <Route path='/*' element={<Navigate to="/users" />} />
          <Route path='/auth/login' element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
