import { Wrapper, Group } from './styles'
import PropTypes from 'prop-types'

const Brands = ({ children, ...props }) => <Wrapper {... props}>{children}</Wrapper>

Brands.Group = ({ children, ...props }) => <Group {...props}>{children}</Group>

Brands.propTypes = {
    children: PropTypes.node.isRequired,
    props: PropTypes.object,
}

Brands.Group.propTypes = {
    children: PropTypes.node.isRequired,
    props: PropTypes.object,
}

export default Brands