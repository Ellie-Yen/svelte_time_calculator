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
	import DurationInputSection from './durationInputSection.svelte';

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
		<DurationInputSection {changeAmount} />
		<div class="flex flex-col gap-2">
			<button onclick={resetChangeAmount} class="btn">Reset Duration</button>
			<button onclick={switchStates} class="btn">Switch Input/Result</button>
			<button onclick={resetStates} class="btn">Reset All</button>
		</div>
	</div>
	<div class="displayer">
		<h1>Result</h1>
		<InputArea state={resultState} updator={updateResultState} />
	</div>
</div>
