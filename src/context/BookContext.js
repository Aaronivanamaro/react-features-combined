import { createContext, useReducer } from "react";
import { bookReducer } from "../reducer/bookReducer";

export const BookContext = createContext()

const BookContextProvider = (props) => {

    const [books, dispatch] = useReducer(bookReducer, [
        {id: 1, title: 'Código Da Vinci', author: 'Dan Brown'},
        {id: 2, title: 'Harry Potter', author: 'J. K. Rowling'},
        {id: 3, title: 'El Principito', author: 'Antoine de Saint-Exupéry'},
    ])

    return ( 
        <BookContext.Provider value={{ books, dispatch }}>
            {props.children}
        </BookContext.Provider>
     );
}
 
export default BookContextProvider;
