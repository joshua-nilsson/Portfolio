import { track } from '@vercel/analytics'
import { event } from 'nextjs-google-analytics'

export default trackEvent = (label) => {
	track(label);
	event(label);
};
