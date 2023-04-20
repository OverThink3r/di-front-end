import {useAuth} from "../../hooks";
import {Field, Form, Formik} from "formik";
import * as Yup from "yup";


interface Props {
  toggleForm: () => void
}

export const RegisterForm = ({toggleForm}: Props) => {
  const {startRegister} = useAuth()

  const onRegister = async ({email, password1, password2, name}: {email: string, password1: string, password2: string, name: string}) => {
    if (password1 !== password2) return
    const registered = await startRegister({email, password: password1, name})
    registered && toggleForm()
  }

  return (
    <Formik
      initialValues={{
        email: '',
        password1: '',
        password2: '',
        name: '',
      }}
      onSubmit={onRegister}
      validationSchema={
        Yup.object({
          email: Yup.string().email().required(),
          password1: Yup.string().required(),
          password2: Yup.string().required(),
          name: Yup.string().required()
        })
      }
    >
      {
        (formik) => (
          <Form>
            <div className="mb-3">
              <label htmlFor="name">Nombre:</label>
              <Field
                name="name"
                type="text"
                className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-orange-400"
                placeholder="Ingresa tu nombre"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email">Correo:</label>
              <Field
                name="email"
                type="text"
                className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-orange-400"
                placeholder="Ingresa tu correo electrónico"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password1">Contraseña:</label>
              <Field
                name="password1"
                type="password"
                className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-orange-400"
                placeholder="Ingresa tu contraseña"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password2">Confirmar Contraseña:</label>
              <Field
                name="password2"
                type="password"
                className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-orange-400"
                placeholder="Confirma tu contraseña"
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
              <span className="text-sm underline cursor-pointer" onClick={toggleForm}>¿Ya tienes una cuenta?</span>
            </div>
          </Form>
        )
      }
    </Formik>
  );
};