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
   BooksAPI.getAll().then((books) => {
     this.setState({ books })
   })
 }



 render() {
    return (
      <div className="app">
        <BookList books={this.state.books}/>
        {/* <BookSearch /> */}
      </div>
  )}
}


export default BooksApp
