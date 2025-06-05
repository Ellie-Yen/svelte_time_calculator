<script>
	import { displayData, isDefault, setDisplayData } from '../lib/shared.svelte';
	let intervalId = 0;
	$effect(() => {
		if (isDefault) {
			intervalId = setInterval(() => {
				setDisplayData(Date.now());
			}, 1_000);
		} else {
			clearInterval(intervalId);
			intervalId = 0;
		}
	});
</script>

<p>date: {displayData.date}</p>
<div>
	<p>milliseconds: {displayData.timestamp}</p>
	<p>UNIX: {displayData.timestampUNIX}</p>
	<p>UNIX nanos: {displayData.timestampUNIXNanoSecond}</p>
</div>
