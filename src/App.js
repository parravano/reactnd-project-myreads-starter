import React, { Component }from 'react'
import * as BooksAPI from './BooksAPI'
import BookList from './Components/BookList'
// import BookSearch from './Components/BookSearch'
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

  //  const bookShelves = [ 'currentlyReading', 'wantToRead', 'read']
   const bookShelves = [{'title': 'Currently Reading', 'select':'currentlyReading'}, { 'title': 'Want To Read', 'select': 'wantToRead'}, {'title': 'Read', 'select':'read'}]


    return (

      <div className="app">
        <BookList
          books={ this.state.books }
          bookShelves={bookShelves}
          onUpdateShelf={(book, shelf) => {
            this.updateShelf(book, shelf)
          }}
          />
        {/* <BookSearch books={this.state.books}/> */}
      </div>
  )}
}


export default BooksApp
