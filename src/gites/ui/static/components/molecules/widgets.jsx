import React from 'react'
import { Well, Row, Col } from 'react-bootstrap'

import { BigGlyph } from '../atoms/atoms'


export const GlyphWellHorizontal = (props) => {
    return (
        <Well bsSize={ props.size }>
            <Row>
                <Col md={1}><BigGlyph glyph={ props.glyph }/></Col>
                { props.children }
            </Row>
        </Well>
    )
}
