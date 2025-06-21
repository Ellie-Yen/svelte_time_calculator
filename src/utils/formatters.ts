export function formatDate(date: Date, timezone?: string): string {
	if (!timezone) {
		return date.toISOString();
	}

	// If a time zone is provided, format the date accordingly
	const options: Intl.DateTimeFormatOptions = {
		timeZone: timezone,
		year: 'numeric',
		month: '2-digit',
		day: '2-digit',
		hour: '2-digit',
		minute: '2-digit',
		second: '2-digit',
		hour12: false // Use 24-hour format
	};
	const formatter = new Intl.DateTimeFormat('en-US', options);

	// format into iso format
	const parts = formatter.formatToParts(date);
	const yyyy = parts.find((part) => part.type === 'year')?.value || '';
	const mm = parts.find((part) => part.type === 'month')?.value || '';
	const dd = parts.find((part) => part.type === 'day')?.value || '';
	const hh = parts.find((part) => part.type === 'hour')?.value || '';
	const min = parts.find((part) => part.type === 'minute')?.value || '';
	const ss = parts.find((part) => part.type === 'second')?.value || '';
	return `${yyyy}-${mm}-${dd}T${hh}:${min}:${ss}`;
}
