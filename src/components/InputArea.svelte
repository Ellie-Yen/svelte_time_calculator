<script>
	// import { initialState } from '../lib/shared.svelte';
	import { inputEventHandlers } from '../lib/eventHandler';

	const { state, updator } = $props();
	const handlers = inputEventHandlers(updator);
</script>

<div class="timestamp-converter">
	<div class="input-group">
		<label for="timestamp-input">timestamp</label>
		<input
			id="timestamp-input"
			type="number"
			value={state.timestamp}
			oninput={handlers.timestamp}
			class="timestamp-input"
		/>
	</div>

	<div class="input-group">
		<label for="date-input">date</label>
		<input
			id="date-input"
			type="datetime-local"
			value={state.date}
			oninput={handlers.date}
			class="date-input"
		/>
		<input
			id="date-input-text"
			type="text"
			value={state.date}
			oninput={handlers.date}
			class="date-input"
		/>
	</div>
	<div>
		<p>timezone: {state.timezone}</p>
	</div>
</div>

<style>
	.timestamp-converter {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		max-width: 400px;
	}

	.input-group {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
	}

	label {
		font-weight: 500;
		font-size: 0.875rem;
		color: #374151;
	}

	input {
		padding: 0.5rem;
		border: 1px solid #d1d5db;
		border-radius: 0.375rem;
		font-size: 0.875rem;
	}

	input:focus {
		outline: none;
		border-color: #3b82f6;
		box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
	}

	input:disabled {
		background-color: #f3f4f6;
		cursor: not-allowed;
	}
</style>
