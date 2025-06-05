import { timestampToDate, timestampToUNIX, timestampToUNIXNanosecond } from '../utils/converters';

const now = Date.now();
export const displayData = $state({
	date: timestampToDate(now),
	timestamp: now,
	timestampUNIX: timestampToUNIX(now),
	timestampUNIXNanoSecond: timestampToUNIXNanosecond(now)
});

export const setDisplayData = (timestamp: number) => {
	displayData.timestamp = timestamp;
	displayData.date = timestampToDate(timestamp);
	displayData.timestampUNIX = timestampToUNIX(timestamp);
	displayData.timestampUNIXNanoSecond = timestampToUNIXNanosecond(timestamp);
	return displayData;
};

export const isDefault = $state(true);
