import { CardGroupTheme, CardBoxTheme } from "../../../styles/globalThemeStyles"
import styled from "styled-components"
import tw from "twin.macro"

export const Card = styled.div`
    ${tw`
    px-12 py-8
    bg-whiteExact border-sm border-transparent rounded-2xl shadow-theme
    transition-all duration-200
    hover:border-primary
    lg:(px-6 py-8) 2xl:(px-12 py-16)
    `}

    // RESPONSIVE IMAGE ADJUSTMENTS
    &:nth-of-type(1) img { ${tw`w-[275px] 2xl:w-[300px]`} }
    &:nth-of-type(2) img { ${tw`w-[250px] lg:w-[225px] 2xl:w-[250px]`} }
    &:nth-of-type(3) img { ${tw`w-[175px] xs:w-[190px] sm:w-[210px] lg:w-[175px] 2xl:w-[215px]`} }
    &:nth-of-type(4) img { ${tw`w-[130px] sm:w-[150px] lg:w-[120px] 2xl:w-[140px]`} }
    &:nth-of-type(5) img { ${tw`w-[255px] 2xl:w-[290px]`} }
    &:nth-of-type(6) { ${tw`lg:pt-4 2xl:pt-10`}}
    &:nth-of-type(6) img { ${tw`w-[65px] sm:w-[110px] lg:w-[80px] 2xl:w-[115px]`} }
    &:nth-of-type(7) img { ${tw`w-[110px] sm:w-[185px] lg:w-[110px] 2xl:w-[160px]`} }
`;

export const Frame = tw.div`
    flex flex-col justify-evenly items-center
    h-40 sm:h-44
    lg:(justify-between
        h-40)
`;

export const Image = tw.img`select-none pointer-events-none`;

export const Group = tw(CardGroupTheme)`
    sm:(inline
        space-x-4)
    lg:(flex
        space-x-0)
    2xl:(flex-row
        space-x-4 space-y-0)
`;

export const Box = tw(CardBoxTheme)`xs:max-w-[300px]`;