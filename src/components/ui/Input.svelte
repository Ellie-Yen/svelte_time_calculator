<script lang="ts">
	import type { InputProps } from '$lib/types/timestamp';

	const {
		type = 'text',
		value = '',
		placeholder = '',
		disabled = false,
		oninput,
		...props
	}: InputProps = $props();

	const baseClasses =
		'px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500';
	const disabledClasses = 'bg-gray-50 cursor-not-allowed';

	const classes = `${baseClasses} ${disabled ? disabledClasses : ''}`;
</script>

<input {type} {value} {placeholder} {disabled} {oninput} class={classes} {...props} />
