<script>
	const { changeAmount } = $props();
</script>

<div class="displayer">
	<h1>Duration change</h1>
	<div class="flex flex-col gap-2">
		<label>
			<input type="number" bind:value={changeAmount.days} class="input" />
			Days
		</label>
		<label>
			<input type="number" bind:value={changeAmount.hours} class="input" />
			Hours
		</label>
		<label>
			<input type="number" bind:value={changeAmount.minutes} class="input" />
			Minutes
		</label>
	</div>
</div>
