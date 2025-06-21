<script>
	import {
		initialState,
		updateInitialState,
		resultState,
		updateResultState
	} from '../lib/shared.svelte';
	import InputArea from './InputArea.svelte';

	let addHour = $state(0);
	const increaseAddHour = () => {
		addHour += 1;
		updateResultState(initialState.timestamp + addHour * 3600 * 1000);
	};
</script>

<div class="timestamp-displayer flex flex-row gap-4">
	<div class="displayer">
		<h1>Input</h1>
		<InputArea state={initialState} updator={updateInitialState} />
	</div>

	<div class="displayer">
		<h1>Actions</h1>
		<button onclick={increaseAddHour} class="btn">+{addHour} hour</button>
	</div>
	<div class="displayer">
		<h1>Result</h1>
		<InputArea state={resultState} updator={updateResultState} />
	</div>
</div>
