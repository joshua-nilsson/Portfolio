import tw from "twin.macro"
import styled from "styled-components"
import { motion } from "framer-motion"
import ReactCanvasConfetti from "react-canvas-confetti"

export const containerTheme = `
	flex flex-col
	md:(max-w-[700px] mx-auto)
	lg:max-w-[950px] xl:max-w-[1180px] 2xl:max-w-[1440px]
`;

export const HeaderTheme = tw.header`${containerTheme}`;

export const MainTheme = tw.main`
	${containerTheme}
	mx-6 sm:mx-10
`;

export const HeadingTheme = tw.h2`
	text-2xl text-black font-black uppercase
	msm:text-3xl sm:text-4xl md:text-6xl
`;

export const LineTheme = tw.hr`
	w-12 h-1.5
	mt-1
	bg-primary border-none rounded-3xl
	msm:w-16 sm:w-20 md:w-24 lg:w-24
`;

export const sectionHoverLineTheme = tw`w-20 xs:w-24 msm:w-32 sm:w-36 md:w-44`;

export const ButtonGroupTheme = tw.div`
	flex justify-center
	space-x-5
`;

export const ButtonTheme = tw.button`
	mt-8 p-5
	text-xs text-center font-medium uppercase
	border-sm border-tertiary rounded-md shadow-theme
	cursor-pointer
	transition-all duration-300
	hover:(bg-tertiary border-sm border-primary) active:(bg-quaternary border-sm border-tertiary) 
	xs:text-sm sm:text-base
`;

export const buttonPrimaryTheme = tw`
	bg-primary
	text-white
	active:(bg-quaternary border-sm border-tertiary)
`;

export const buttonSecondaryTheme = tw`
	bg-whiteExact
	text-primary
	hover:text-white active:text-white
`;

export const tooltipTheme = tw`
	font-semibold tracking-wider!
	rounded-xl!
	opacity-95!
	select-none
	msm:py-3! lg:py-4!
`;

export const SliderTheme = styled(motion.div)`
	& .projectSwiper,
	& .courseSwiper,
	& .certificateSwiper {
		${tw`mb-7 pb-14`}

		& .swiper-pagination-progressbar,
		& .swiper-pagination-bullet { ${tw`bg-black`}}

		& .swiper-pagination-progressbar-fill,
		& .swiper-pagination-bullet-active { ${tw`bg-primary`}}

		& .swiper-button-prev,
		& .swiper-button-next { ${tw`text-primary!`} }
		
		& .swiper-wrapper {
			${tw`
			flex-row
			w-[650%]
			cursor-[grab]
			`}
		}
	}

	& .courseSwiper .swiper-slide {
		${tw`
		border-sm border-b-none border-transparent rounded-2xl
		transition-all duration-200
		hover:border-primary
		`}
	}
`;

export const SlideImageTheme = tw.img`rounded-2xl`;

export const SlideGroupTheme = styled(motion.div)`
	${tw`
	flex flex-col justify-center items-center
	absolute inset-0
	p-10
	border-sm border-b-[10px] border-transparent rounded-2xl
	transition-all ease-in-out duration-150
	hover:(bg-secondary border-primary bg-opacity-[98%])
	msm:p-2 sm:p-10
	`}

	&:hover a, &:hover span, &:hover svg {${tw`visible`}}
	&:hover a {${tw`bg-primary border-tertiary`}}
`;

export const SlideTitleTheme = tw(motion.span)`
	invisible
	w-11/12
	mb-4
	text-center font-medium tracking-wider uppercase text-white
	overflow-hidden overflow-ellipsis whitespace-nowrap
	transition-all ease-in-out duration-100
	msm:(mb-2.5
		text-xs)
	sm:(w-full mb-4
		text-sm
		overflow[initial] text-overflow[initial] whitespace-normal
		)
	md:text-base lg:text-sm xl:text-base
`;

export const BubbleLinkTheme = styled(motion.a)`
	${tw`
	invisible
	p-3
	bg-primary border-sm border-tertiary rounded-full
	transition-all ease-in-out duration-100
	hover:(bg-tertiary! border-primary!)
	active:(bg-quaternary! border-tertiary!)
	msm:p-2	sm:p-4
	`}

	& img, & svg {
		${tw`
		invisible
		w-6 h-6
		text-white
		transition-all ease-in-out duration-100
		xs:(w-7 h-7) msm:(w-5 h-5) sm:(w-7 h-7)
		`}
	}

	&:hover svg, &:active svg {
		${tw`
		visible
		text-whiteExact
		`}
	}
`;

export const CardGroupTheme = tw.div`
	flex flex-col justify-center items-center
	mt-5 space-y-4
	text-center
`;

export const CardBoxTheme = tw.span`
	max-w-[225px]
	mx-auto px-4 py-1
	text-xs font-semibold tracking-wider uppercase text-white
    overflow-hidden overflow-ellipsis whitespace-nowrap
	rounded-[4px]
    first:bg-grayAlt last:bg-primary
	2xl:(max-w-[initial]
        mx-0
        text-sm)
`;

export const formLabelTheme = tw`
	absolute left-[52px] -top-2.5
	bg-whiteAlt
	text-gray
	cursor-text select-none
	z-10
	-translate-y-6 scale-75 origin-[0%] transform-none! duration-100
	focus:text-black
	peer-placeholder-shown:(top-1/3 -translate-y-1/2 scale-100)
	peer-focus:(
		-top-2.5 px-2
		bg-white
		font-medium text-grayAlt
		-translate-y-6 scale-75)
	xs:(left-[80px] peer-focus:left-[72px]) sm:(left-[100px] peer-focus:left-[92px])
`;

export const formFieldTheme = tw`
	w-full
	px-3
	bg-whiteAlt
	border-msm border-l-none border-transparent outline-[0] rounded-l-none rounded-r-[0.5rem]
	focus:(bg-white border-grayAlt outline-[0])
	focus-visible:outline-[0]
	xs:px-5 sm:px-7
`;

export const footerOffsetTheme = tw`relative top-[2px]`;

export const CircleTheme = styled(motion.img)`
	${tw`
	hidden
	absolute
	object-contain
	select-none pointer-events-none
	lg:flex
	`}

	// FIREFOX HOTFIX
	@supports (-moz-appearance: none) { ${tw`transform-none!`} }
`;

export const Confetti = styled(ReactCanvasConfetti)`
	${tw`
	fixed top-0 left-0
	w-full h-full
	pointer-events-none
	z-[1000]
	`}
`;