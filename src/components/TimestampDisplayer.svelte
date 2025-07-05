<script>
	import {
		initialState,
		updateInitialState,
		resultState,
		updateResultState,
		switchStates,
		resetStates,
		changeAmount,
		resetChangeAmount,
		handleChangeAmountUpdate
	} from '../lib/shared.svelte';
	import InputArea from './InputArea.svelte';

	$effect(() => {
		handleChangeAmountUpdate();
	});
</script>

<div class="timestamp-displayer flex flex-row gap-4">
	<div class="displayer">
		<h1>Input</h1>
		<InputArea state={initialState} updator={updateInitialState} />
	</div>

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
			<button onclick={resetChangeAmount} class="btn">Reset Duration</button>
			<button onclick={switchStates} class="btn">Switch</button>
			<button onclick={resetStates} class="btn">Reset</button>
		</div>
	</div>

	<div class="displayer">
		<h1>Result</h1>
		<InputArea state={resultState} updator={updateResultState} />
	</div>
</div>
