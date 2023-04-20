import {Navigate, Route, Routes} from "react-router-dom";
import {LoginPage} from "../pages";

export const AuthRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/auth/*" element={<LoginPage />} />
        <Route path='/*' element={<Navigate to="/auth" />} />
      </Routes>
    </>
  );
};