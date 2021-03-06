import React from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'
import PropTypes from 'prop-types'
import { DebounceInput } from 'react-debounce-input'

const SearchBooks = (props) => {
    return (
        <div className="search-books">
            <div className="search-books-bar">
                <Link to='/' className="close-search"> Close</Link>
                <div className="search-books-input-wrapper">
                    <DebounceInput debounceTimeout={300} 
                    placeholder="Search by title or author"
                    onChange={props.updateSearchList}
                    />
                </div>
            </div>
            <div className="search-books-results">
                <ol className="books-grid">
                    {props.searchBooks.map((book) => (
                        <li key={book.id}>
                            <Book onBookShelfChange={props.updateMyBooks} book={book}/>
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    )
}

SearchBooks.PropTypes = {
    updateMyBooks: PropTypes.func.isRequired,
    updateSearchList: PropTypes.func.isRequired,
    searchBooks: PropTypes.array.isRequired
}

export default SearchBooks