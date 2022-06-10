import { ButtonGroupTheme, ButtonTheme, buttonPrimaryTheme, buttonSecondaryTheme, tooltipTheme, CircleTheme } from '../../../styles/globalThemeStyles'
import styled from "styled-components"
import tw from "twin.macro"
import { motion } from 'framer-motion'
import ReactTooltip from 'react-tooltip'

export const Wrapper = tw.section`
    flex
    w-full
    mt-5 mb-24 sm:my-10 md:my-14 lg:(mt-16 mb-60)
`;

export const Group = tw.div`
    flex flex-col items-center
    w-full
    lg:(w-3/4
        items-baseline)
    xl:w-1/2 2xl:w-1/3
`;

export const CircleGroup = tw.div`
    hidden
    relative
    w-2/3
    lg:(flex items-stretch)
`;

export const Circle = styled(CircleTheme)`
    :nth-child(1) { ${tw`lg:(right-[17.5%] bottom-[100%] w-[5%]) xl:(right-[30%] bottom-[60%] w-[5%]) 2xl:(right-[40%] bottom-[75%] w-[5%]) 3xl:(right-[30%] bottom-[80%] w-[5%])`} }
    :nth-child(2) { ${tw`lg:(right-[32.5%] bottom-[82.5%] w-[15%]) xl:(right-[30%] bottom-[30%] w-[15%]) 2xl:(right-[35%] bottom-[40%] w-[15%]) 3xl:(right-[25%] bottom-[45%] w-[15%])`} }
    :nth-child(3) { ${tw`lg:(right-[70%] bottom-[87.5%] w-[20%]) xl:(right-[65%] bottom-[50%] w-[20%]) 2xl:(right-[65%] bottom-[55%] w-[20%]) 3xl:(right-[55%] bottom-[60%] w-[20%])`} }
`;


export const Howdy = styled.pre`
    ${tw`text-base text-left font-black text-primary`}
    & span span { ${tw`text-primary`} }
`;

export const HeyThere = styled.h1`
    ${tw`
    relative
    text-4xl font-black leading-tight text-black
    md:text-6xl
    `}
    & span { ${tw`
        text-transparent uppercase
        bg-gradient background-clip[text] -webkit-background-clip[text]
    `} }
`;

export const Handwave = tw(motion.img)`
    inline
    absolute right-[-20px]
    w-10 h-10
    transform-origin[70% 70%]
    select-none pointer-events-none
    md:(top-[-25px] right-[-60px]
        w-20 h-20)
`;

export const Image = styled.img`
    ${tw`
    w-3/4
    mt-5
    rounded-full filter[drop-shadow(0 3px 3px rgba(34,34,34,.5))]
    object-contain
    select-none pointer-events-none
    sm:(max-w-md
        mt-10)
    md:(w-3/4) lg:w-[85%]    
    `}
`;

export const Techstack = tw.div`
    flex justify-between
    w-full
    mt-8
    xs:w-[90%] sm:w-4/5
`;

export const TechstackGroup = tw.div`
    flex flex-col justify-center items-center
    cursor-default
`;

export const TechstackIcon = styled.img`
    ${tw`
    w-12 h-12
    mb-5 p-2
    bg-white border-msm border-grayLightAlt rounded-full shadow-theme
    antialiased
    select-none
    transition-all ease-in-out duration-150
    hover:(mb-2 rounded-full)
    msm:(w-14 h-14) sm:(w-16 h-16)
    `}

    ${props => `&:hover { border-color: ${props.variation}; }`}
`;

export const TechstackLetter = tw.div`text-xl font-black sm:text-2xl`;

export const TechstackTooltip = styled(ReactTooltip)`${tooltipTheme}`;

export const ButtonGroup = tw(ButtonGroupTheme)`w-full lg:w-[80%]`;

export const Button = styled(ButtonTheme)`
    ${props => props.variation === "primary" ? buttonPrimaryTheme : buttonSecondaryTheme};
    ${tw`
    flex justify-center items-center
    w-full msm:w-1/2 sm:w-2/5 md:w-1/3 lg:w-full
    `}
    & svg {
        ${tw`
        hidden
        msm:(inline ml-2)
        `}
    }
`;