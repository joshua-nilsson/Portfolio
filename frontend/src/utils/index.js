import { track } from '@vercel/analytics'
import { event } from 'nextjs-google-analytics'

export const trackEvent = (label) => {
	track(label);
	event(label);
};
