export default {
    addBook(state, payload){
        if (Array.isArray(payload)) {
            payload.map(book => {
                state.books.push(book);
            })
        } else {
            state.books.push(payload);
        }
    },
    editBook(state, payload){
        state.books.some((book, i) => {
            if (book.id == payload.id) {
                book = payload;
                return true;
            }
        });

    },
    removeBook(state, payload){
        let bookIndex;
        state.books.some((book, i) => {
            if (book.id == payload) {
                bookIndex = i;
                return true;
            }
        });
        state.books.splice(bookIndex, 1);
    },
    selectBook(state, payload){
        let bookData = {
            "id": '',
            "Name": "",
            "Author": "",
            "Image": "",
            "Published": "",
            "Price": "",
            "ISBN": "",
            "Description": ""
        };
        if (payload !== 'newProduct') {
            state.books.some((book, i) => {
                if (book.id == payload) {
                    bookData = book;
                    return true;
                }
            });
        }
        state.selectedBook = bookData;
    }
}