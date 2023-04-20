import {Route, Routes} from "react-router-dom";
import {LoginPage} from "../pages";

export const AppRouter = () => {

  const authStatus = 'not-authenticated'

  return (
    <Routes>
{/*
      {
        (authStatus === 'not-authenticated')
      }
*/}
      <Route path="/auth/*" element={<LoginPage />} />
    </Routes>
  );
};