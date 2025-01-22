import React from 'react'
import { Outlet } from 'react-router'
import MainNav from '../src/components/MainNav'

function Layout() {
    return (
        <div>
                        <MainNav />

            <hr />
            <Outlet />

        </div>
    )
}

export default Layout