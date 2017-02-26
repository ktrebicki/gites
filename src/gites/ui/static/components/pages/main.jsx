import $ from 'jquery'

import React from 'react'
import ReactDOM from 'react-dom'

import NavbarOrganism from '../organisms/navbar'
import JumbotronOrganism from '../organisms/jumbotron'
import { UploadForm } from '../organisms/forms'


const MainPage = () => {
    return (
        <div>
            <NavbarOrganism href="#" text="Gites" />
                <JumbotronOrganism
                    header="Your codebase analysis"
                    description="Gites provides you with a rich, git log based analysis of a code repository of your choice."
                />
                <div className="container">
                    <UploadForm />
                </div>
        </div>
    )
}


$(document).ready(() => {
    ReactDOM.render(
        <MainPage />,
        document.getElementById('root')
    );
})

// Emit fileselect event on file inputs
$(document).on('change', ':file', function() {
    var input = $(this),
        numFiles = input.get(0).files ? input.get(0).files.length : 1,
        label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
    input.trigger('fileselect', [numFiles, label]);
  });

  // Handle fileselect event
  $(document).ready( function() {
    $(':file').on('fileselect', function(event, numFiles, label) {

        var input = $(this).parents('.input-group').find(':text'),
            log = numFiles > 1 ? numFiles + ' files selected' : label;

        if( input.length ) {
            input.val(log);
        } else {
            if( log ) alert(log);
        }
    });
});
