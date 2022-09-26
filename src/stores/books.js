import { defineStore } from 'pinia';
export const useBookStore = defineStore("books", {
    state: () => ({
        books: localStorage.getItem("books") ? JSON.parse(localStorage.getItem("books")) :[
            {
                image: '../src/assets/books/poe-poems.jpg',
                name: 'Poems from Edgar Allan Poe',
                author: 'Edgar Allan Poe',
                description: 'Edgar Allan Poe is credited with having pioneered the short story, having perfected the tale of psychological horror, and having revolutionized modern poetics.',
                genre: '',
                genres: ['Terror', 'Supernatural fiction', 'Poetry'],
            },
            {
                image: '../src/assets/books/poe-tales.jpg',
                name: 'The Complete Tales and Poems from Edgar Allan Poe',
                author: 'Edgar Allan Poe',
                description: 'Edgar Allan Poe is credited with having pioneered the short story, having perfected the tale of psychological horror, and having revolutionized modern poetics.',
                genre: '',
                genres: ['Terror', 'Supernatural fiction', 'Thriller'],
            },
            {
                image: '../src/assets/books/chuya-poems.jpg',
                name: 'The Poems of Nakahara Chuya',
                author: 'Nakahara Chuya',
                description: 'This selection of poems from throughout Nakahara’s creative life includes collected and uncollected work and draws on recent scholarship to give a full account of this extraordinary figure.',
                genre: '',
                genres: ['Poetry'],
            },
            {
                image: '../src/assets/books/crime-punishment.jpg',
                name: 'Crime and Punishment',
                author: 'Fyodor Dostoevsky',
                description: 'Edgar Allan Poe is credited with having pioneered the short story, having perfected the tale of psychological horror, and having revolutionized modern poetics.',
                genre: '',
                genres: ['Terror', 'Supernatural fiction'],
            },
            {
                image: '../src/assets/books/little-women.jpg',
                name: 'Little Women',
                author: 'Louisa May Alcott',
                description: 'Grown-up Meg, tomboyish Jo, timid Beth, and precocious Amy. The four March sisters couldn\'t be more different. But with their father away at war, and their mother working to support the family, they have to rely on one another. Whether they\'re putting on a play, forming a secret society, or celebrating Christmas, there\'s one thing they can\'t help wondering: Will Father return home safely?',
                genre: '',
                genres: ['Terror', 'Supernatural fiction'],
            },
            {
                image: '../src/assets/books/pride-prejudice.jpeg',
                name: 'Pride and Prejudice',
                author: 'Jane Austen',
                description: 'Edgar Allan Poe is credited with having pioneered the short story, having perfected the tale of psychological horror, and having revolutionized modern poetics.',
                genre: '',
                genres: ['Terror', 'Supernatural fiction'],
            },
            {
                image: '../src/assets/books/song-achilles.jpg',
                name: 'The song of Achilles',
                author: ' Madeline Miller',
                description: 'Edgar Allan Poe is credited with having pioneered the short story, having perfected the tale of psychological horror, and having revolutionized modern poetics.',
                genre: '',
                genres: ['Terror', 'Supernatural fiction'],
            },
            {
                image: '../src/assets/books/great-gatsby.png',
                name: 'The Great Gatsby',
                author: 'Francis Scott Fitzgerald',
                description: 'Edgar Allan Poe is credited with having pioneered the short story, having perfected the tale of psychological horror, and having revolutionized modern poetics.',
                genre: '',
                genres: ['Terror', 'Supernatural fiction'],
            },

        ],
    }),
    getters: {
        getBooks: (state) => [...state.books],
    },
    actions: {
        newBook(book) {
            this.books=[...this.books, book]
            //this.books.push(book);
            //this.localStorageBooks.push(book)
            //this.loadBooks();
            localStorage.setItem('books', JSON.stringify(this.books))
        },
        loadBooks() {
            this.localStorageBooks = JSON.parse(localStorage.getItem('books'))
            //this.books = this.products.concat([...this.localStorageBooks])
        },
        getBookById(id) {
            const filteredBooks = this.books.filter((book) => id.toLowerCase() === book.name.toLowerCase());
            return filteredBooks ? {...filteredBooks[0] } : null
        },
    },

});