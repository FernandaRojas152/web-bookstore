import { defineStore } from 'pinia';
import { collection, getDocs, addDoc, onSnapshot } from "firebase/firestore";
import {db} from "../firebase/config"
const querySnapshot = await getDocs(collection(db, "books"));
  let fbBooks =[]
  querySnapshot.forEach((doc) => {
        const book = {
            id: doc.id,
            image:doc.data().image,
            name:doc.data().name,
            author:doc.data().author,
            description:doc.data().description,
            genre:doc.data().genre,
            genres:doc.data().genres,                        
        }
        fbBooks.push(book);
    });
export const useBookStore = defineStore("books", {
    state: () => ({
        books: fbBooks
        /* books: localStorage.getItem("books") ? JSON.parse(localStorage.getItem("books")) :[
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
                description: 'When Raskolnikov, an impoverished student living in the St. Petersburg of the tsars, commits an act of murder and theft, he sets into motion a story that is almost unequalled in world literature for its excruciating suspense, its atmospheric vividness, and its depth of characterization and vision. Dostoevsky’s drama of sin, guilt, and redemption transforms the sordid story of an old woman’s murder into the nineteenth century’s profoundest and most compelling philosophical novel.',
                genre: '',
                genres: ['Literary Fiction', 'Novel','Psychological Thriller'],
            },
            {
                image: '../src/assets/books/little-women.jpg',
                name: 'Little Women',
                author: 'Louisa May Alcott',
                description: 'Grown-up Meg, tomboyish Jo, timid Beth, and precocious Amy. The four March sisters couldn\'t be more different. But with their father away at war, and their mother working to support the family, they have to rely on one another. Whether they\'re putting on a play, forming a secret society, or celebrating Christmas, there\'s one thing they can\'t help wondering: Will Father return home safely?',
                genre: '',
                genres: ['Children Literature', 'Classics', 'Romance'],
            },
            {
                image: '../src/assets/books/pride-prejudice.jpeg',
                name: 'Pride and Prejudice',
                author: 'Jane Austen',
                description: '"You have bewitched me body and soul. And I love...I love...I love you. I never wish to be parted from you from this day on." Pride and Prejudice is an 1813 romantic novel by Jane Austen that follows the character development of Elizabeth Bennet, the dynamic protagonist of the book who learns about the repercussions of hasty judgments and comes to appreciate the difference between superficial goodness and actual goodness.',
                genre: '',
                genres: ['Romance', 'Novel'],
            },
            {
                image: '../src/assets/books/song-achilles.jpg',
                name: 'The song of Achilles',
                author: ' Madeline Miller',
                description: 'Greece in the age of heroes. Patroclus, an awkward young prince, has been exiled to the court of King Peleus and his perfect son Achilles. By all rights their paths should never cross, but Achilles takes the shamed prince as his friend, and as they grow into young men skilled in the arts of war and medicine their bond blossoms into something deeper - despite the displeasure of Achilles\' mother Thetis, a cruel sea goddess. But then word comes that Helen of Sparta has been kidnapped. Torn between love and fear for his friend, Patroclus journeys with Achilles to Troy, little knowing that the years that follow will test everything they hold dear.',
                genre: '',
                genres: ['Romance', 'Fantasy'],
            },
            {
                image: '../src/assets/books/great-gatsby.png',
                name: 'The Great Gatsby',
                author: 'Francis Scott Fitzgerald',
                description: 'The Great Gatsby is a 1925 novel by American writer F. Scott Fitzgerald. Set in the Jazz Age on Long Island, the novel depicts narrator Nick Carraway\'s interactions with mysterious millionaire Jay Gatsby and Gatsby\'s obsession to reunite with his former lover, Daisy Buchanan.',
                genre: '',
                genres: ['Tragedy', 'Realism', 'Modernism', 'Social Satire'],
            },
        ],
        selectedFilters: {} */
    }),
    getters: {
        getBooks: (state) => [...state.books],
        getFilteredBooks: (state) => {
            const filteredbooks = state.books.filter((book)=> {
            const {description, name, author, genres} = book
            const keyword = state.selectedFilters.keyword?.toLowerCase() || ''
            const genre = state.selectedFilters.genre
            return keyword || (genre && genre !== 'All')? 
            (/*FILTROS DE KEYWORD*/ description.toLowerCase().includes(keyword) || 
            name.toLowerCase().includes(keyword) ||
            author.toLowerCase().includes(keyword)) &&
            genres.includes(genre) : true
            })
            return filteredbooks
          },
          getAllGenres: (state) => {
            const genres = ['All'];
            state.books.forEach(element => {
              element.genres.forEach(genreToAdd => {
                if(!genres.some((addedGenre)=> addedGenre ===genreToAdd)){
                  genres.push(genreToAdd)
                }
              })
            });
            return genres
          }
    },
    actions: {
        newBook(book) {
            console.log(book);
            const docRef =  addDoc(collection(db, "books"), book);
            this.books=[...this.books, book]
            localStorage.setItem('books', JSON.stringify(this.books))
        },
        async loadBooks() {
            const querySnapshot = await getDocs(collection(db, "books"));
            let fbBooks =[]
            querySnapshot.forEach((doc) => {
            const book = {
            id: doc.id,
            image:doc.data().image,
            name:doc.data().name,
            author:doc.data().author,
            description:doc.data().description,
            genre:doc.data().genre,
            genres:doc.data().genres,                        
            }
            fbBooks.push(book);
            });
            this.localStorageBooks = fbBooks;
        },
        getBookById(id) {
            const filteredBooks = this.books.filter((book) => id.toLowerCase() === book.name.toLowerCase());
            return filteredBooks ? {...filteredBooks[0] } : null
        },
        applyFilter(key, value){
            this.selectedFilters[key] = value
        }
    },

});