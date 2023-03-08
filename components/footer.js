import React from 'react'
import Image from 'next/image'

export const Footer = () => {
  return (
    <footer id='footer' className='site-footer'>
      <div className="container">
        <a href='/'>
          <Image
            src="/images/logo.svg"
            alt="Joyday Logo"
            width={120}
            height={20}
            className='site-logo'
          />
        </a>
        <nav className='footer-links'>
          <a href='/'>
            <Image
              src="/images/twitter.svg"
              alt="Joyday Logo"
              width={18}
              height={18}
              className='site-logo'
            />
          </a>
          <a href='/'>
            <Image
              src="/images/instagram.svg"
              alt="Joyday Logo"
              width={18}
              height={18}
              className='site-logo'
            />
          </a>
          <a href='/'>
            <Image
              src="/images/facebook.svg"
              alt="Joyday Logo"
              width={18}
              height={18}
              className='site-logo'
            />
          </a>
          <a href='/'>
            <Image
              src="/images/mail.svg"
              alt="Joyday Logo"
              width={18}
              height={18}
              className='site-logo'
            />
          </a>
        </nav>
        <p className='copyright'>{`©${new Date().getFullYear()}`} JOYDAY</p>
      </div>
    </footer>
  )
}