import {useEffect, useState} from "react";
import {useBooksAPI} from "../hooks";
import {LoadingSection, Navbar} from "../share";
import {BookModal, BooksTable} from "../components/books";
import {useSelector} from "react-redux";

export const BooksPage = () => {

  const {getBooks,  loadingBooks} = useBooksAPI()
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const {booksArray: books} = useSelector((state: any) => state.books)

  useEffect(() => {
    getBooks()
  }, []);

  const closeModal = () => {
    setModalIsOpen(false)
  }

  const onCreateBook = () => {
    setModalIsOpen(true)
  }

  if(loadingBooks){
    return <LoadingSection />
  }

  return (
    <div className="container mx-auto">
      <div className="flex justify-between mb-4">
        <span className="text-xl">Libros: {books.length}</span>
        <button
          className={`p-1 rounded-full bg-orange-400 text-white mx-2 cursor-pointer hover:bg-orange-300`}
          onClick={onCreateBook}
        >
          Crear libro
        </button>
      </div>
      <BooksTable books={books} />

      <BookModal  modalIsOpen={modalIsOpen} closeModal={closeModal} />
    </div>
  );
};