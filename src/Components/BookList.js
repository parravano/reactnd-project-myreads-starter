import React, { Component } from 'react'
import BookShelf from './BookShelf'


class BookList extends Component {

  render() {
    const {books} = this.props
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <BookShelf title='Currently Reading' books={books}/>
          <BookShelf title='Want to Read' books={books}/>
          <BookShelf title='Read' books={books}/>
        </div>
      </div>
    )
  }
}

export default BookList
