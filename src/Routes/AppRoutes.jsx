import React from 'react'
import { Routes, Route } from 'react-router'
import Layout from '../../layout/Layout'
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import LoginPage from '../pages/LoginPage'
import Register from '../pages/Register'
import DashBoard from '../pages/admin/DashBoard'
import Manage from '../pages/admin/Manage'
import SettingPage from '../pages/admin/SettingPage'
import Recap from '../pages/Recap'
import RecapUseState from '../pages/RecapUseState'


function AppRoutes() {
    return (
        <div>


            <Routes>
                <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="contact" element={<Contact />} />
                <Route path="login" element={<LoginPage />} />
                <Route path="register" element={<Register />} />

                <Route path="recap" element={<Recap />} />
                <Route path="recapusestate" element={<RecapUseState />} />
                </Route>

                <Route path="admin" element={ <Layout /> } >
                    <Route index element={<DashBoard />} />
                    <Route path="manage" element={<Manage />} />
                    <Route path="setting" element={<SettingPage />} />
                </Route>

            </Routes>
        </div>
    )
}

export default AppRoutes