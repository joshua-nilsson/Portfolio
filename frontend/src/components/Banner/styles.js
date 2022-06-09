import tw from "twin.macro"

export const Wrapper = tw.a`
    flex justify-center items-center
    w-full
    mx-auto py-4
    bg-tertiary border-b-primary border-b-[4px]
    transition-all duration-300
    hover:(bg-quaternary) active:(bg-primary)
    sm:mx-0
`;

export const Icon = tw.img`
    w-5 h-5
    select-none pointer-events-none
`;

export const Headline = tw.div`
    mx-6
    text-base font-normal text-white
    md:text-lg
`;