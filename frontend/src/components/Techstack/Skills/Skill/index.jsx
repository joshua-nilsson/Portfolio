import { Group, Circle, Image, Title } from './styles'
import PropTypes from 'prop-types'

const Skill = ({ children, ...props }) => <Group {... props}>{children}</Group>

Skill.Circle = ({ children, ...props }) => <Circle {...props}>{children}</Circle>
Skill.Image = ({ ...props }) => <Image {...props}/>
Skill.Title = ({ children, ...props }) => <Title {...props}>{children}</Title>

Skill.propTypes = {
    children: PropTypes.node.isRequired,
    props: PropTypes.object,
}

Skill.Circle.propTypes = {
    children: PropTypes.node.isRequired,
    props: PropTypes.object,
}

Skill.Image.propTypes = {
    props: PropTypes.object,
}

Skill.Title.propTypes = {
    children: PropTypes.node.isRequired,
    props: PropTypes.object,
}

export default Skill