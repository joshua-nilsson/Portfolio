import { Wrapper, Menu, List, ListItem, ListItemLink, ListItemIcon, ListItemText, Disk, Link, Image } from './styles'
import { useState, useEffect, forwardRef } from 'react'
import PropTypes from 'prop-types'

const Navbar = ({ children, ...props }) => <Wrapper id="navbar" {...props}>{children}</Wrapper>

Navbar.Menu = ({ children, ...props }) => <Menu {...props}>{children}</Menu>
Navbar.List = ({ children, ...props }) => {
    const getIsMobile = () => window.innerWidth <= 1024;
    const [isMobile, setIsMobile] = useState(getIsMobile)

    useEffect(() => {
        const handleResize = () => setIsMobile(getIsMobile)
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [isMobile])
    
    return <List
            onChange={getIsMobile()}
            items={ [isMobile ? 'summary' : 'me', 'projects', 'exp', 'tech', 'contact'] }
            currentClassName="active"
            offset={-50}
            {...props}
            >
                {children}
            </List>
}
Navbar.ListItem = forwardRef(({ href, children, ...props }, ref) => <ListItem href={href} ref={ref} {...props}>{children}</ListItem>)
Navbar.ListItemLink = forwardRef(({ href, children, ...props }, ref) => <ListItemLink href={href} ref={ref} {...props}>{children}</ListItemLink>)
Navbar.ListItemIcon = ({ children, ...props }) => <ListItemIcon {...props}>{children}</ListItemIcon>
Navbar.ListItemText = ({ children, ...props }) => <ListItemText {...props}>{children}</ListItemText>
Navbar.Disk = ({ ...props }) => <Disk {...props}/>
Navbar.Link = ({ children, ...props }) => <Link {...props}>{children}</Link>
Navbar.Image = ({ ...props }) => <Image {...props}/>

Navbar.propTypes = {
    children: PropTypes.node.isRequired,
    props: PropTypes.object,
}

Navbar.Menu.propTypes = {
    children: PropTypes.node.isRequired,
    props: PropTypes.object,
}

Navbar.List.propTypes = {
    children: PropTypes.node.isRequired,
    props: PropTypes.object,
}

Navbar.ListItem.propTypes = {
    children: PropTypes.node.isRequired,
    props: PropTypes.object,
}

Navbar.ListItemLink.propTypes = {
    children: PropTypes.node.isRequired,
    props: PropTypes.object,
}

Navbar.ListItemIcon.propTypes = {
    children: PropTypes.node.isRequired,
    props: PropTypes.object,
}

Navbar.ListItemText.propTypes = {
    children: PropTypes.node.isRequired,
    props: PropTypes.object,
}

Navbar.Disk.propTypes = {
    props: PropTypes.object,
}

Navbar.Link.propTypes = {
    children: PropTypes.node.isRequired,
    props: PropTypes.object,
}

Navbar.Image.propTypes = {
    props: PropTypes.object,
}

export default Navbar