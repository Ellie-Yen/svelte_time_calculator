<script lang="ts">
	import type { DurationInputProps } from '../../lib/types/timestamp';
	import Input from '../ui/Input.svelte';
	import Label from '../ui/Label.svelte';

	const { days, hours, minutes, onChange }: DurationInputProps = $props();

	const handleDaysChange = (event: Event) => {
		const target = event.target as HTMLInputElement;
		onChange('days', parseInt(target.value) || 0);
	};

	const handleHoursChange = (event: Event) => {
		const target = event.target as HTMLInputElement;
		onChange('hours', parseInt(target.value) || 0);
	};

	const handleMinutesChange = (event: Event) => {
		const target = event.target as HTMLInputElement;
		onChange('minutes', parseInt(target.value) || 0);
	};
</script>

<div class="flex flex-col gap-3">
	<h2 class="text-lg font-semibold">Duration Change</h2>
	<div class="flex flex-col gap-2">
		<div class="flex items-center gap-2">
			<Input type="number" value={days} oninput={handleDaysChange} placeholder="0" />
			<span class="text-sm text-gray-600">Days</span>
		</div>
		<div class="flex items-center gap-2">
			<Input type="number" value={hours} oninput={handleHoursChange} placeholder="0" />
			<span class="text-sm text-gray-600">Hours</span>
		</div>
		<div class="flex items-center gap-2">
			<Input type="number" value={minutes} oninput={handleMinutesChange} placeholder="0" />
			<span class="text-sm text-gray-600">Minutes</span>
		</div>
	</div>
</div>
