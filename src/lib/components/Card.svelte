<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		header?: Snippet;
		children?: Snippet;
		footer?: Snippet;
	};

	let { header, children, footer }: Props = $props();
</script>

<article class="border border-gray-300 bg-white *:p-4">
	{#if header}
		<header class="flex justify-between">
			{@render header()}
		</header>
	{/if}
	{#if children}
		<div class="border-t border-gray-300">
			{@render children()}
		</div>
	{/if}
	{#if footer}
		<footer class="flex gap-4 border-t border-gray-300">
			{@render footer()}
		</footer>
	{/if}
</article>
