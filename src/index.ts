import { messages } from './hello';

export const hello = (name: string, locale: keyof typeof messages) => {
	const msg = messages[locale];

	return msg.replace('${name}', name);
};
