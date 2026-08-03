<script lang="ts">
	import App from '$lib/components/pages/PageApp.svelte';
	import Home from '$lib/components/pages/PageHome.svelte';

	let { data } = $props();
</script>

{#if data.user}
	<App user={data.user} />
{:else}
	<Home />
{/if}
