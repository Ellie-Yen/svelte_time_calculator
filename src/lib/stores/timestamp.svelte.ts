import { timestampToDate, dateToTimestamp } from '../../utils/converters';
import type { TimestampState, DurationState, DurationField } from '../types/timestamp';

export function timestampStore() {
	const now = Date.now();
	const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

	const initialState = $state<TimestampState>({
		timestamp: now,
		date: timestampToDate(now, timezone),
		timezone: timezone
	});

	const resultState = $state<TimestampState>({
		timestamp: now,
		date: timestampToDate(now, timezone),
		timezone: timezone
	});

	const duration = $state<DurationState>({
		days: 0,
		hours: 0,
		minutes: 0
	});

	// Constants for time calculations
	const DAY_IN_MS = 86_400_000; // 24 * 60 * 60 * 1000
	const HOUR_IN_MS = 3_600_000; // 60 * 60 * 1000
	const MINUTE_IN_MS = 60_000; // 60 * 1000

	// Helper function to update state
	const updateState = (state: TimestampState, newTimestamp: number) => {
		state.timestamp = newTimestamp;
		state.date = timestampToDate(newTimestamp, state.timezone);
	};

	// Calculate result based on initial state and duration
	const calculateResult = () => {
		const durationMs =
			duration.days * DAY_IN_MS + duration.hours * HOUR_IN_MS + duration.minutes * MINUTE_IN_MS;

		const newTimestamp = initialState.timestamp + durationMs;
		updateState(resultState, newTimestamp);
	};

	// Auto-calculate result when initial state or duration changes
	$effect(() => {
		calculateResult();
	});

	return {
		// State getters
		get initial() {
			return initialState;
		},
		get result() {
			return resultState;
		},
		get duration() {
			return duration;
		},

		// State updaters
		updateInitialTimestamp: (timestamp: number) => {
			updateState(initialState, timestamp);
		},

		updateInitialDate: (dateString: string) => {
			const timestamp = dateToTimestamp(dateString, initialState.timezone);
			updateState(initialState, timestamp);
		},

		updateResultTimestamp: (timestamp: number) => {
			updateState(resultState, timestamp);
		},

		updateResultDate: (dateString: string) => {
			const timestamp = dateToTimestamp(dateString, resultState.timezone);
			updateState(resultState, timestamp);
		},

		updateDuration: (field: DurationField, value: number) => {
			duration[field] = value;
		},

		// Actions
		resetDuration: () => {
			duration.days = 0;
			duration.hours = 0;
			duration.minutes = 0;
		},

		switchStates: () => {
			const resultTimestamp = resultState.timestamp;
			updateState(initialState, resultTimestamp);
			duration.days = -duration.days;
			duration.hours = -duration.hours;
			duration.minutes = -duration.minutes;
		},

		resetAll: () => {
			const now = Date.now();
			updateState(initialState, now);
			duration.days = 0;
			duration.hours = 0;
			duration.minutes = 0;
		},

		copyToClipboard: async (text: string) => {
			await navigator.clipboard.writeText(text);
		}
	};
}
