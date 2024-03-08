import {
    NavLink,
    Outlet
} from 'react-router-dom'
import React from 'react'

function RootLayout() {
    return (
        <div className='root-layout'>
            <header>
                <h1>
                    React Router
                </h1>
                <nav>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to='/course'>Course</NavLink>
                    <NavLink to='/database'>Database</NavLink>
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default RootLayout
