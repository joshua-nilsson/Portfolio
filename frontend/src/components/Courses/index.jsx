import { CourseSlider } from './styles'
import Course from './Course'
import PropTypes from 'prop-types'

const Courses = ({ children, ...props }) => <CourseSlider {...props}>{children}</CourseSlider>

Courses.propTypes = {
    children: PropTypes.node.isRequired,
    props: PropTypes.object,
}

export default Courses