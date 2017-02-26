import $ from 'jquery'
import React from 'react'
import { Glyphicon, InputGroup, Button, FormControl } from 'react-bootstrap'


export const BigGlyph = (props) => {
    return <Glyphicon glyph={ props.glyph } className="big-glyph"/>
}

export const FileInput = () => {
    return  (
            <InputGroup>
                <label className="input-group-btn">
                    <span className="btn btn-primary">
                        Browse&hellip; <input type="file" name="logfile" style={{display: 'none'}} />
                    </span>
                </label>
                <input type="text" className="form-control" readOnly/>
            </InputGroup>
    )
}

export const CopyInput = () => {
    return (
      <InputGroup>
        <InputGroup.Button>
          <Button bsStyle="primary">Copy&nbsp;&nbsp;&nbsp;</Button>
        </InputGroup.Button>
        <FormControl type="text" value='git log --pretty=format:"%an,%ad:%s" --shortstat > history.log' className="copy-input-code" readOnly/>
      </InputGroup>
    )
}
