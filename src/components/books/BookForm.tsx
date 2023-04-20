import {Field, Form, Formik} from "formik";
import * as Yup from 'yup'
import {BookFormValues} from "../../interfaces";
import {useBooksAPI} from "../../hooks";


const defaultInitValues: BookFormValues = {
  author: '',
  isbn: '',
  title: '',
  release_date: '',
}

interface Props {
  initValues?: BookFormValues,
  closeModal: () => void
}

export const BookForm = ( {initValues, closeModal}: Props ) => {
  if (! initValues){
    initValues = defaultInitValues
  }
  const {saveBook, isSavingBook} = useBooksAPI()

  const onFormSubmit = async (bookData: BookFormValues) => {
    await saveBook(bookData)
    closeModal()
  }

  return (
    <Formik
      initialValues={{
        ...initValues
      }}
      onSubmit={onFormSubmit}
      validationSchema={
        Yup.object({
          author: Yup.string().required(),
          title: Yup.string().required(),
          isbn: Yup.string().required(),
          release_date: Yup.string().required(),
        })
      }
    >
      {
        (formik) => (
          <Form>
            <div className="mb-3">
              <label htmlFor="title">Título</label>
              <Field
                name="title"
                type="text"
                className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-orange-400"
                placeholder="Ingresa el título del libro"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="author">Autor</label>
              <Field
                name="author"
                type="text"
                className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-orange-400"
                placeholder="Ingresa el autor del libro"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="isbn">ISBN</label>
              <Field
                name="isbn"
                type="text"
                className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-orange-400"
                placeholder="Ingresa el ISBN del libro"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="release_date">F. Publicación</label>
              <Field
                name="release_date"
                type="date"
                className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-orange-400"
                placeholder="Ingresa la fecha de publicación"
              />
            </div>
            <div className="flex justify-end">
              <button
                type="button"
                className={`p-1 rounded-full bg-red-400 text-white mx-2 cursor-pointer hover:bg-red-300 ${isSavingBook && 'bg-orange-300'}`}
                disabled={isSavingBook}
                onClick={() => closeModal()}
              >
                Cancelar
              </button>
              <button
                type="submit"
                className={`p-1 rounded-full bg-orange-400 text-white mx-2 cursor-pointer hover:bg-orange-300 ${isSavingBook && 'bg-orange-300'}`}
                disabled={isSavingBook}
              >
                Guardar
              </button>
            </div>
          </Form>
        )
      }
    </Formik>

  );
};