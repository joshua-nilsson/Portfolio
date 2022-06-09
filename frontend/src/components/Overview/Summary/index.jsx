import { Wrapper, Card, Bar, Frame, Heading, Line, Image, Techstack, TechstackIcon, TechstackTooltip } from './styles'
import { NoSSR } from '../../../components'
import PropTypes from 'prop-types'

const Summary = ({ children, ...props }) => <Wrapper id="summary" {...props}>{children}</Wrapper>

Summary.Card = ({ children, ...props }) => <Card {...props}>{children}</Card>
Summary.Bar = ({ ...props }) => <Bar {...props}/>
Summary.Frame = ({ children, ...props }) => <Frame {...props}>{children}</Frame>
Summary.Heading = ({ children, ...props }) => <Heading {...props}>{children}</Heading>
Summary.Line = ({ ...props }) => <Line {...props}/>
Summary.Image = ({ ...props }) => <Image {...props}/>
Summary.Techstack = ({ children, ...props }) => <Techstack {...props}>{children}</Techstack>
Summary.TechstackIcon = ({ ...props }) => <TechstackIcon {...props}/>
Summary.TechstackTooltip = ({ ...props }) => <NoSSR><TechstackTooltip {...props}/></NoSSR>

Summary.propTypes = {
    children: PropTypes.node.isRequired,
    props: PropTypes.object,
}

Summary.Card.propTypes = {
    children: PropTypes.node.isRequired,
    props: PropTypes.object,
}

Summary.Bar.propTypes = {
    props: PropTypes.object,
}

Summary.Frame.propTypes = {
    children: PropTypes.node.isRequired,
    props: PropTypes.object,
}

Summary.Heading.propTypes = {
    children: PropTypes.node.isRequired,
    props: PropTypes.object,
}

Summary.Line.propTypes = {
    props: PropTypes.object,
}

Summary.Image.propTypes = {
    props: PropTypes.object,
}

Summary.Techstack.propTypes = {
    children: PropTypes.node.isRequired,
    props: PropTypes.object,
}

Summary.TechstackIcon.propTypes = {
    props: PropTypes.object,
}

Summary.TechstackTooltip.propTypes = {
    props: PropTypes.object,
}

export default Summary