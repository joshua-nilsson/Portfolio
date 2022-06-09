import { Card, Frame, Image, Group, Title, Link } from './styles'
import PropTypes from 'prop-types'

const Certificate = ({ children, ...props }) => <Card {... props}>{children}</Card>

Certificate.Frame = ({ children, ...props }) => <Frame {...props}>{children}</Frame>
Certificate.Image = ({ ...props }) => <Image {...props}/>
Certificate.Group = ({ children, ...props }) => <Group {...props}>{children}</Group>
Certificate.Title = ({ children, ...props }) => <Title {...props}>{children}</Title>
Certificate.Link = ({ children, ...props }) => <Link {...props}>{children}</Link>

Certificate.propTypes = {
    children: PropTypes.node.isRequired,
    props: PropTypes.object,
}

Certificate.Frame.propTypes = {
    children: PropTypes.node.isRequired,
    props: PropTypes.object,
}

Certificate.Image.propTypes = {
    props: PropTypes.object,
}

Certificate.Group.propTypes = {
    children: PropTypes.node.isRequired,
    props: PropTypes.object,
}

Certificate.Title.propTypes = {
    children: PropTypes.node.isRequired,
    props: PropTypes.object,
}

Certificate.Link.propTypes = {
    children: PropTypes.node.isRequired,
    props: PropTypes.object,
}

export default Certificate