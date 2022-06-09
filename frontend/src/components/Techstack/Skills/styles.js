import { ButtonGroupTheme, ButtonTheme, buttonPrimaryTheme, buttonSecondaryTheme, sectionHoverLineTheme } from "../../../styles/globalThemeStyles"
import styled from "styled-components"
import tw from "twin.macro"
import { motion } from 'framer-motion'

export const Wrapper = styled.section`
    ${tw`my-12 lg:my-24 2xl:my-36`}
    &:hover section > hr { ${sectionHoverLineTheme} }
`;

export const ButtonGroup = tw(ButtonGroupTheme)`
    max-w-[272px]
    mx-auto my-12
    xs:max-w-[302px] msm:max-w-[377px] sm:max-w-[480px]
`;

export const Button = styled(ButtonTheme)`
    ${tw`
    w-full
    px-5
    text-center
    `}
    ${props => props.isActive ? buttonPrimaryTheme : buttonSecondaryTheme}
`;

export const Frame = tw(motion.section)`
    grid justify-items-center items-start
    w-full
    mt-16 grid-cols-3 gap-x-4 gap-y-24 xs:(gap-y-8) sm:(grid-cols-4 gap-y-6) md:gap-y-16 lg:(mt-12 grid-cols-5 gap-y-0) 2xl:(grid-cols-6)
`;