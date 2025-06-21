import { formatDate } from './formatters';

/**
 * @description Converts a date string to a timestamp in milliseconds.
 */
export const dateToTimestamp = (dateString: string, timeZone?: string): number => {
	try {
		if (timeZone) {
			// If a time zone is provided, create a date in that time zone
			dateString + ' ' + timeZone;
		}
		const date = new Date(dateString);
		const timestamp = date.getTime();
		if (isNaN(timestamp)) {
			throw new Error('Invalid date');
		}
		return timestamp;
	} catch (error) {
		console.error('Invalid date string:', dateString, error);
		return 0; // Return 0 or handle the error as needed
	}
};

/**
 * @description Converts a timestamp in milliseconds to a date string.
 * If a time zone is provided, it formats the date accordingly.
 */
export const timestampToDate = (timestampInMS: number, timeZone?: string): string => {
	try {
		const date = new Date(timestampInMS);
		if (isNaN(date.getTime())) {
			throw new Error('Invalid timestamp');
		}
		return formatDate(date, timeZone);
	} catch (error) {
		console.error('Invalid timestamp:', timestampInMS, error);
		return ''; // Return an empty string or handle the error as needed
	}
};

/**
 * @param timestamp in milliseconds
 * @returns timestamp in UNIX seconds
 */
export const timestampToUNIX = (timestamp: number) => {
	return Math.floor(timestamp / 1_000);
};

/**
 * @param timestamp in milliseconds
 * @returns timestamp in UNIX nanoseconds
 */
export const timestampToUNIXNanosecond = (timestamp: number): number => {
	return timestamp * 1_000_000;
};

/**
 * @description convert timestamp from user input to milliseconds for javascript.
 * @param timestamp in UNIX seconds or nanoseconds
 * @returns timestamp in milliseconds
 */

export const convertTimestamp = (timestampStr: string): number => {
	try {
		const timestamp = parseInt(timestampStr, 10);

		if (isNaN(timestamp)) {
			return timestamp;
		}

		const digitCount = Math.abs(timestamp).toString().length;

		// Define reasonable time boundaries
		const MIN_SECONDS = 0; // 1970-01-01
		const MAX_SECONDS = 4102444800; // 2100-01-01

		// Seconds: 9-11 digits
		if (digitCount >= 9 && digitCount <= 11) {
			if (timestamp >= MIN_SECONDS && timestamp <= MAX_SECONDS) {
				return timestamp * 1000; // Convert seconds to milliseconds
			}
		}

		// Milliseconds: 12-14 digits
		else if (digitCount >= 12 && digitCount <= 14) {
			const timestampSeconds = Math.floor(timestamp / 1000);
			if (timestampSeconds >= MIN_SECONDS && timestampSeconds <= MAX_SECONDS) {
				return timestamp; // Already in milliseconds
			}
		}

		// Microseconds: 15-17 digits
		else if (digitCount >= 15 && digitCount <= 17) {
			const timestampSeconds = Math.floor(timestamp / 1_000_000);
			if (timestampSeconds >= MIN_SECONDS && timestampSeconds <= MAX_SECONDS) {
				return timestamp / 1000; // Convert microseconds to milliseconds
			}
		}

		// Nanoseconds: 18-20 digits
		else if (digitCount >= 18 && digitCount <= 20) {
			const timestampSeconds = Math.floor(timestamp / 1_000_000_000);
			if (timestampSeconds >= MIN_SECONDS && timestampSeconds <= MAX_SECONDS) {
				return timestamp / 1_000_000; // Convert nanoseconds to milliseconds
			}
		}

		return NaN;
	} catch (error) {
		return NaN;
	}
};
