import { Image } from './styles'
import PropTypes from 'prop-types'

const Brand = ({ ...props }) => <Image {... props}/>

Brand.propTypes = {
    props: PropTypes.object,
}

export default Brand