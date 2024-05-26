import React, { ReactNode } from 'react'

const Layout = ({children} : {children :ReactNode}) => {
  return (
    <main className='root'>{children}</main>
  )
}

export default Layout