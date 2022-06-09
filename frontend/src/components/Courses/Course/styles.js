import { CardGroupTheme,CardBoxTheme } from "../../../styles/globalThemeStyles"
import tw from "twin.macro"

export const Card = tw.div`bg-whiteExact rounded-2xl shadow-theme`;

export const Frame = tw.div`
    flex flex-col justify-between items-center
    px-12 py-8
`;

export const Image = tw.img`select-none`;

export const Bar = tw.div`
    absolute bottom-[0]
    w-full h-[10px]
    bg-primary rounded-t-none rounded-b-[1rem]
    transition-all duration-300
`;

export const Group = tw(CardGroupTheme)``;

export const Box = tw(CardBoxTheme)`xs:max-w-[275px] sm:max-w-[225px] md:max-w-[175px] lg:max-w-[225px] xl:max-w-[275px]`;