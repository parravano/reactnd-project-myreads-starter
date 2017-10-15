import React, { Component } from 'react'
import BookGrid from './BookGrid'


// class BookList extends Component {
//
//   render() {
//     return (
//       <div className="list-books">
//         <div className="list-books-title">
//           <h1>MyReads</h1>
//         </div>
//           <div className="list-books-content">
//                {this.props.bookShelves.map((bookShelf) => (
//             <div key={bookShelf} className="bookshelf">
//               <h2 className="bookshelf-title">{bookShelf}</h2>
//                 <div className="bookshelf-books">
//                   <ol className="books-grid">
//                     {this.props.books.map((book) => (
//                       <BookGrid
//                         key={book.id}
//                         book={book}/>
//                     ))}
//                   </ol>
//               </div>
//             </div>
//           ))}
//           </div>
//       </div>
//     )
//   }
// }

class BookList extends Component {
  render () {
    const {books} = this.props

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <BookShelf onUpdateShelf={this.onUpdateShelf} books={books} shelfTitle='Currently Reading' />
            <BookShelf onUpdateShelf={this.onUpdateShelf} books={books} shelfTitle='Want to Read' />
            <BookShelf onUpdateShelf={this.onUpdateShelf} books={books} shelfTitle='Read' />
        </div>
      </div>
    </div>
    )
  }
}

class BookShelf extends Component {
  render () {
    return (
        <div className="bookshelf">
          <h2 className="bookshelf-title">{this.props.shelfTitle}</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {this.props.books.map((book) => (
                  <BookGrid
                    key={book.id}
                    book={book}/>
                ))}
              </ol>
          </div>
        </div>
    )
  }
}

export default BookList
