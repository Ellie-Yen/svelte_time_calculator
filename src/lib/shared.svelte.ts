import { timestampToDate } from '../utils/converters';

// default values
const now = Date.now();
const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

interface State {
	timestamp: number;
	date: string;
	timezone: string;
}
export const initialState = $state<State>({
	timestamp: now,
	date: timestampToDate(now, timezone),
	timezone: timezone
});

export const resultState = $state<State>({
	timestamp: now,
	date: timestampToDate(now, timezone),
	timezone: timezone
});

const updateState = (state: State, newTimestamp: number) => {
	state.timestamp = newTimestamp;
	state.date = timestampToDate(newTimestamp, state.timezone);
};

export const updateInitialState = (newTimestamp: number) => updateState(initialState, newTimestamp);
export const updateResultState = (newTimestamp: number) => updateState(resultState, newTimestamp);

const dayInMs = 86_400_000; // 24 * 60 * 60 * 1000
const hourInMs = 3_600_000; // 60 * 60 * 1000
const minuteInMs = 60_000; // 60 * 1000
export const changeAmount = $state({
	days: 0,
	hours: 0,
	minutes: 0
});

// listen to changes in changeAmount and update the result state accordingly
export const handleChangeAmountUpdate = () => {
	const duration =
		changeAmount.days * dayInMs + changeAmount.hours * hourInMs + changeAmount.minutes * minuteInMs;

	// update result state based on the initial state and the change amount
	const newTimestamp = initialState.timestamp + duration;
	updateResultState(newTimestamp);
};

export const resetChangeAmount = () => {
	changeAmount.days = 0;
	changeAmount.hours = 0;
	changeAmount.minutes = 0;
};
export const switchStates = () => {
	const resultTimestamp = resultState.timestamp;
	updateInitialState(resultTimestamp);
	changeAmount.days = -changeAmount.days;
	changeAmount.hours = -changeAmount.hours;
	changeAmount.minutes = -changeAmount.minutes;
};

export const resetStates = () => {
	const now = Date.now();
	updateInitialState(now);
	resetChangeAmount();
};

export const copyToClipboard = async (text: string) => {
	await navigator.clipboard.writeText(text);
};
