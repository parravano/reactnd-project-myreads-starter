import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import BookList from './Components/BookList'
import BookSearch from './Components/BookSearch'
import './App.css'


class BooksApp extends Component {

 state = {
    books: []

  }


 componentDidMount() {
   BooksAPI.getAll().then(books => {
     this.setState({ books })
   })
 }


 updateShelf = (book, shelf) => {
    book.shelf = shelf
    this.setState(state => ({
      books: state.books.filter(b => b.id !== book.id).concat([book])
    }));
  };




 render() {

    return (

      <div className="app">
        <Route exact path='/' render={() => (
          <BookList
            books={ this.state.books }
            onUpdateShelf={(book, shelf) => {
              this.updateShelf(book, shelf)
            }}
          />
        )}/>
        <Route path='/search' render={() => (
          <BookSearch
            books={this.state.books}
            onUpdateShelf={(book, shelf) => {
              this.updateShelf(book, shelf)
            }}
          />
        )}/>

      </div>
  )}
}


export default BooksApp
