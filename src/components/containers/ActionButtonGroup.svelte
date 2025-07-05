<script lang="ts">
	import type { ActionButtonGroupProps } from '../../lib/types/timestamp';
	import Button from '../ui/Button.svelte';

	const { onReset, onSwitch, onResetAll }: ActionButtonGroupProps = $props();
</script>

<div class="flex flex-col gap-2">
	<Button variant="secondary" onclick={onReset}>
		Reset Duration
	</Button>
	<Button variant="primary" onclick={onSwitch}>
		Switch Input/Result
	</Button>
	<Button variant="danger" onclick={onResetAll}>
		Reset All
	</Button>
</div>