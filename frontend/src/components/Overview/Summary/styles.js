import { tooltipTheme } from "../../../styles/globalThemeStyles"
import styled from "styled-components"
import tw from "twin.macro"
import { motion } from "framer-motion"
import ReactTooltip from 'react-tooltip'

export const Wrapper = styled(motion.section)`
    ${tw`
    flex flex-col items-center
    w-full
    mb-12 space-y-8
    opacity-0
    lg:(flex-row
        space-x-8 space-y-0)
    xl:(space-x-9) 2xl:(space-x-10)
    `}

    // SAFARI HOTFIX
    @supports (background: -webkit-named-image(i)) {
      @media (min-width: 1280px) { & { ${tw`mt-14! -mb-0!`} }
    }
`;

export const Card = styled.div`
    ${tw`
    flex flex-col
    w-full
    bg-white rounded-xl shadow-theme
    `}

    :hover hr { ${tw`w-16`} }

    :nth-of-type(1) h2 span { ${tw`text-accentOrange`} }
    :nth-of-type(2) h2 span { ${tw`text-accentPink`} }
    :nth-of-type(3) h2 span { ${tw`text-accentBlue`} }

    :nth-of-type(1):hover > div:first-of-type,
    :nth-of-type(1) > div:last-of-type,
    :nth-of-type(1) hr { ${tw`bg-accentOrange`} }

    :nth-of-type(2):hover > div:first-of-type,
    :nth-of-type(2) > div:last-of-type,
    :nth-of-type(2) hr { ${tw`bg-accentPink`} }
    
    :nth-of-type(3):hover > div:first-of-type,
    :nth-of-type(3) > div:last-of-type,
    :nth-of-type(3) hr { ${tw`bg-accentBlue`} }
`;

export const Bar = tw.div`
    w-full h-[10px]
    bg-grayLight rounded-t-[1rem] rounded-b-none
    transition-all duration-300
    last:(rounded-t-none rounded-b-[1rem])
`;

export const Frame = tw.div`p-6`;

export const Heading = styled.h2`
    ${tw`text-sm font-extrabold tracking-wide uppercase text-grayAlt xs:text-base lg:text-sm xl:text-base`}
    span { ${tw`text-xs tracking-wider uppercase`}}
`;

export const Line = tw.hr`
    w-8 h-[5px]
    mt-2
    border-none rounded-3xl
    transition-all duration-100
`;

export const Image = tw.img`
    w-40 h-40
    select-none pointer-events-none
    mx-auto my-8 sm:my-12 lg:my-10
`;

export const Techstack = tw.div`flex justify-between items-center select-none`;

export const TechstackIcon = tw.img`
    max-w-[15%] h-9
    object-contain antialiased
    select-none
    msm:(max-w-[20%] h-12) sm:h-14 lg:(max-w-[15%] h-9) xl:h-10 2xl:h-[3.25rem]
`;

export const TechstackTooltip = styled(ReactTooltip)`${tooltipTheme}`;