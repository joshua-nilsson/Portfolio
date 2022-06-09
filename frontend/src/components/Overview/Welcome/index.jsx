import { Wrapper, Group, CircleGroup, Circle, Howdy, HeyThere, Handwave, Image, Techstack, TechstackGroup, TechstackIcon, TechstackLetter, TechstackTooltip, ButtonGroup, Button } from './styles'
import { NoSSR } from '../../../components'
import { forwardRef } from 'react'
import PropTypes from 'prop-types'

const Welcome = ({ children, ...props }) => <Wrapper id="welcome" {...props}>{children}</Wrapper>

Welcome.Group = ({ children, ...props }) => <Group {...props}>{children}</Group>
Welcome.CircleGroup = ({ children, ...props }) => <CircleGroup {...props}>{children}</CircleGroup>
Welcome.Circle = ({ ...props }) => <Circle {...props}/>
Welcome.Howdy = ({ children, ...props }) => <Howdy {...props}>{children}</Howdy>
Welcome.HeyThere = ({ children, ...props }) => <HeyThere {...props}>{children}</HeyThere>
Welcome.Handwave = ({ ...props }) => <Handwave {...props}/>
Welcome.Image = ({ ...props }) => <Image {...props}/>
Welcome.Techstack = ({ children, ...props }) => <Techstack {...props}>{children}</Techstack>
Welcome.TechstackGroup = ({ children, ...props }) => <TechstackGroup {...props}>{children}</TechstackGroup>
Welcome.TechstackIcon = ({ ...props }) => <TechstackIcon {...props}/>
Welcome.TechstackLetter = ({ children, ...props }) => <TechstackLetter {...props}>{children}</TechstackLetter>
Welcome.TechstackTooltip = ({ ...props }) => <NoSSR><TechstackTooltip {...props}/></NoSSR>
Welcome.ButtonGroup = ({ children, ...props }) => <ButtonGroup {...props}>{children}</ButtonGroup>
Welcome.Button = forwardRef(({ href, children, ...props }, ref) => <Button href={href} ref={ref} {...props}>{children}</Button>)

Welcome.propTypes = {
    children: PropTypes.node.isRequired,
    props: PropTypes.object,
}

Welcome.Group.propTypes = {
    children: PropTypes.node.isRequired,
    props: PropTypes.object,
}

Welcome.CircleGroup.propTypes = {
    children: PropTypes.node.isRequired,
    props: PropTypes.object,
}

Welcome.Circle.propTypes = {
    props: PropTypes.object,
}

Welcome.Howdy.propTypes = {
    children: PropTypes.node.isRequired,
    props: PropTypes.object,
}

Welcome.HeyThere.propTypes = {
    children: PropTypes.node.isRequired,
    props: PropTypes.object,
}

Welcome.Handwave.propTypes = {
    props: PropTypes.object,
}

Welcome.Image.propTypes = {
    props: PropTypes.object,
}

Welcome.Techstack.propTypes = {
    children: PropTypes.node.isRequired,
    props: PropTypes.object,
}

Welcome.TechstackGroup.propTypes = {
    children: PropTypes.node.isRequired,
    props: PropTypes.object,
}

Welcome.TechstackIcon.propTypes = {
    props: PropTypes.object,
}

Welcome.TechstackLetter.propTypes = {
    children: PropTypes.node.isRequired,
    props: PropTypes.object,
}

Welcome.TechstackTooltip.propTypes = {
    props: PropTypes.object,
}

Welcome.ButtonGroup.propTypes = {
    children: PropTypes.node.isRequired,
    props: PropTypes.object,
}

Welcome.Button.propTypes = {
    children: PropTypes.node.isRequired,
    props: PropTypes.object,
}

export default Welcome