import React, {Component} from 'react'
import BookGrid from './BookGrid'

class BookShelf extends Component {

  render () {
    const {shelfTitle} = this.props
    return (
      // if maping through self add key key={shelfTitle}
        <div  className="bookshelf">
          <h2 className="bookshelf-title">{shelfTitle}</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {this.props.books.map((book) => (
                  <BookGrid
                    key={book.id}
                    book={book}
                    onUpdateShelf={this.props.onUpdateShelf}
                  />
                ))}
              </ol>
          </div>
        </div>
    )
  }
}

export default BookShelf
