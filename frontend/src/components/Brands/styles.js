import styled from "styled-components"
import tw from "twin.macro"

export const Wrapper = styled.div`
    ${tw`
    flex justify-evenly items-start
    my-24
    xs:(justify-around
        mt-20)
    sm:(mt-28 mb-40) md:(mt-40 mb-52)
    lg:(flex-col
        mb-60)
    `}

    & > div:first-of-type img {
        ${tw`
        lg:(ml-0 w-64)
        xl:w-72 2xl:w-80
        `}
    }
`;

export const Group = styled.div`
    ${props => props.type === "desktop" ? (
        tw`
        hidden
        w-full
        lg:(flex justify-between items-center
            space-x-0 space-y-0 first:mb-24)
        2xl:justify-around`
        ) : (
        tw`
        flex flex-col
        space-y-0 xs:space-y-8 sm:space-y-20            
        lg:hidden`
    )}
`;