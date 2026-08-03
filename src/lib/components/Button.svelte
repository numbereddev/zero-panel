<script lang="ts">
	import { cn } from '$lib/utils';
	import type { Snippet } from 'svelte';

	type Props = {
		children: Snippet<[]>;
		class?: string;
	};

	let { children, class: className = '' }: Props = $props();
</script>

<button
	class={cn(
		`cursor-pointer border border-gray-300 bg-white px-5 py-3 font-mono uppercase`,
		className
	)}
>
	{@render children()}
</button>
