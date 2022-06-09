import tw from "twin.macro"

export const Image = tw.img`
    w-24 h-24
    object-contain
    select-none pointer-events-none
    xs:w-32 sm:w-40 md:w-48
    lg:(w-40
        ml-32)
`;