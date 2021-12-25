import React from 'react'
import Header from './Header'
import Navbar from './Navbar'

function Layout({children}) {
    return (
        <div>
            {/* <div>
                <Header/>
            </div> */}
            <div className='row mt-4'>
                <div className='col-10'>
                    {children}
                </div>
                <div className='col-2'>
                    <Navbar/>
                </div>
            </div>
        </div>
    )
}

export default Layout
