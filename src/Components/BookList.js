import React, { Component } from 'react'
import BookShelf from './BookShelf'


class BookList extends Component {

  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
          <div className="list-books-content">
            {this.props.bookShelves.map((bookShelf) => (
            <div key={bookShelf}className="bookshelf">
              <h2 className="bookshelf-title">{bookShelf}</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                    {this.props.books.map((book) => (
                      <BookShelf
                        key={book.id}
                        book={book}/>
                    ))}
                  </ol>
              </div>
            </div>
          ))}
          </div>
      </div>
    )
  }
}

export default BookList
