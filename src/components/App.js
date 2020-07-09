import React, { useState } from 'react'
import About from './About'
import Footer from './Footer'
import Menu from './Navigations/Menu'
import Header from './Header'
import booksMockData from '../mocks/books'
import Navbar from './Navigations/Navbar'
import Books from './Books'
function App() {
  const [books, setBooks] = useState(booksMockData)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [selectedFilter, setSelectedFilter] = useState('All')

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const selectFilter = (filter) => {
    setSelectedFilter(filter)
    setBooks(
      filter === 'All'
        ? booksMockData
        : booksMockData.filter((book) => book.category === filter)
    )
  }

  const filters = ['All', 'Design', 'Mobile', 'DevOps', 'Essentials']

  const tabItems = filters.map((filter) => (
    <li
      className={filter === selectedFilter ? 'active' : ''}
      key={filter}
      onClick={() => selectFilter(filter)}
    >
      <a href="#0">{filter}</a>
    </li>
  ))

  return (
    <div id="page-wrap">
      <Menu
        pageWrapId="page-wrap"
        isOpen={isMenuOpen}
        toggleMenu={toggleMenu}
      />

      <Navbar toggleMenu={toggleMenu} />
      <Header title="By React GraphQL Academy" />

      <Books books={books} tabItems={tabItems} />

      <About />

      <Footer />
    </div>
  )
}

export default App
