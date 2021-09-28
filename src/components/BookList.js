import { useContext } from "react";
import { BookContext } from "../context/BookContext";
import BookDetails from "./BookDetails";


const BookList = () => {
    const { books } = useContext(BookContext)

    return ( 
        <div>
            <ul>
                {books.map(book => {
                    return ( <BookDetails book={book} key={book.id} />)
                })}
            </ul>
        </div>
     );
}
 
export default BookList
