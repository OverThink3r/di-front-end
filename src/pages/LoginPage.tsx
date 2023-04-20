import {Field, Form, Formik} from "formik";
import * as Yup from 'yup'
import {useAuth} from "../hooks";
import {AuthLayout} from "../layouts";
export const LoginPage = () => {

  const {startLogin} = useAuth()

  const onLogin = async (values: {email: string, password: string}) => {
    console.log(values)
    await startLogin(values)
  }

  return (
        <AuthLayout title='Iniciar sesión'>
          <div>
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
                        className={`p-1 rounded-full bg-orange-400 text-white mx-2 cursor-pointer hover:bg-orange-300`}
                      >
                        Entrar
                      </button>
                    </div>
                  </Form>
                )
              }
            </Formik>
          </div>
        </AuthLayout>
  );
};