import styled from "styled-components"
import tw from "twin.macro"
import { motion } from "framer-motion"

export const Group = styled(motion.div)`
    ${tw`
        flex flex-col justify-center items-center
        w-16 h-16 xs:(w-28 h-28) sm:(w-36 h-36) lg:(w-52 h-52) 2xl:(w-60 h-60)
    `}

    &:hover div {
        ${tw`
        p-3
        border-md border-primary outline-[6px solid #7d71e0] outline-offset[-3px]
        `}
    }
    &:hover small { ${tw`text-primary`} }

    // SAFARI HOTFIX
    @supports (background: -webkit-named-image(i)) { &:hover div { ${tw`border-sm border-primary outline-[0]`} }
`;

export const Circle = styled.div`
    ${tw`
    flex justify-center items-center
    w-16 h-16
    p-2.5
    bg-opacity-20 outline[3px solid #E8F0FE] outline-offset[0] rounded-full shadow-theme
    antialiased
    transition-all ease-in-out duration-100
    md:(w-20 h-20
        p-4)
    `}

    // SAFARI HOTFIX
    @supports (background: -webkit-named-image(i)) { & { ${tw`border-sm border-grayLightAlt outline-[0]`} } }
`;

export const Image = tw.img`
    w-10 h-10
    object-contain
    select-none pointer-events-none
    md:(w-12 h-12)
`;

export const Title = tw.small`
    mt-4
    text-xs text-center font-medium
    sm:text-sm
    md:mt-6
    lg:text-base
`;