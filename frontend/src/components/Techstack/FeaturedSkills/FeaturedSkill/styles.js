import tw from "twin.macro"

export const Card = tw.div`
    flex justify-center items-center
    w-full
    p-3
    bg-whiteExact border-sm border-transparent rounded-2xl shadow-theme
    transition-all duration-200
    hover:border-primary
    lg:p-2 xl:py-4 2xl:p-8
`;

export const Image = tw.img`
    w-32 h-16
    p-0
    object-contain
    select-none pointer-events-none
    sm:(w-40 h-20)
    lg:(w-48 h-24
        p-4)
    xl:p-3
`;