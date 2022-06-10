import { HeadingTheme, LineTheme, ButtonTheme, buttonPrimaryTheme, sectionHoverLineTheme, buttonSecondaryTheme, CircleTheme } from "../../../styles/globalThemeStyles"
import styled from "styled-components"
import tw from "twin.macro"
import { motion } from "framer-motion"
import ReactTooltip from 'react-tooltip'


export const Wrapper = styled(motion.div)`
    ${tw`opacity-0`}
    :hover > hr { ${sectionHoverLineTheme} }
`;

export const CircleGroup = styled(motion.div)`
    ${tw`
    relative
    pt-12 pb-36
    opacity-0
    sm:(pt-32 pb-56)
    md:(flex
        pt-40 pb-64)
    lg:(pt-72 pb-96)
    `}

    & > img:nth-child(1) { ${tw`right-[30%] bottom-[80%] w-[7.5%]`} }
    & > img:nth-child(2) { ${tw`right-[85%] bottom-[60%] w-[12.5%]`} }
    & > img:nth-child(3) { ${tw`right-[5%] bottom-[0%] w-[25%] xl:right[2.5%]`} }
`;

export const Circle = tw(CircleTheme)`
    hidden
    opacity-[15%]
    md:block
`;

export const PreviewGroup = tw(motion.div)`
    flex flex-col
    w-full
    space-y-10
    opacity-0
    z-50
    msm:(flex-row justify-center items-center
        space-x-16 space-y-0)
`;

export const PreviewBox = styled.div`
    ${tw`flex flex-col justify-center items-center`}
    & > div { ${tw`left-0`}}
`;

export const PreviewButton = styled(ButtonTheme)`
    ${props => props.variation === "primary" ? buttonPrimaryTheme : buttonSecondaryTheme};

    ${tw`
    flex justify-center items-center
    relative
    w-24 h-24
    bg-tertiary border-lg border-primary outline[9px solid #7d71e0] outline-offset[-3px] rounded-full box-shadow[0px 0px 75px 10px rgb(93 80 191 / 25%)] hover:(bg-quaternary border-lg border-primary)
    select-none
    transition-all ease-in-out duration-300
    sm:(w-28 h-28) md:(w-32 h-32)
    `}

    &:hover + small { ${tw`text-primary`} }
    
    // SAFARI HOTFIX
    @supports (background: -webkit-named-image(i)) { & { ${tw`outline-[0]`} }
`;

export const PreviewIcon = tw.img`
    w-14 h-14
    pointer-events-none
`;

export const PreviewText = tw.small`
    w-full
    mt-4
    text-base text-center font-medium uppercase text-primary sm:text-base
    md:mt-6
    lg:hidden
`;

export const PreviewTooltip = styled(ReactTooltip)`
    ${tw`
    hidden!
    w-24 h-24
    -mt-6! space-y-2
    border-lg! border-primary! outline[9px solid #7d71e0] outline-offset[-3px] rounded-full!
    text-xs! tracking-wider uppercase!
    opacity-100!
    transition-all! duration-300!
    before:(bottom[-22px]
        border-t-secondary)!
    after:hidden
    msm:(flex flex-col justify-center items-center)!
    sm:(w-28 h-28
        text-base!)
    md:(w-32 h-32
        p-8!)
    `}
    
    small { ${tw`hidden lg:block`} }

    // SAFARI HOTFIX
    @supports (background: -webkit-named-image(i)) {
        & {
            ${tw`
            outline-[0]
            before:(bottom-[-16px]
                border-t-primary)!
            `}
        }
        
        @media (min-width: 1280px) { & > img, & > small { ${tw`-mt-3!`} } }
    }
`;

export const Heading = styled(HeadingTheme)``;

export const Line = tw(LineTheme)``;

export const Frame = tw.div`
    flex flex-col justify-center items-center
    my-12 space-y-8
    lg:(flex-row space-x-8)
    2xl:my-24
`;

export const Group = tw.div`
    flex flex-col
    w-full
    space-y-8
`;