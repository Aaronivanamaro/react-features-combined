//AÑADIR ACTIONS PREDEFINIDAS

export const bookReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_BOOK':
            return [...state, {
                id: new Date,
                title: action.book.title,
                author: action.book.author
            }]
        case 'REMOVE_BOOK':
            return state.filter(book => book.id !== action.id);
        default:
            return state;
    }
}