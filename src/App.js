import React, { component }from 'react'
import * as BooksAPI from './BooksAPI'
import BookList from './Components/BookList'
import BookSearch from './Components/BookSearch'
import './App.css'

class BooksApp extends React.Component {

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
        <BookList />
        <BookSearch />
      </div>
  )}
}


export default BooksApp
