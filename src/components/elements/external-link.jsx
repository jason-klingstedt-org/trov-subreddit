import React from 'react'
import { string, instanceOf, oneOfType } from 'prop-types'
import styled from 'styled-components'

import colors from '../../styles/colors'

const StyledExternalLink = styled.a`
    color: ${colors.blue}
`

const ExternalLink = ({ url, children }) => (
    <StyledExternalLink
        href={url}
        target="_blank"
        rel="noopener noreferrer"
    >
        { children }
    </StyledExternalLink>
)

ExternalLink.propTypes = {
    url: string.isRequired,
    children: oneOfType([string, instanceOf(Object)]).isRequired
}

export default ExternalLink
