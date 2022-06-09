import styled from "styled-components"
import tw from "twin.macro"
import Scrollspy from 'react-scrollspy'

export const Wrapper = styled.section`
    & > a,
    & nav,
    & > div:last-of-type { ${tw`hidden md:flex`}}

    ${tw`
        justify-between items-center
        w-full
        md:(flex
            max-w-[700px]
            mx-auto my-14)
        lg:(max-w-[950px]
            my-16)
        xl:max-w-[1180px] 2xl:max-w-[1440px]
    `}

    ${props => props.theme.navigationType === "footer" && tw`
        items-start
        my-5 sm:my-10
    `}
`;

export const IconLink = styled.a`
    ${tw`
        flex
        w-10 h-10
        cursor-pointer
    `};

    & svg stop { ${tw`transition-all duration-300`} }
    & svg stop:nth-child(1) { ${tw`stop-color[#F89923]`} }
    & svg stop:nth-child(2) { ${tw`stop-color[#FF626b]`} }
    &:hover #headerLogo stop:nth-child(1) { ${tw`stop-color[#9680FF]`} }
    &:hover #headerLogo stop:nth-child(2) { ${tw`stop-color[#5D50BF]`} }
    &:hover #footerLogo stop:nth-child(1),
    &:hover #footerLogo stop:nth-child(2) { ${tw`stop-color[#F7F9FC]`} }
    &:hover #footerLogo path { ${tw`fill-primary`} }
`;

export const Icon = styled.img``;
export const NavigationGroup = tw.div``;

export const Menu = tw.nav`
    flex items-center
    h-10
`;

export const List = tw(Scrollspy)`
    flex
    cursor-default
`;

export const ListItem = styled.li`
    ${tw`
    px-4
    2xl:px-8
    `}

    &.active a { ${tw`font-bold text-primary`} }
    ${props => props.theme.navigationType === "footer" && `&.active a { color: #F7F9FC; }` }
`;

export const ListItemLink = styled.a`
    ${tw`
        text-sm uppercase
        cursor-pointer
        transition-all duration-300
        hover:(text-primary
            translate-y-full)
        lg:text-base
    `}

    ${props => props.isActive && tw`font-semibold text-primary`};
    ${props => props.theme.navigationType === "footer" && tw`
        text-white
        hover:(text-white
            opacity-80)
    `};
`;

export const SocialGroup = tw.div`flex justify-around`;

export const SocialLink = styled(IconLink)`
    ${tw`first:mr-6`}

    &:last-of-type svg {${tw`fill-linkedIn`} }
    & svg, & path { ${tw`w-10 h-10`} }
    & svg {
        ${tw`
        transition-all ease-linear duration-200
        hover:fill-primary`}
    }

    ${props => props.theme.navigationType === "footer" && `
        & svg, &:last-of-type svg, & svg:hover { fill: #F7F9FC; } }
        & svg:hover { opacity: 0.8 }
    `}
`;