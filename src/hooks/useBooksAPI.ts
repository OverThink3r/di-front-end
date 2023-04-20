import {useState} from "react";
import {BookApiInterface} from "../interfaces/BookInterface";
import {diAPI} from "../api/di-api";
import {BookFormValues} from "../interfaces";

export const useBooksAPI = () => {
  const [books, setBooks] = useState<BookApiInterface[]>([])
  const [loadingBooks, setLoadingBooks] = useState<boolean>(false)
  const [isSavingBook, setIsSavingBook] = useState<boolean>(false)

  const getBooks = async () => {
    setLoadingBooks(true)
    const { data: {books} } = await diAPI.get('/books')
    setBooks(books)
    setLoadingBooks(false)
  }

  const saveBook = async (bookData: BookFormValues) => {
    setIsSavingBook(true)
    bookData.release_date = new Date(bookData.release_date).toISOString()
    if(bookData.id){
      const bookToUpdate = {...bookData}
      delete bookToUpdate.id
      console.log(bookToUpdate)
      await diAPI.put(`/books/${bookData.id}`, bookToUpdate)
    } else {
      await diAPI.post('/books/', {...bookData})
    }
    setIsSavingBook(false)
  }

  const deleteBook = async (bookId: number) => {
    const {data} = await diAPI.delete(`/books/${bookId}`)
    console.log(data)
  }


  return {
    books,
    loadingBooks,
    getBooks,
    saveBook,
    deleteBook,
    isSavingBook,
  }
}