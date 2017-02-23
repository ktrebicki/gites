import React from 'react'
import { Jumbotron } from 'react-bootstrap'


const UploadJumbotron = (props) => {
    return (
      <Jumbotron>
        <div className="container">
          <h1>{ props.header }</h1>
          <p>{ props.description }</p>
        </div>
      </Jumbotron>
    )
}

export default UploadJumbotron