import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import BookShelf from './BookShelf'


class BookList extends Component {
    static PropTypes = {
      books: PropTypes.array.isRequired,
      onUpdateShelf: PropTypes.array.isRequired
    }

  render() {
    const bookShelves = [{'title': 'Currently Reading', 'select':'currentlyReading'}, { 'title': 'Want To Read', 'select': 'wantToRead'}, {'title': 'Read', 'select':'read'}]

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
         {bookShelves.map((bookShelf) => {
            let filterBooks = this.props.books.filter(b => b.shelf === bookShelf.select)
             return (
              <BookShelf
                key={bookShelf.select}
                books={filterBooks}
                shelfTitle={bookShelf.title}
                onUpdateShelf={this.props.onUpdateShelf}
              />
            )
          })}
        </div>
        <div className="open-search">
          <Link to='/search'>Add a book</Link>
        </div>
    </div>
    )
  }
}

// class BookList extends Component {
//   render() {
//     const { books, onUpdateShelf } = this.props
//     let currentlyReading = books.filter(b => b.shelf === 'currentlyReading')
//     let wantToRead = books.filter(b => b.shelf === 'wantToRead')
//     let read = books.filter(b => b.shelf === 'read')
//
//     return (
//       <div className="list-books">
//         <div className="list-books-title">
//           <h1>MyReads</h1>
//         </div>
//           <div className="list-books-content">
//             <BookShelf
//             shelfTitle={'Currently Reading'}
//             onUpdateShelf={onUpdateShelf}
//             books={currentlyReading}
//             />
//             <BookShelf
//             shelfTitle={'Want To Read'}
//             onUpdateShelf={onUpdateShelf}
//             books={wantToRead}
//             />
//             <BookShelf
//             shelfTitle={'Read'}
//             onUpdateShelf={onUpdateShelf}
//             books={read}
//             />
//           );
//         })}
//       </div>
//     </div>
//     )
//   }
// }

export default BookList
