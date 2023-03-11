/* eslint-disable @next/next/no-html-link-for-pages */
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export const SidebarLeft = () => {
  return (
    <div id='leftbar' className='sidebar-left sidebar'>
      <div className="container">
        <a href='https://www.brianagude.com'>
          <Image
            src="/images/logo.svg"
            alt="Joyday Logo"
            width={120}
            height={20}
            className='site-logo'
          />
        </a>
        
        <nav className='site-nav'>
          <a href='/' className='nav-link'>
            <Image
              src="/images/home.svg"
              alt="Home Icon"
              width={24}
              height={24}
            />
            Home
          </a>
          <a href='/' className='nav-link'>
            <Image
              src="/images/info.svg"
              alt="Information Icon"
              width={24}
              height={24}
            />
            About
          </a>
          <a href='/' className='nav-link'>
            <Image
              src="/images/tv.svg"
              alt="TV Icon"
              width={24}
              height={24}
            />
            JOYDAY TV
          </a>
          <Link 
            href="/"
          >
            <a className="nav-link dictionary-link">
              <Image
                src="/images/books.svg"
                alt="Dictionary Terms"
                width={24}
                height={24}
              />
              <b>Dictionary</b>
            </a>
          </Link>
          <a href='/' className='nav-link'>
            <Image
              src="/images/cart.svg"
              alt="Shop Icon"
              width={24}
              height={24}
            />
            Shop
          </a>
          <a href='/' className='nav-link'>
            <Image
              src="/images/mail.svg"
              alt="Mail Icon"
              width={24}
              height={24}
            />
            Contact
          </a>
          <a href='/' className='nav-link'>
            <Image
              src="/images/question.svg"
              alt="FAQ"
              width={24}
              height={24}
            />
            FAQ
          </a>
        </nav>
        <a className='btn' href='https://joyday.typeform.com/check-in'>
          Check In
        </a>
      </div>
    </div>
  )
}