import {Field, Form, Formik} from "formik";
import * as Yup from 'yup'
import {useAuth} from "../hooks";
import {AuthLayout} from "../layouts";
import {useState} from "react";
import {LoginForm} from "../components/auth/LoginForm";
import {RegisterForm} from "../components/auth/RegisterForm";
export const LoginPage = () => {

  const [isLoginForm, setIsLoginForm] = useState<boolean>(true);

  const toggleLoginBand = () => {
    setIsLoginForm(prevValue => !prevValue)
  }

  return (
    <AuthLayout title={`${isLoginForm ? 'Iniciar sesión' : 'Crear una cuenta'}`}>
      {
        isLoginForm
        ? <LoginForm toggleForm={toggleLoginBand} />
        : <RegisterForm toggleForm={toggleLoginBand}/>
      }
    </AuthLayout>
  );
};