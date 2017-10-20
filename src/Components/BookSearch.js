import React, { Component } from 'react'
import BookGrid from './BookGrid'
import * as BooksAPI from '../BooksAPI'


class BookSearch extends Component {

    state = {
      query: '',
      results: []
    }

    onSearchForBook = event => {
      event.preventDefault();
      let query = event.target.value;
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
    const { results, query } = this.state

    return(
      <div className="search-books">
        <div className="search-books-bar">
          <a className="close-search" onClick={this.onClearQuery}>Close</a>
          <div className="search-books-input-wrapper">

            <input
              onChange={this.onSearchForBook}
              value={query}
              type="text"
              placeholder="Search by title or author"/>
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {results.map((result) => (
              <BookGrid
                key={result.id}
                book={result}
                onUpdateShelf={this.props.onUpdateShelf}
              />
            ))}
          </ol>
        </div>
      </div>
    )
  }
}
export default BookSearch
