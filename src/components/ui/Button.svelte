<script lang="ts">
	import type { ButtonProps } from '$lib/types/timestamp';

	const { variant = 'primary', disabled = false, onclick, ...props }: ButtonProps = $props();

	const baseClasses =
		'px-4 py-2 rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2';
	const variantClasses = {
		primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
		secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-500',
		danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500'
	};
	const disabledClasses = 'opacity-50 cursor-not-allowed';

	const classes = `${baseClasses} ${variantClasses[variant]} ${disabled ? disabledClasses : ''}`;
</script>

<button class={classes} {disabled} {onclick} {...props}>
	<slot />
</button>
