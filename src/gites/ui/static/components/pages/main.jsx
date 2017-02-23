import $ from 'jquery'

import React from 'react'
import ReactDOM from 'react-dom'

import MainNavbar from '../organisms/navbar'
import UploadJumbotron from '../organisms/jumbotron'


const MainPage = () => {
    return (
        <div>
            <MainNavbar href="#" text="Gites" />
            <UploadJumbotron
                header="Your codebase analysis"
                description="Gites provides you with a rich, git log based analysis of a code repository of your choice."
            />
        </div>
    )
}

$(document).ready(() => {
    ReactDOM.render(
        <MainPage />,
        document.getElementById('root')
    );
})
