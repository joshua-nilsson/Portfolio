import { Wrapper, Heading, Line, Frame, ProjectGroup, ProjectImage, ProjectBox, ProjectButtonGroup, ProjectButton, ProjectButtonTooltip, TechstackGroup, TechstackBox, TechstackIcon, TechstackTooltip, PreviewGroup, PreviewImage, PreviewBox, PreviewLink, ProjectSlider } from './styles'
import { NoSSR } from '../../components'
import PropTypes from 'prop-types'

const Projects = ({ children, ...props }) => <Wrapper {... props}>{children}</Wrapper>

Projects.Heading = ({ children, ...props }) => <Heading {...props}>{children}</Heading>
Projects.Line = ({ ...props }) => <Line {...props}/>
Projects.Frame = ({ children, ...props }) => <Frame {...props}>{children}</Frame>
Projects.ProjectGroup = ({ children, ...props }) => <ProjectGroup {...props}>{children}</ProjectGroup>
Projects.ProjectImage = ({ ...props }) => <ProjectImage {...props}/>
Projects.ProjectBox = ({ children, ...props }) => <ProjectBox {...props}>{children}</ProjectBox>
Projects.ProjectButtonGroup = ({ children, ...props }) => <ProjectButtonGroup {...props}>{children}</ProjectButtonGroup>
Projects.ProjectButton = ({ children, ...props }) => <ProjectButton {...props}>{children}</ProjectButton>
Projects.ProjectButtonTooltip = ({ ...props }) => <NoSSR><ProjectButtonTooltip {...props}/></NoSSR>
Projects.TechstackGroup = ({ children, ...props }) => <TechstackGroup {...props}>{children}</TechstackGroup>
Projects.TechstackBox = ({ children, ...props }) => <TechstackBox {...props}>{children}</TechstackBox>
Projects.TechstackIcon = ({ ...props }) => <TechstackIcon {...props}/>
Projects.TechstackTooltip = ({ ...props }) => <NoSSR><TechstackTooltip {...props}/></NoSSR>
Projects.PreviewGroup = ({ children, ...props }) => <PreviewGroup {...props}>{children}</PreviewGroup>
Projects.PreviewBox = ({ children, ...props }) => <PreviewBox {...props}>{children}</PreviewBox>
Projects.PreviewLink = ({ children, ...props }) => <PreviewLink {...props}>{children}</PreviewLink>
Projects.PreviewImage = ({ ...props }) => <PreviewImage {...props}/>
Projects.ProjectSlider = ({ children, ...props }) => <ProjectSlider {...props}>{children}</ProjectSlider>

Projects.propTypes = {
    children: PropTypes.node.isRequired,
    props: PropTypes.object,
}

Projects.Heading.propTypes = {
    children: PropTypes.node.isRequired,
    props: PropTypes.object,
}

Projects.Line.propTypes = {
    props: PropTypes.object,
}

Projects.Frame.propTypes = {
    children: PropTypes.node.isRequired,
    props: PropTypes.object,
}

Projects.ProjectGroup.propTypes = {
    children: PropTypes.node.isRequired,
    props: PropTypes.object,
}

Projects.ProjectImage.propTypes = {
    props: PropTypes.object,
}

Projects.ProjectBox.propTypes = {
    children: PropTypes.node.isRequired,
    props: PropTypes.object,
}

Projects.ProjectButtonGroup.propTypes = {
    children: PropTypes.node.isRequired,
    props: PropTypes.object,
}

Projects.ProjectButton.propTypes = {
    children: PropTypes.node.isRequired,
    props: PropTypes.object,
}

Projects.ProjectButtonTooltip.propTypes = {
    props: PropTypes.object,
}

Projects.TechstackGroup.propTypes = {
    children: PropTypes.node.isRequired,
    props: PropTypes.object,
}

Projects.TechstackBox.propTypes = {
    children: PropTypes.node.isRequired,
    props: PropTypes.object,
}

Projects.TechstackIcon.propTypes = {
    props: PropTypes.object,
}

Projects.TechstackTooltip.propTypes = {
    props: PropTypes.object,
}

Projects.PreviewGroup.propTypes = {
    children: PropTypes.node.isRequired,
    props: PropTypes.object,
}

Projects.PreviewBox.propTypes = {
    children: PropTypes.node.isRequired,
    props: PropTypes.object,
}

Projects.PreviewLink.propTypes = {
    children: PropTypes.node.isRequired,
    props: PropTypes.object,
}

Projects.PreviewImage.propTypes = {
    props: PropTypes.object,
}

Projects.ProjectSlider.propTypes = {
    children: PropTypes.node.isRequired,
    props: PropTypes.object,
}

export default Projects