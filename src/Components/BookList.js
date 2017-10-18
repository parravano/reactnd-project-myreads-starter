import React, { Component } from 'react'
import BookShelf from './BookShelf'


class BookList extends Component {
  render() {
    const {onUpdateShelf} = this.props

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
          <div className="list-books-content">
            {this.props.bookShelves.map((bookShelf) => {
              let filterBooks = this.props.books.filter(b => b.shelf === bookShelf.select)
               return (
                <BookShelf

                  books={filterBooks}
                  shelfTitle={bookShelf.title}
                  onUpdateShelf={onUpdateShelf}
            />
          );
        })}
      </div>
    </div>
    )
  }
}





export default BookList
