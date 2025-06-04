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
		if (timeZone) {
			// If a time zone is provided, format the date accordingly
			return date.toLocaleString('en-US', { timeZone });
		}
		return date.toISOString();
	} catch (error) {
		console.error('Invalid timestamp:', timestampInMS, error);
		return ''; // Return an empty string or handle the error as needed
	}
};

/**
 * @description Converts a timestamp from Golang format to milliseconds for javascript.
 * @param timestamp in UNIX seconds or nanoseconds
 * @returns timestamp in milliseconds
 */
export const timestampFromGolang = (timestamp: number): number => {
	if (timestamp < 1_000_000_000) {
		// If the timestamp is in seconds, convert to milliseconds
		return timestamp * 1_000;
	} else if (timestamp < 1_000_000_000_000) {
		// If the timestamp is in milliseconds, return as is
		return timestamp;
	} else {
		// If the timestamp is in nanoseconds, convert to milliseconds
		return Math.floor(timestamp / 1_000_000);
	}
};

/**
 * @description Converts a timestamp from Python format to milliseconds for javascript.
 * @param timestamp in UNIX seconds
 * @returns timestamp in milliseconds
 */
export const timestampFromPython = (timestamp: number): number => {
	return timestamp * 1_000;
};
