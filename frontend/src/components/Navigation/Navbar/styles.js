import styled from "styled-components"
import tw from "twin.macro"
import { motion } from 'framer-motion'
import Scrollspy from 'react-scrollspy'

export const Wrapper = tw(motion.aside)`
    flex justify-center items-center
    sticky bottom-5
    mt-16 space-x-8
    z-50
    sm:bottom-10
    lg:ml-28
`;

export const Menu = tw.nav`
    flex justify-center items-center
    max-w-[272px] h-[5.5rem]
    -mt-8 mb-0! px-2.5
    bg-primary rounded-md
    xs:(max-w-[302px]
        px-4)
    msm:(max-w-[377px]
        px-5)
    sm:(max-w-[480px] h-[5.5rem]
        px-16)
`;

export const List = styled(Scrollspy)`
    ${tw`
    flex justify-between items-center
    relative
    w-[22rem]
    `}

    & li:last-of-type a svg,
    & li:last-of-type:hover a svg { ${tw`fill-primary`}}

    & li.active ~ li:hover a svg { ${tw`fill-white`} }
`;

export const ListItem = styled.li`
    ${tw`
    relative
    w-12 h-12
    list-none
    z-10
    sm:(w-16 h-16)
    `}

    svg,
    &.active ~ :nth-child(5) svg {
        ${tw`
        block
        relative        
        fill-secondary
        text-center font-size[1.5rem] leading-[4.5rem] text-black
        translate-y-[12px]
        transition-all duration-500
        sm:translate-y-[18px]
        `}
    }

    :hover a svg { ${tw`fill-white`} }
    &.active a svg { ${tw`fill-primary!`} }
    &.active a span:last-of-type { ${tw`hidden`} }
    
    :nth-child(1).active ~ div {${tw`translate-x-[calc(51.25px * 0)] xs:translate-x-[calc(55.5px * 0)] msm:translate-x-[calc(72px * 0)]`} }
    :nth-child(2).active ~ div {${tw`translate-x-[calc(51.25px * 1)] xs:translate-x-[calc(55.5px * 1)] msm:translate-x-[calc(72px * 1)]`} }
    :nth-child(3).active ~ div {${tw`translate-x-[calc(51.25px * 2)] xs:translate-x-[calc(55.5px * 2)] msm:translate-x-[calc(72px * 2)]`} }
    :nth-child(4).active ~ div {${tw`translate-x-[calc(51.25px * 3)] xs:translate-x-[calc(55.5px * 3)] msm:translate-x-[calc(72px * 3)]`} }
    :nth-child(5).active ~ div,
    :nth-child(5) ~ div { ${tw`translate-x-[calc(51.25px * 4)] xs:translate-x-[calc(55.5px * 4)] msm:translate-x-[calc(72.25px * 4)]`} }

    @media only screen and (min-width: 640px) {
        &.active a svg,
        :nth-child(5) a svg { ${tw`translate-y-[-14px]`} }
    
        &.active a span:last-of-type,
        :nth-child(5) a span:last-of-type,
        &.active ~ :nth-child(5) a span:last-of-type {
            ${tw`
            block
            text-white
            opacity-100
            translate-y-[35px]
            `}
        }

        & a span:last-of-type,
        &.active ~ :nth-child(5) a span:last-of-type {
            ${tw`
            absolute
            mt-1.5
            text-xs font-normal tracking-wider text-primary
            opacity-0
            translate-y-5
            transition-all duration-500 delay-[450ms]
            sm:(mt-2.5 text-base)
            `}
        }
    }

    // SAFARI HOTFIX
    @supports (background: -webkit-named-image(i)) {
        &.active a svg,
        :nth-child(5) a svg { ${tw`sm:translate-y-[-13px]!`} }
        
        :hover a svg { ${tw`fill-white!`} }
        &.active a svg, &.active:hover a svg { ${tw`fill-secondary!`} }
        & svg, &:active svg { ${tw`transition-all duration-500 delay-500`}

        :nth-child(4).active ~ div {${tw`msm:translate-x-[calc(72.25px * 3)]! sm:translate-x-[calc(72px * 3)]!`} }
        :nth-child(5).active ~ div {${tw`sm:translate-x-[calc(72px * 4)]!`} }
    }
`;

export const ListItemLink = tw.a`
    flex flex-col justify-center items-center
    relative
    w-full
    text-center font-medium
`;

export const ListItemIcon = styled.span`& svg { ${tw`transition-all duration-500 delay-[450ms]`} }`;

export const ListItemText = tw.span`hidden sm:block`;

export const Disk = styled.div`
    ${tw`
    absolute
    w-12 h-12
    bg-white border-sm border-primary outline[6px solid #7d71e0] outline-offset[-1px] rounded-full
    transition-all duration-500 delay-[450ms]
    sm:(top-[-50%]
        w-16 h-16
        border-md border-primary outline[6px solid #7d71e0] outline-offset[-3px])
    `}

    // SAFARI HOTFIX
    @supports (background: -webkit-named-image(i)) { & { ${tw`border-md border-secondary outline-[0]`} }
`;

export const Link = styled.a`
    ${tw`
    hidden
    relative
    -mt-8
    lg:flex
    `}

    :hover img { ${tw`bg-quaternary`} }

    // SAFARI HOTFIX
    @supports (background: -webkit-named-image(i)) { & { ${tw`outline-[0]`} }
`;

export const Image = styled.img`
    ${tw`
    w-20 h-20
    bg-tertiary
    border-[7px] border-primary outline[6px solid #7d71e0] outline-offset[-3px] rounded-full
    select-none pointer-events-none
    transition-all ease-in-out duration-300
    `}

    ${props => props.isActive && tw`bg-quaternary`}

    // SAFARI HOTFIX - OUTLINE BORDER RADIUS "HACK" WITH PSEUDO-ELEMENT
    @supports (background: -webkit-named-image(i)) { & {${tw`outline-[0]`} } }
`;