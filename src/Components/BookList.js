import React, { Component } from 'react'
import BookShelf from './BookShelf'


class BookList extends Component {
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
          );
        })}
      </div>
      <div className="open-search">
        <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
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
