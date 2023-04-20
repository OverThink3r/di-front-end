import {useEffect, useState} from "react";
import {useBooksAPI} from "../hooks";
import {LoadingSection} from "../share";
import {BookModal, BooksTable} from "../components/books";

export const BooksPage = () => {

  const {getBooks, books, loadingBooks} = useBooksAPI()

  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

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