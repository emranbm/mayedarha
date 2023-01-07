import React, {useState} from 'react'
import ReactDOM from 'react-dom/client'

import 'bootstrap/scss/bootstrap.scss' // Bootstrap should be imported before index.scss to not rollback overrides
import './index.scss'

import 'react-toastify/dist/ReactToastify.css'
import * as serviceWorkerRegistration from './serviceWorkerRegistration'
import reportWebVitals from './reportWebVitals'
import {ToastContainer} from 'react-toastify'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import LandingPage from "./pages/LandingPage"

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <Root/>
        <ToastContainer rtl={true} position="bottom-left"/>
    </React.StrictMode>,
)

function Root() {
    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<LandingPage/>}/>
        </Routes>
    </BrowserRouter>
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister()

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
