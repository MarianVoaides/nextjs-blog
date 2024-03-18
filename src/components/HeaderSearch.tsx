import React from 'react'
import {BsSearch} from 'react-icons/bs'

require('./HeaderSearch.css')
const HeaderSearch = () => {
  return (
    <div className="search-container">
    <input type="text" placeholder="Search..."></input>
    <button type="submit">Search</button>
  </div>
  )
}

export default HeaderSearch