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
          <BookShelf title='Currently Reading' books={this.props.books}/>
          <BookShelf title='Want to Read' books={this.props.books}/>
          <BookShelf title='Read' books={this.props.books}/>
        </div>
      </div>
    )
  }
}

export default BookList
