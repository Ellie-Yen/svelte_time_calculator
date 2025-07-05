<script lang="ts">
	import type { LabelProps } from '$lib/types/timestamp';

	const { for: htmlFor, text }: LabelProps = $props();
</script>

<label for={htmlFor} class="mb-1 block text-sm font-medium text-gray-700">
	{text}
</label>
