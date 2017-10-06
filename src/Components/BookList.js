import React, { Component } from 'react'

// class BookShelves extends Component {
//   render() {
//     return (
//       <div className="list-books">
//             <div className="list-books-title">
//               <h1>MyReads</h1>
//             </div>
//             <div className="list-books-content">
//               <div>
//                 <div className="bookshelf">
//                   <h2 className="bookshelf-title">Currently Reading</h2>
//                   <div className="bookshelf-books">
//                     <ol className="books-grid">
//
//                     </ol>
//                   </div>
//                 </div>
//                 <div className="bookshelf">
//                   <h2 className="bookshelf-title">Want to Read</h2>
//                   <div className="bookshelf-books">
//                     <ol className="books-grid">
//
//                     </ol>
//                   </div>
//                 </div>
//                 <div className="bookshelf">
//                   <h2 className="bookshelf-title">Read</h2>
//                   <div className="bookshelf-books">
//                     <ol className="books-grid">
//
//                     </ol>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//     )}
// }


class BookItem extends Component {
 render() {
const book = this.props.books;
    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageThumbnail})` }}></div>
            <div className="book-shelf-changer">
              <select>
                <option value="none" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{book.title}</div>
          <div className="book-authors">{book.authers}</div>
        </div>
      </li>
    )
  }
}
class BookList extends Component {

  render() {


    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
          <div className="list-books-content">
            <ol className="books-grid">
              {this.props.books.map((book) => (
                <BookItem key={book.id} books={book}/>
              ))}
            </ol>
        </div>
      </div>
    )
  }
}

export default BookList
