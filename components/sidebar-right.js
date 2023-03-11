import React from 'react'
import Image from 'next/image'

export const SidebarRight = () => {
  return (
    <div id='rightbar' className='sidebar-right sidebar'>
      <div className="container">
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
            <a href='https://www.brianagude.com'>
              <Image
                src="/images/twitter.svg"
                alt="twitter icon"
                width={20}
                height={20}
                className='site-logo'
              />
            </a>
            <a href='https://www.brianagude.com'>
              <Image
                src="/images/instagram.svg"
                alt="instagram icon"
                width={20}
                height={20}
                className='site-logo'
              />
            </a>
            <a href='https://www.brianagude.com'>
              <Image
                src="/images/facebook.svg"
                alt="facebook icon"
                width={20}
                height={20}
                className='site-logo'
              />
            </a>
            <a href='https://www.brianagude.com'>
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
    </div>
  )
}