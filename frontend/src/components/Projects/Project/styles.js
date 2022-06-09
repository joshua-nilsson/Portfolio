import tw from "twin.macro"
import { SlideImageTheme, SlideGroupTheme, SlideTitleTheme, BubbleLinkTheme } from "../../../styles/globalThemeStyles"

export const Slide = tw.div``;

export const Frame = tw.div`
    relative
    shadow-theme
    select-none
`;

export const Image = tw(SlideImageTheme)``;
export const Group = tw(SlideGroupTheme)``;
export const Title = tw(SlideTitleTheme)``;

export const Box = tw.div`
    flex justify-between
    w-4/5
    xs:(justify-around
        w-3/4)
    sm:(justify-evenly
        w-full)
`;
export const Link = tw(BubbleLinkTheme)``;