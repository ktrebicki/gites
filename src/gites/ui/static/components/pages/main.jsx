import $ from 'jquery'

import React from 'react'
import ReactDOM from 'react-dom'

import MainNavbar from '../organisms/navbar'


const MainPage = () => {
    return (
        <MainNavbar href="#" text="Gites" />
    )
}

$(document).ready(() => {
    ReactDOM.render(
        <MainPage />,
        document.getElementById('root')
    );
})
