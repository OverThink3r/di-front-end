import {Field, Form, Formik} from "formik";
import * as Yup from "yup";
import {useAuth} from "../../hooks";

interface Props {
  toggleForm: () => void
}

export const LoginForm = ({toggleForm}: Props) => {

  const {startLogin, checkAuthToken} = useAuth()

  const onLogin = async (values: {email: string, password: string}) => {
    await startLogin(values)
    // await checkAuthToken()
  }

  return (
  <Formik
    initialValues={{
      email: '',
      password: ''
    }}
    onSubmit={onLogin}
    validationSchema={
      Yup.object({
        email: Yup.string().email().required(),
        password: Yup.string().required()
      })
    }
  >
    {
      (formik) => (
        <Form>
          <div className="mb-3">
            <label htmlFor="email">Correo:</label>
            <Field
              name="email"
              type="text"
              className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-orange-400"
              placeholder="Ingresa tú correo electrónico"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password">Contraseña:</label>
            <Field
              name="password"
              type="password"
              className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-orange-400"
              placeholder="Ingresa tu contraseña"
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className='py-1 px-5 rounded-full bg-orange-400 text-white mx-2 cursor-pointer hover:bg-orange-300 mb-3'
            >
              Entrar
            </button>
          </div>
          <div className="flex justify-end">
            <span className="text-sm underline cursor-pointer" onClick={toggleForm}>¿No tienes una cuenta?</span>
          </div>
        </Form>
      )
    }
  </Formik>
  );
};