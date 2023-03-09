import React from 'react'

export const SidebarRight = () => {
  return (
    <div id='rightbar' className='sidebar-right sidebar'>
      <div className="container">
        <p className='copyright'>{`©${new Date().getFullYear()}`} JOYDAY</p>
      </div>
    </div>
  )
}