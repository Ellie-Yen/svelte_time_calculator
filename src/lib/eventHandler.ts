import { convertTimestamp, dateToTimestamp } from '../utils/converters';

const inputEventValueGetter = (event: InputEvent): string => {
	const target = event.target as HTMLInputElement;
	return target.value.trim();
};

export const inputEventHandlers = (updater: (value: number) => void) => ({
	timestamp: (event: InputEvent) => {
		const value = inputEventValueGetter(event);
		updater(convertTimestamp(value));
	},
	date: (event: InputEvent) => {
		const value = inputEventValueGetter(event);
		updater(dateToTimestamp(value));
	}
});
