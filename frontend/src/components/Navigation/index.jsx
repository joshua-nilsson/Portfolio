import { Wrapper, IconLink, Icon, NavigationGroup, Menu, List, ListItem, ListItemLink, SocialGroup, SocialLink } from './styles'
import { forwardRef } from 'react'
import PropTypes from 'prop-types'

const Navigation = ({ children, ...props }) => <Wrapper as={props.area === "header" ? "section" : "div"} {...props}>{children}</Wrapper>;

Navigation.IconLink = forwardRef(({ href, ...props }, ref) => <IconLink href={href} ref={ref} {...props}/>)
Navigation.Icon = ({ ...props }) => <Icon {...props}/>
Navigation.NavigationGroup = ({ children, ...props }) => <NavigationGroup {...props}>{children}</NavigationGroup>
Navigation.Menu = ({ children, ...props }) => <Menu {...props}>{children}</Menu>
Navigation.List = ({ children, ...props }) => <List items={ ['welcome', 'projects', 'exp', 'tech', 'contact'] } currentClassName="active" offset={-50} {...props}>{children}</List>
Navigation.ListItem = ({ children, ...props }) => <ListItem {...props}>{children}</ListItem>
Navigation.ListItemLink = forwardRef(({ href, children, ...props }, ref) => <ListItemLink href={href} ref={ref} {...props}>{children}</ListItemLink>)
Navigation.SocialGroup = ({ children, ...props }) => <SocialGroup {...props}>{children}</SocialGroup>
Navigation.SocialLink = ({ children, ...props }) => <SocialLink {...props}>{children}</SocialLink>

Navigation.propTypes = {
    children: PropTypes.node.isRequired,
    props: PropTypes.object,
}

Navigation.IconLink.propTypes = {
    props: PropTypes.object,
}

Navigation.Icon.propTypes = {
    props: PropTypes.object,
}

Navigation.NavigationGroup.propTypes = {
    children: PropTypes.node.isRequired,
    props: PropTypes.object,
}

Navigation.Menu.propTypes = {
    children: PropTypes.node.isRequired,
    props: PropTypes.object,
}

Navigation.List.propTypes = {
    children: PropTypes.node.isRequired,
    props: PropTypes.object,
}

Navigation.ListItem.propTypes = {
    children: PropTypes.node.isRequired,
    props: PropTypes.object,
}

Navigation.ListItemLink.propTypes = {
    children: PropTypes.node.isRequired,
    props: PropTypes.object,
}

Navigation.SocialGroup.propTypes = {
    children: PropTypes.node.isRequired,
    props: PropTypes.object,
}

Navigation.SocialLink.propTypes = {
    children: PropTypes.node.isRequired,
    props: PropTypes.object,
}

export default Navigation