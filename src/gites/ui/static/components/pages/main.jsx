import $ from 'jquery'

import React from 'react'
import ReactDOM from 'react-dom'

import NavbarOrganism from '../organisms/navbar'
import JumbotronOrganism from '../organisms/jumbotron'


const MainPage = () => {
    return (
        <div>
            <NavbarOrganism href="#" text="Gites" />
            <JumbotronOrganism
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
