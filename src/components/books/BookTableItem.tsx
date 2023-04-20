import {BookApiInterface} from "../../interfaces";
import {formatDateObj} from "../../helpers";
import {FaEdit, FaTrashAlt} from "react-icons/all";
import {useBooksAPI} from "../../hooks";

interface Props {
  book: BookApiInterface,
  onEditBook: (book: BookApiInterface) => void
}
export const BookTableItem = ({book, onEditBook}: Props ) => {
  const {deleteBook} = useBooksAPI()

  const {
    id,
    isbn,
    author,
    title,
    release_date
  } = book

  const formatDate = (releaseDate: string):string => {
    const dateObj = new Date(Date.parse(releaseDate))
    return formatDateObj(dateObj)
  }

  return (
    <tr className="bg-white border-b bg-slate-200 text-slate-900">
      <th scope="row" className="px-6 py-4 font-medium">
        {id}
      </th>
      <td className="px-6 py-4">
        {isbn}
      </td>
      <td className="px-6 py-4">
        {author}
      </td>
      <td className="px-6 py-4">
        {title}
      </td>
      <td className="px-6 py-4">
        <span className="bg-emerald-400 rounded-full p-1 ">
          {formatDate(release_date)}
        </span>
      </td>
      <td className="px-6 py-4 flex flex-wrap justify-evenly">
        <FaTrashAlt className="text-2xl text-red-500 cursor-pointer" onClick={() => deleteBook(id)}/>
        <FaEdit className="text-2xl text-sky-500  cursor-pointer" onClick={() => {
          onEditBook(book)
        }}/>
      </td>
    </tr>
  );
};