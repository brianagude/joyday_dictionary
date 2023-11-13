/* eslint-disable @next/next/no-html-link-for-pages */
import React from 'react'
import Image from 'next/image'

export const Footer = () => {
  return (
    <footer id='footer' className='site-footer'>
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
        <form className='email-capture'>
          <label htmlFor='email'>Join Our Email List</label>
          <div className='input-wrapper'>
            <input type='text' name='email' placeholder='hello@joyday.org'></input>
            <button type='submit' className='btn-submit'>
            <Image
                src="/images/arrow-brown.svg"
                alt="brown right arrow"
                width={16}
                height={14}
              />
            </button>
          </div>
        </form>
        <div className='nav-copyright'>
          <nav className='social-links'>
            <a href='https://twitter.com/JOYdayMovement'>
              <Image
                src="/images/twitter.svg"
                alt="twitter icon"
                width={20}
                height={20}
                className='site-logo'
              />
            </a>
            <a href='https://www.instagram.com/joydaymovement/?hl=en'>
              <Image
                src="/images/instagram.svg"
                alt="instagram icon"
                width={20}
                height={20}
                className='site-logo'
              />
            </a>
            <a href='https://www.facebook.com/JOYdayMovement/'>
              <Image
                src="/images/facebook.svg"
                alt="facebook icon"
                width={20}
                height={20}
                className='site-logo'
              />
            </a>
            <a href='mailto:info@joyday.org'>
              <Image
                src="/images/mail.svg"
                alt="mail icon"
                width={20}
                height={20}
                className='site-logo'
              />
            </a>
          </nav>
          <p className='copyright'>{`©${new Date().getFullYear()}`} JOYDAY</p>
        </div>
      </div>
    </footer>
  )
}