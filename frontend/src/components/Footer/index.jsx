import { Container, BackgroundImage, CircleGroup, Circle, Expander, Box, Info, Link, Image } from './styles'
import PropTypes from 'prop-types'

const Footer = ({ children, ...props }) => <Container {...props}>{children}</Container>

Footer.BackgroundImage = ({ ...props }) => <BackgroundImage {...props}/>
Footer.CircleGroup = ({ children, ...props }) => <CircleGroup {...props}>{children}</CircleGroup>
Footer.Circle = ({ ...props }) => <Circle {...props}/>
Footer.Expander = ({ children, ...props }) => <Expander {...props}>{children}</Expander>
Footer.Box = ({ children, ...props }) => <Box {...props}>{children}</Box>
Footer.Info = ({ children, ...props }) => <Info {...props}>{children}</Info>
Footer.Link = ({ children, ...props }) => <Link {...props}>{children}</Link>
Footer.Image = ({ ...props }) => <Image {...props}/>

Footer.propTypes = {
    children: PropTypes.node.isRequired,
    props: PropTypes.object,
}

Footer.BackgroundImage.propTypes = {
    props: PropTypes.object,
}

Footer.CircleGroup.propTypes = {
    children: PropTypes.node.isRequired,
    props: PropTypes.object,
}

Footer.Circle.propTypes = {
    props: PropTypes.object,
}

Footer.Expander.propTypes = {
    children: PropTypes.node.isRequired,
    props: PropTypes.object,
}

Footer.Box.propTypes = {
    children: PropTypes.node.isRequired,
    props: PropTypes.object,
}

Footer.Info.propTypes = {
    children: PropTypes.node.isRequired,
    props: PropTypes.object,
}

Footer.Link.propTypes = {
    children: PropTypes.node.isRequired,
    props: PropTypes.object,
}

Footer.Image.propTypes = {
    props: PropTypes.object,
}

export default Footer