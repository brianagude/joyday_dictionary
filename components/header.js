/* eslint-disable @next/next/no-html-link-for-pages */
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export const Header = () => {
  const [showMenu, setShowMenu] = useState(false)
  return (
    <>
      <header id='header' className='site-header'>
        <div className="container">
          <button className='menu-toggle' onClick={()=>setShowMenu(!showMenu)}>
            <Image
              src="/images/menu.svg"
              alt="menu icon"
              width={24}
              height={18}
              className='open-icon'
            />
          </button>
          <Link 
            href="https://www.joyday.org"
          >
            <a className='site-logo'>
              <Image
                src="/images/logo.svg"
                alt="Joyday Logo"
                width={120}
                height={20}
              />
            </a>
          </Link>
          <a href='https://www.joyday.org/cart'>
            <Image
              src="/images/cart.svg"
              alt="cart icon"
              width={24}
              height={24}
              className="open-icon"
            />
          </a>
        </div>
      </header>
      
      <div className={`slide-in-menu ${showMenu && 'active'}`}>
        <div className='container'>
        <nav className='site-nav'>
          <a href='https://www.joyday.org/' className='nav-link'>
            <Image
              src="/images/home-yellow.svg"
              alt="Home Icon"
              width={24}
              height={24}
            />
            Home
          </a>
          <a href='https://www.joyday.org/pages/joyday-tv' className='nav-link'>
            <Image
              src="/images/tv-yellow.svg"
              alt="TV Icon"
              width={24}
              height={24}
            />
            JOYDAY TV
          </a>
          <Link 
            href="/"
          >
            <a className="nav-link">
              <Image
                src="/images/books-yellow.svg"
                alt="Dictionary Terms"
                width={24}
                height={24}
              />
              <b>Dictionary</b>
            </a>
          </Link>
          <a href='https://www.joyday.org/collections/all' className='nav-link'>
            <Image
              src="/images/cart-yellow.svg"
              alt="Shop Icon"
              width={24}
              height={24}
            />
            Shop
          </a>
          <a href='https://www.joyday.org/pages/about' className='nav-link'>
            <Image
              src="/images/info-yellow.svg"
              alt="Information Icon"
              width={24}
              height={24}
            />
            About
          </a>

          
          
          <a href='https://www.joyday.org/pages/contact' className='nav-link'>
            <Image
              src="/images/mail-yellow.svg"
              alt="Mail Icon"
              width={24}
              height={24}
            />
            Contact
          </a>
          <a href='https://www.joyday.org/pages/faq' className='nav-link'>
            <Image
              src="/images/question-yellow.svg"
              alt="FAQ"
              width={24}
              height={24}
            />
            FAQ
          </a>
          <a href='https://www.joyday.org/cart'>
            <Image
              src="/images/cart.svg"
              alt="cart icon"
              width={24}
              height={24}
              className="open-icon"
            />
          </a>

          <a className='btn' href='https://joyday.typeform.com/check-in'>
            Check In
          </a>
        </nav>
        </div>
      </div>
    </>
  )
}