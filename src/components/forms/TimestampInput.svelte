<script lang="ts">
	import type { TimestampInputProps } from '../../lib/types/timestamp';
	import { convertTimestamp } from '../../utils/converters';
	import Input from '../ui/Input.svelte';
	import Label from '../ui/Label.svelte';

	const { value, timezone, oninput }: TimestampInputProps = $props();

	const handleInput = (event: Event) => {
		const target = event.target as HTMLInputElement;
		const newValue = convertTimestamp(target.value.trim());
		oninput(newValue);
	};
</script>

<div class="flex flex-col gap-1">
	<Label for="timestamp-input" text="Timestamp" />
	<Input
		id="timestamp-input"
		type="number"
		{value}
		oninput={handleInput}
		placeholder="Enter timestamp"
	/>
</div>
