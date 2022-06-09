import { CertificateSlider } from './styles'
import PropTypes from 'prop-types'

const Certificates = ({ children, ...props }) => <CertificateSlider {...props}>{children}</CertificateSlider>

Certificates.propTypes = {
    children: PropTypes.node.isRequired,
    props: PropTypes.object,
}

export default Certificates