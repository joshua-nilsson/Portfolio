import { CircleTheme, HeadingTheme, LineTheme, sectionHoverLineTheme } from "../../styles/globalThemeStyles"
import styled from "styled-components"
import tw from "twin.macro"
import { motion } from "framer-motion"

export const Wrapper = styled(motion.div)`
    ${tw`
    flex flex-col
    w-full
    opacity-0
    `}
    :hover > hr { ${sectionHoverLineTheme} }
`;

export const CircleGroup = styled(motion.div)`
    ${tw`
    hidden
    relative
    py-20
    opacity-0
    md:flex
    lg:py-40
    `}

    // FIREFOX HOTFIX
    @supports (-moz-appearance: none) { ${tw`lg:py-24 xl:py-28 2xl:py-40`} }
`;

export const Circle = styled(CircleTheme)`
    ${tw`
    block
    opacity-[15%]
    `}

    :nth-child(1) { ${tw`right-[20%] bottom-[10%] w-[5%]`} }
    :nth-child(2) { ${tw`right-[0%] bottom-[40%] w-[7.5%]`} }
    :nth-child(3) { ${tw`right-[30%] bottom-[35%] w-[12.5%]`} }
`;

export const Heading = tw(HeadingTheme)``;

export const Line = tw(LineTheme)``;

export const Frame = styled.div`
    ${tw`
    flex flex-col
    mt-12 mb-16 space-y-8
    lg:(
        grid
        grid-cols-2
        grid-rows-4
        grid-flow-row
        grid-template-rows[auto]
        gap-8
        grid-template-areas[
        "Wondrium Modere"
		"Online-Image Village-Book-Builders"
        "BYU-Idaho Owasso-High-School"
        "Eagle-Scout Missionary"]
        space-y-0)
    xl:gap-16
    `}

	.Wondrium { grid-area: Wondrium; }
    .Modere { grid-area: Modere; }
    .Online-Image { grid-area: Online-Image; }
    .Village-Book-Builders { grid-area: Village-Book-Builders; }
    .BYU-Idaho { grid-area: BYU-Idaho; }
    .Owasso-High-School { grid-area: Owasso-High-School; }
    .Eagle-Scout { grid-area: Eagle-Scout; }
    .Missionary { grid-area: Missionary; } 
`;

export const Group = tw.div`mt-5`;