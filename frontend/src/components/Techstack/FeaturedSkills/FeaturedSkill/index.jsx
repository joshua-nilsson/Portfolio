import { Card, Image } from './styles'
import PropTypes from 'prop-types'

const FeaturedSkill = ({ children, ...props }) => <Card {... props}>{children}</Card>

FeaturedSkill.Image = ({ ...props }) => <Image {...props}/>

FeaturedSkill.propTypes = {
    children: PropTypes.node.isRequired,
    props: PropTypes.object,
}

FeaturedSkill.Image.propTypes = {
    props: PropTypes.object,
}

export default FeaturedSkill