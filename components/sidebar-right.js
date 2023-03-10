import React from 'react'
import Image from 'next/image'

export const SidebarRight = () => {
  return (
    <div id='rightbar' className='sidebar-right sidebar'>
      <div className="container">
        <form className='email-capture'>
          <label htmlFor='email'></label>
          <input type='text' name='email' placeholder='hello@joyday.org'></input>
          <button type='submit' className='btn-submit'>
           <Image
              src="/images/arrow-brown.svg"
              alt="brown right arrow"
              width={16}
              height={14}
            />
          </button>
        </form>
        <div className='nav-copyright'>
          <nav className='social-links'>
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
      </div>
    </div>
  )
}