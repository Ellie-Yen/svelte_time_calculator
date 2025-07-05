<script lang="ts">
	import { timestampStore } from '$lib/stores/timestamp.svelte';
	import TimestampCard from '../components/containers/TimestampCard.svelte';
	import ActionButtonGroup from '../components/containers/ActionButtonGroup.svelte';
	import DurationInput from '../components/forms/DurationInput.svelte';

	const store = timestampStore();
</script>

<div class="min-h-screen bg-gray-50 py-8">
	<div class="mx-auto max-w-7xl px-4 px-6 px-8">
		<div class="mb-8 text-center">
			<h1 class="text-3xl font-bold text-gray-900">Time Calculator</h1>
			<p class="mt-2 text-gray-600">Convert timestamps and calculate time differences</p>
		</div>

		<div class="grid grid-cols-1 grid-cols-3 gap-6">
			<!-- Input Section -->
			<div class="col-span-1">
				<TimestampCard
					title="Input"
					timestamp={store.initial.timestamp}
					date={store.initial.date}
					timezone={store.initial.timezone}
					onTimestampChange={store.updateInitialTimestamp}
					onDateChange={store.updateInitialDate}
				/>
			</div>

			<!-- Duration & Actions Section -->
			<div class="col-span-1 space-y-6">
				<div class="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
					<DurationInput
						days={store.duration.days}
						hours={store.duration.hours}
						minutes={store.duration.minutes}
						onChange={store.updateDuration}
					/>
				</div>

				<div class="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
					<h3 class="mb-4 text-lg font-semibold">Actions</h3>
					<ActionButtonGroup
						onReset={store.resetDuration}
						onSwitch={store.switchStates}
						onResetAll={store.resetAll}
					/>
				</div>
			</div>

			<!-- Result Section -->
			<div class="col-span-1">
				<TimestampCard
					title="Result"
					timestamp={store.result.timestamp}
					date={store.result.date}
					timezone={store.result.timezone}
					onTimestampChange={store.updateResultTimestamp}
					onDateChange={store.updateResultDate}
				/>
			</div>
		</div>
	</div>
</div>
