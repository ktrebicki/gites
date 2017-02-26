import $ from 'jquery'
import React from 'react'
import CopyToClipboard from 'react-copy-to-clipboard';

import { Glyphicon, InputGroup, Button, FormControl, FormGroup, ControlLabel } from 'react-bootstrap'


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


class CopyInput extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: this.props.value,
            copied: false
        };
    }

    render() {
        return (
            <FormGroup validationState={this.state.copied ? 'success' : null}>
              <InputGroup>
                  <span className="input-group-btn">
                    <CopyToClipboard text={this.state.value} onCopy={() => this.setState({copied: true})}>
                      <button type="button" className="btn btn-primary">Copy&nbsp;&nbsp;&nbsp;</button>
                    </CopyToClipboard>
                  </span>
                <FormControl type="text" value={this.state.value} className="copy-input-code" readOnly/>
                <FormControl.Feedback />
              </InputGroup>
              <ControlLabel onClick={() => this.setState({copied: false})}>
                {this.state.copied ? 'Copied to the clipboard. Paste it into your terminal now.' : ''}
              </ControlLabel>
            </FormGroup>
        )
    }
}

export { CopyInput }

