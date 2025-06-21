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

export const copyToClipboard = async (text: string) => {
	await navigator.clipboard.writeText(text);
};
