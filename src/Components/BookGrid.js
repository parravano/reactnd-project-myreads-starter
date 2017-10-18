import React, {Component} from 'react'
import * as BooksAPI from '../BooksAPI'

class BookGrid extends Component {

  updateShelf = (event) => {
  const { book, onUpdateShelf } = this.props;
  let shelf = event.target.value;
  BooksAPI.update(book, shelf).then(() => {
    onUpdateShelf(book, shelf);
  });
};

  render() {
    const { book } = this.props

    return (
      <li>
        <div className="book">
          <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks !== undefined ? book.imageLinks.thumbnail:''})` }}></div>
            <div className="book-shelf-changer">
              <select value={book.shelf} onChange={this.updateShelf}>
                <option value="none" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{book.title}</div>
          <div className="book-authors">{book.authors}</div>
        </div>
      </li>
    )
  }
}

export default BookGrid
