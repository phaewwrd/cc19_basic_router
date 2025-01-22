import React from 'react'
import { Routes, Route } from 'react-router'
import Layout from '../../layout/Layout'
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import LoginPage from '../pages/LoginPage'
import Register from '../pages/Register'
import DashBoard from '../admin/DashBoard'
import Manage from '../admin/Manage'
import SettingPage from '../admin/SettingPage'
import Recap from '../pages/Recap'


function AppRoutes() {
    return (
        <div>


            <Routes>
                <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="contact" element={<Contact />} />
                <Route path="recap" element={<Recap />} />
                <Route path="login" element={<LoginPage />} />
                <Route path="register" element={<Register />} />
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