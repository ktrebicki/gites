import $ from 'jquery'

import React from 'react'
import ReactDOM from 'react-dom'

import GitesNavbar from '../organisms/navbar'


const MainPage = () => {
    return (
        <GitesNavbar />
    )
}

$(document).ready(() => {
    ReactDOM.render(
        <MainPage />,
        document.getElementById('root')
    );
})
