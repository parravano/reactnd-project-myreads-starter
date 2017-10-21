import React, {Component} from 'react'
import PropTypes from 'prop-types'
import BookGrid from './BookGrid'

class BookShelf extends Component {
  static PropTypes = {
    books: PropTypes.array.isRequired,
    shelfTitle: PropTypes.array.isRequired,
    onUpdateShelf: PropTypes.func.isRequired
  }

  render () {
    const {books, shelfTitle, onUpdateShelf} = this.props

    return (
      <div  className="bookshelf">
        <h2 className="bookshelf-title">{shelfTitle}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books.map((book) => (
              <BookGrid
                key={book.id}
                book={book}
                onUpdateShelf={onUpdateShelf}
              />
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default BookShelf
