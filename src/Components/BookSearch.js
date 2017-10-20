import React, { Component } from 'react'
import BookGrid from './BookGrid'
import * as BooksAPI from '../BooksAPI'
<<<<<<< HEAD
import escapeRegExp from 'escape-string-regexp'

||||||| merged common ancestors
=======


>>>>>>> a45a81c249cc5659160dbfc4f79b5f187d7eea51
class BookSearch extends Component {

    state = {
      query: '',
      results: []
    }

<<<<<<< HEAD
||||||| merged common ancestors
    updateQuery = query => {
      this.setState({ query: query })
    }
=======
    onUpdateQuery = query => {
    if(query === '' ) {
      this.setSet({ query: '', results: [] })
    } else {
      BooksAPI.search(query, 20).then( results  => {
>>>>>>> a45a81c249cc5659160dbfc4f79b5f187d7eea51

<<<<<<< HEAD

   onUpdateQuery = query => {
    if(query === '' ) {
      this.setSet({ query: '', results: [] })
    } else {
      BooksAPI.search(query, 20).then( results  => {
        if (results.error){
          console.log(results.error)
          results = []
        } else {
||||||| merged common ancestors
   getResults = query => {
      if(query === '') {
        this.setSet({ query: '', books: [] })
      } else {
        BooksAPI.search(query, 20).then( results  => {
=======
>>>>>>> a45a81c249cc5659160dbfc4f79b5f187d7eea51
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
<<<<<<< HEAD
          }
||||||| merged common ancestors
            return result
            })
          }
=======
>>>>>>> a45a81c249cc5659160dbfc4f79b5f187d7eea51
          this.setState({ results: results})
        })
        this.setState({query})
      }
    }

  render() {
    const { results, query } = this.state

    return(
      <div className="search-books">
        <div className="search-books-bar">
          <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
          <div className="search-books-input-wrapper">

            <input
              onChange={(event) => this.onUpdateQuery(event.target.value) }
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
