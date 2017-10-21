import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import * as BooksAPI from '../BooksAPI'
import BookGrid from './BookGrid'

class BookSearch extends Component {
  static PropTypes = {
    books: PropTypes.array.isRequired,
    onUpdateShelf: PropTypes.func.isRequired
  }

  state = {
    query: '',
    results: []
  }

  onSearchForBook = event => {
    let query = event.target.value
    this.setState({ query: query })
    query = query.trim()
    this.getBooks(query)
  }

  getBooks = query => {
    if(query === '') {
       this.setState({ results: [] })
    } else {
        BooksAPI.search(query, 20).then( results  => {
          if (results.length > 0) {
            results = results.map(result => {
             for (let book of this.props.books)
              if (result.shelf === book.shelf ) {
               book.shelf = result.shelf
              } else {
               result.shelf = 'none'
              }
             return result
            })
          }
          this.setState({ results: results})
        })
      }
    }

  onClearQuery = event => {
    this.setState({ query: '', results: [] })
  }

  render() {
    const { results, query} = this.state
    const {onUpdateShelf} = this.props
    return(
      <div className="search-books">
        <div className="search-books-bar">
          <Link to='/' className="close-search" onClick={this.onClearQuery}>Close</Link>
          <div className="search-books-input-wrapper">
            <input
              onChange={this.onSearchForBook}
              value={query}
              type="text"
              placeholder="Search by title or author"
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {results.map((result) => (
              <BookGrid
                key={result.id}
                book={result}
                onUpdateShelf={onUpdateShelf}
              />
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default BookSearch
