<script lang="ts">
	import type { TimestampCardProps } from '../../lib/types/timestamp';
	import TimestampInput from '../forms/TimestampInput.svelte';
	import DateInput from '../forms/DateInput.svelte';

	const { title, timestamp, date, timezone, onTimestampChange, onDateChange }: TimestampCardProps =
		$props();

	const handleTimestampChange = (value: number) => {
		onTimestampChange(value);
	};

	const handleDateChange = (value: string) => {
		onDateChange(value);
	};
</script>

<div class="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
	<h2 class="mb-4 text-lg font-semibold">{title}</h2>
	<div class="flex flex-col gap-4">
		<TimestampInput value={timestamp} {timezone} oninput={handleTimestampChange} />
		<DateInput value={date} oninput={handleDateChange} />
		<div class="text-sm text-gray-600">
			<strong>Timezone:</strong>
			{timezone}
		</div>
	</div>
</div>
