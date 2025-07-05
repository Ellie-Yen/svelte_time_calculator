<script lang="ts">
	import type { DateInputProps } from '../../lib/types/timestamp';
	import Input from '../ui/Input.svelte';
	import Label from '../ui/Label.svelte';

	const { value, oninput }: DateInputProps = $props();

	const handleDatetimeInput = (event: Event) => {
		const target = event.target as HTMLInputElement;
		oninput(target.value);
	};

	const handleTextInput = (event: Event) => {
		const target = event.target as HTMLInputElement;
		oninput(target.value);
	};
</script>

<div class="flex flex-col gap-1">
	<Label for="date-input" text="Date" />
	<Input id="date-input" type="datetime-local" {value} oninput={handleDatetimeInput} />
	<Input
		id="date-input-text"
		type="text"
		{value}
		oninput={handleTextInput}
		placeholder="Enter date string"
	/>
</div>
