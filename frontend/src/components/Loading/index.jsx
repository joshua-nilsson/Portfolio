import { Screen, Frame, Loader } from "./styles"
import PropTypes from 'prop-types'

const Loading = ( { children, ...props } ) => <Screen {...props}>{children}</Screen>

Loading.Frame = ( { children, ...props } ) => <Frame {...props}>{children}</Frame>
Loading.Loader = ( { ...props } ) => <Loader {...props}/>

Loading.propTypes = {
    children: PropTypes.node.isRequired,
    props: PropTypes.object,
}

Loading.Frame.propTypes = {
    children: PropTypes.node.isRequired,
    props: PropTypes.object,
}

Loading.Loader.propTypes = {
    props: PropTypes.object,
}

export default Loading