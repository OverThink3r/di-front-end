import {BookApiInterface, BookFormValues} from "../../interfaces";
import {BookTableItem} from "./BookTableItem";
import {BookModal} from "./BookModal";
import {useState} from "react";
import {formatDateYMD} from "../../helpers";

interface Props {
  books: BookApiInterface[]
}

const initBookFormValues: BookFormValues = {
  title: '',
  isbn: '',
  author: '',
  release_date: ''
}
export const BooksTable = ({books}: Props) => {

  const [bookForm, setBookForm] = useState<BookFormValues>(initBookFormValues);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

  const editBook = (book: BookFormValues) => {
    console.log(book.release_date)
    setBookForm({
      id: book.id,
      release_date: formatDateYMD(new Date(book.release_date)),
      author: book.author,
      isbn: book.isbn,
      title: book.title
    })
    setModalIsOpen(true)
  }

  const closeModal = () => {
    setModalIsOpen(false)
  }

  return (
    <>
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500 ">
          <thead className="text-xs uppercase bg-emerald-700 text-white">
          <tr>
            <th scope="col" className="px-6 py-3"> Id </th>
            <th scope="col" className="px-6 py-3"> ISBN </th>
            <th scope="col" className="px-6 py-3"> Author </th>
            <th scope="col" className="px-6 py-3"> Título </th>
            <th scope="col" className="px-6 py-3"> F. Publicación </th>
            <th scope="col" className="px-6 py-3"> Acciones </th>
          </tr>
          </thead>
          <tbody>
          {
            books?.map(book => (
              <BookTableItem book={book} onEditBook={editBook} key={book.id} />
            ))
          }
          </tbody>
        </table>
      </div>
      <BookModal initFormValues={bookForm} modalIsOpen={modalIsOpen} closeModal={closeModal}/>
    </>
  );
};