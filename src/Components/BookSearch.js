import React, { Component } from 'react'
import * as BooksAPI from '../BooksAPI'
class BookSearch extends Component {

    state = {
      query: '',
      books: []
    }

    updateQuery = (query) => {
      this.setState({ query: query })
    }


  render() {
    const { query } = this.state

    return(
      <div className="search-books">
        <div className="search-books-bar">
          <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
          <div className="search-books-input-wrapper">

            <input
              onChange={(event) => this.updateQuery(event.target.value) }
              value={query}
              type="text"
              placeholder="Search by title or author"/>
          </div>
        </div>
        <div className="search-books-results">
        </div>
      </div>
    )
  }
}
export default BookSearch
