import styled from "styled-components"
import tw from "twin.macro"
import { AnimatePresence, motion } from "framer-motion"
import PulseLoader from "react-spinners/PulseLoader"

export const Screen = styled(AnimatePresence)``;

export const Frame = styled(motion.div)`
    ${tw`
    flex justify-center items-center
    relative
    w-screen h-screen
    space-x-10
    bg-white
    `}

    span { ${tw`space-x-4 msm:space-x-5 md:space-x-6 lg:space-x-7 xl:space-x-8 2xl:space-x-9`} }
    span span {
        ${tw`
        w-8 h-8
        bg-purpleCircle! bg-cover!
        msm:(w-10 h-10) md:(w-12 h-12) lg:(w-14 h-14) 2xl:(w-16 h-16) 3xl:(w-20 h-20)
        `}
    }
`;

export const Loader = tw(PulseLoader)``;