import { CircleTheme, footerOffsetTheme } from "../../styles/globalThemeStyles"
import styled from "styled-components"
import tw from "twin.macro"
import { motion } from "framer-motion"

export const Container = tw(motion.footer)`
  flex flex-col justify-center items-center
  w-full
  mt-16
  border-b-[1rem] border-b-tertiary
  2xl:-mt-8
`;

export const BackgroundImage = styled.img`
    ${footerOffsetTheme}
    ${tw`select-none pointer-events-none`}
`;

export const CircleGroup = styled.div`
    ${footerOffsetTheme}
    ${tw`w-full`}
`;

export const Circle = styled(CircleTheme)`
    :nth-child(2) { ${tw`lg:(right-[55%] bottom-[70%] w-[2%]) xl:(right-[55%] bottom-[70%] w-[2%])`} }
    :nth-child(3) { ${tw`lg:(right-[30%] bottom-[55%] w-[4%]) xl:(right-[32%] bottom-[50%] w-[4%])`} }
    :nth-child(4) { ${tw`lg:(right-[42%] bottom-[30%] w-[7%]) xl:(right-[42%] bottom-[30%] w-[8%])`} }
`;

export const Expander = styled.section`
    ${footerOffsetTheme}
    ${tw`
    w-full
    bg-primary
    `}
`;

export const Box = styled.div`
    ${tw`
    flex flex-col items-center
    mx-6 space-y-2
    text-xs text-white xs:text-sm
    sm:(mx-10
        text-base)
    md:mt-32
    `}

    & p:first-of-type { ${tw`leading-6 sm:leading-7 md:leading-[inherit]`} }
`;

export const Info = styled.p`
    ${tw`text-center`}
    & br { ${tw`md:hidden`} }
`;

export const Link = tw.a`
    flex items-center
    cursor-pointer
    transition-all duration-200
    hover:opacity-80
`;

export const Image = tw.img`
    w-5 h-5
    object-contain
    select-none pointer-events-none
`;