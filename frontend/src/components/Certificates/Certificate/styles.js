import { SlideImageTheme, SlideGroupTheme, SlideTitleTheme, BubbleLinkTheme } from "../../../styles/globalThemeStyles"
import styled from "styled-components"
import tw from "twin.macro"

export const Card = tw.div`shadow-theme`;

export const Frame = tw.div`
    flex flex-col
    select-none
`;

export const Image = styled(SlideImageTheme)``;
export const Group = styled(SlideGroupTheme)``;
export const Title = styled(SlideTitleTheme)``;
export const Link = styled(BubbleLinkTheme)``;