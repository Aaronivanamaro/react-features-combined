import { createContext, useReducer, useEffect } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { bookReducer } from "../reducer/bookReducer";

export const BookContext = createContext()

const BookContextProvider = (props) => {

    const [books, dispatch] = useLocalStorage('books', bookReducer)

    return ( 
        <BookContext.Provider value={{ books, dispatch }}>
            {props.children}
        </BookContext.Provider>
     );
}
 
export default BookContextProvider;
