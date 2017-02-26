import React from 'react'

import { Col, Button } from 'react-bootstrap'

import { FileInput, CopyInput } from '../atoms/atoms'
import { GlyphWellHorizontal } from '../molecules/widgets'


export const UploadForm = (props) => {
    return (
        <form method="post" enctype="multipart/form-data" className="upload-form">
            <GlyphWellHorizontal size="large" glyph="console">
                <Col md={3}>
                    <p>Generate a history file</p>
                </Col>
                <Col md={8}>
                    <CopyInput />
                </Col>
            </GlyphWellHorizontal>

            <GlyphWellHorizontal size="large" glyph="cloud-upload">
                <Col md={3}>
                    <p>Upload created file</p>
                </Col>
                <Col md={8}>
                    <FileInput />
                </Col>
            </GlyphWellHorizontal>

            <GlyphWellHorizontal size="large" glyph="stats">
                <Col md={3}>
                    <p>Choose a type of analysis</p>
                </Col>
                <Col md={8}>
                    <Button bsStyle="success" type="submit">Basic</Button>
                </Col>
            </GlyphWellHorizontal>
        </form>
    )
}