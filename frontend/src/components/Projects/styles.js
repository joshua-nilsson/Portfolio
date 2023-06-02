import tw from "twin.macro"
import styled from "styled-components"
import { motion } from "framer-motion"
import ReactTooltip from 'react-tooltip'
import { HeadingTheme, LineTheme, ButtonGroupTheme, ButtonTheme, buttonPrimaryTheme, buttonSecondaryTheme, SliderTheme, BubbleLinkTheme, sectionHoverLineTheme, tooltipTheme } from '../../styles/globalThemeStyles'

export const Wrapper = styled.div`
    ${tw`
    flex flex-col
    w-full
    mt-12 sm:my-10 md:mt-48
    `}
    :hover > hr { ${sectionHoverLineTheme} }
`;

export const Heading = tw(HeadingTheme)``;
export const Line = tw(LineTheme)``;

export const Frame = tw.div`
    flex flex-col justify-center items-center
    w-full
    my-8 p-20
    bg-storyForge bg-cover bg-no-repeat background-position[10%] rounded-xl
    lg:items-start
    xl:(flex-row justify-between items-center
        space-x-40)
    2xl:space-x-60
`;

export const ProjectGroup = tw(motion.div)`
    flex flex-col items-center
    lg:items-start xl:items-end
    2xl:w-full
`;

export const ProjectImage = tw.img`
    flex justify-end
    w-3/4
    select-none pointer-events-none
    xl:w-full
`;

export const ProjectBox = tw.div`flex flex-col items-center lg:items-end`;

export const ProjectButtonGroup = tw(ButtonGroupTheme)`lg:justify-start xl:justify-end`;

export const ProjectButton = styled(ButtonTheme)`
    ${props => props.variation === "primary" ? buttonPrimaryTheme : buttonSecondaryTheme};
    ${tw`
    flex justify-center items-center
    w-28
    cursor-not-allowed
    xs:w-32 msm:w-36 sm:w-40 lg:w-48
    // last:(bg-whiteAlt border-gray text-gray hover:(bg-whiteAlt border-gray text-gray))
    `}

    & svg {
        ${tw`
        hidden
        mr-2
        msm:(block
            w-6 h-6)
        `}
    }

    div {
        ${tw`
        flex flex-col justify-center items-center
        left-0
        bg-quaternary border-sm border-tertiary
        text-[.7rem] font-normal
        opacity-100!
        cursor-default
        transition-all duration-300
        after:(bottom-[-10%]
			   bg-tertiary!
               border-t-tertiary)!
        xs:text-xs sm:text-sm
        `}

        a {
            ${tw`
            flex justify-center items-center
            w-full
            mt-2! p-2
            bg-primary border-sm! border-tertiary! rounded-md
            font-normal
            transition-colors duration-300
            hover:(bg-tertiary border-sm border-primary) active:(bg-quaternary border-sm border-tertiary)
            `}
        }

        img { ${tw`h-5`} }

        // ONCE FEATURED PROJECT SHELL COMPLETE
        // a {
        //     ${tw`
            // w-auto
            // mt-2! px-2 py-1
            // bg-primary border-sm border-tertiary! rounded-md
            // font-normal
            // transition-colors duration-300
            // hover:(bg-tertiary border-sm border-primary) active:(bg-quaternary border-sm border-tertiary)
        //     `}
        // }
    }

`;

export const ProjectButtonTooltip = styled(ReactTooltip)`${tooltipTheme}
    ${tw`-mt-3! msm:py-2! sm:py-3!`}
`;

export const TechstackFrame = tw.div`
    flex justify-end
    w-full
`;

export const TechstackGroup = tw.div`
    flex justify-between
    w-full
    mt-6
    xs:justify-around
    sm:(justify-center
        space-x-4)
    lg:(justify-end
        space-x-2)
`;

export const TechstackBox = tw(motion.div)``;

export const TechstackIcon = styled.img`
    ${props => `&:hover { border-color: ${props.variation}; }`}

    ${tw`
    w-8 h-8
    p-1
    bg-white border-msm border-grayLightAlt rounded-full shadow-theme
    object-contain antialiased
    select-none
    transition-all duration-150
    `}
`;

export const TechstackTooltip = styled(ReactTooltip)`${tooltipTheme}`;

export const PreviewGroup = styled(motion.div)`
    ${tw`
    hidden justify-end
    w-full
    xl:(flex
        h-[479px]
        bg-storyForgePreview bg-contain bg-no-repeat)
    2xl:h-[546px]
    `}    

    &:hover > div { ${tw`hover:(bg-white bg-opacity-[7.5%] rounded-[5px])`}}
    &:hover a, &:hover img, &:hover svg {${tw`visible`}}
    &:hover a {${tw`bg-primary border-tertiary`}}
`;



export const PreviewBox = tw.div`
    flex justify-center items-center
    w-full
    space-x-20
    cursor-default
    transition-all ease-in-out duration-300
`;

export const PreviewLink = styled(BubbleLinkTheme)`
    ${tw`
    p-6
    duration-300!
    hover:p-7
    `}
    &:hover img { ${tw`w-14! h-14!`} }
`;

export const PreviewImage = tw.img`
    w-11! h-11!
    object-contain
    select-none pointer-events-none
    duration-300!
`;

export const ProjectSlider = tw(SliderTheme)`opacity-0`;