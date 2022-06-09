import { HeadingTheme, LineTheme, ButtonGroupTheme, ButtonTheme, buttonSecondaryTheme, formLabelTheme, sectionHoverLineTheme, formFieldTheme, tooltipTheme } from "../../styles/globalThemeStyles"
import styled from "styled-components"
import tw from "twin.macro"
import { motion } from 'framer-motion'
import ReactTooltip from 'react-tooltip'
import PulseLoader from "react-spinners/PulseLoader"

export const Wrapper = styled.div`
    ${tw`
    flex flex-col
    w-full mt-24
    `}
    :hover > hr { ${sectionHoverLineTheme} }
`;

export const Heading = tw(HeadingTheme)``;

export const Line = tw(LineTheme)`transition-all duration-200`;

export const Frame = tw.div`
    flex flex-col
    w-full
    my-12 space-y-8
    lg:(flex-row justify-between
        space-x-12 space-y-0)
    xl:space-x-20 2xl:space-x-24
`;

export const InfoGroup = tw(motion.a)`
    flex justify-center items-center
    w-full
    px-10 py-6 space-x-4
    text-sm font-medium tracking-wider uppercase
    border-sm border-transparent rounded-lg shadow-theme
    transition-all duration-200
    first:(bg-accentPink bg-opacity-10 outline-color[#F948B4])
    last:(bg-accentOrange bg-opacity-10 outline-color[#F98A10])
    first:hover:(border-accentPink bg-opacity-20)
    last:hover:(border-accentOrange bg-opacity-20)
    sm:space-x-6 md:space-x-8 lg:px-0
`;

export const InfoIcon = tw(motion.img)`
    w-10 h-10
    object-contain
    select-none pointer-events-none
    sm:(w-12 h-12) md:(w-16 h-16)
`;

export const InfoText = tw.span`text-[.6rem] xs:text-xs md:text-sm`;

export const Form = tw.form`flex flex-col`;

export const FormFrame = tw.div`
    flex flex-col
    space-y-8
    last:items-center
`;

export const FormGroup = styled.div`
    ${tw`
        flex flex-row-reverse
        relative
    `}

    input,
    textarea { ${props => props.isLength && tw`bg-white border-gray`} }

    label:first-of-type {
        ${props => props.isLength && tw`
            bg-gray border-gray
            sm:px-6
        `}
    }

    label:last-of-type {
        ${props => props.isLength && tw`
            left-[52px]
            px-2
            bg-white
            text-gray font-medium
            xs:left-[72px] sm:left-[92px]
        `}
    }
`;

export const FormInput = styled.input`
    ${formFieldTheme}
    ${tw`
    min-height[4.5rem]
    py-4
    `}

    ${props => props.disabled && tw`cursor-not-allowed`}

    :focus-visible + label { ${tw`bg-grayAlt`} }

    // SAFARI HOTFIX
    @supports (background: -webkit-named-image(i)) { @media (min-width: 1280px) { &:focus { ${tw`border-grayAlt`} } } }
`;

export const FormTextarea = styled.textarea`
    ${formFieldTheme}
    ${tw`
    min-height[8rem]
    py-[1.4rem]
    resize-none
    `}

    ${props => props.disabled && tw`cursor-not-allowed`}

    :focus-visible + label { ${tw`bg-grayAlt`} }

    // SAFARI HOTFIX
    @supports (background: -webkit-named-image(i)) { @media (min-width: 1280px) { &:focus { ${tw`border-grayAlt`} } } }
`;

export const FormIconLabel = styled.label`
    ${tw`
    flex justify-center items-center
    p-3
    bg-gray rounded-l-[0.5rem] rounded-r-none
    cursor-pointer select-none
    transition-all duration-200
    hover:bg-grayAlt
    xs:p-5 sm:p-6
    `}

    & svg {
        ${tw`
        w-4 h-4
        fill-whiteExact
        xs:(w-5 h-5) sm:(w-6 h-6)
        `}
    }
`;

export const FormInputLabel = styled.label`${formLabelTheme}`;

export const FormTextareaLabel = styled.label`
    ${formLabelTheme}
    ${tw`peer-placeholder-shown:top-[20%] peer-focus:-top-2.5`}
`;

export const FormButtonGroup = tw(ButtonGroupTheme)`
    w-full max-w-[272px]
    my-8 sm:(mt-12 mb-16)
    xs:max-w-[302px] msm:max-w-[377px] sm:max-w-[480px]
`;

export const FormButton = styled(ButtonTheme)`
    ${tw`
    flex justify-center items-center
    w-full h-[72px]
    m-0
    `}

    span { ${tw`space-x-2`}}
    span span { ${tw`bg-purpleCircle bg-cover`} }

    ${props => props.disabled ? 
        tw`
        bg-whiteAlt border-gray
        text-gray
        cursor-not-allowed
        hover:(bg-whiteAlt border-gray text-gray)`
        : buttonSecondaryTheme
    }

    ${props => props.isLoading && tw`leading-[0]`}
`;

export const FormButtonTooltip = styled(ReactTooltip)`${tooltipTheme}`;

export const FormButtonLoader = tw(PulseLoader)``;

export const FormErrorMessage = styled.p`
    ${tw`
    flex items-center
    mt-4!
    text-sm font-medium capitalize text-error lg:text-base
    `}

    & svg {
        ${tw`
        w-5 h-5
        mr-2
        `}
    }
`;

export const FormSubmitMessage = tw(motion.div)`
    flex justify-center items-center
    mt-9
    text-xl font-bold
    transition-all duration-200
    xs:text-2xl sm:text-3xl
`;

export const FormSubmitMessageEmoji = tw(motion.img)`
    inline-block
    w-8 h-8
    ml-4
    text-primary
    cursor-default select-none pointer-events-none
`;